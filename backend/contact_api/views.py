import json
import logging
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from email.mime.image import MIMEImage
from .models import ContactSubmission

logger = logging.getLogger(__name__)

@csrf_exempt
@require_http_methods(['POST'])
def submit_contact(request):
    try:
        payload = json.loads(request.body.decode('utf-8'))
    except json.JSONDecodeError:
        return JsonResponse({'ok': False, 'error': 'Invalid JSON payload.'}, status=400)

    name = (payload.get('name') or '').strip()
    email = (payload.get('email') or '').strip()
    company = (payload.get('company') or '').strip()
    service = (payload.get('service') or '').strip()
    message = (payload.get('message') or '').strip()

    if not name or not email or not message:
        return JsonResponse({'ok': False, 'error': 'Name, email and message are required.'}, status=400)

    try:
        submission = ContactSubmission.objects.create(
            name=name,
            email=email,
            company=company,
            service=service,
            message=message,
        )

        # --- Email to client ---
        subject = "Thanks for contacting EdgeX 🚀"
        text_content = f"Hi {name}, Thank you for reaching out. We'll contact you within 24 hours."

        html_content = f"""
        <html>
        <body style="font-family: Arial, sans-serif; background-color:#f7f8fa; margin:0; padding:0;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color:#f7f8fa; padding:20px 0;">
                <tr>
                    <td align="center">
                        <table width="600" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                            <!-- Logo -->
                            <tr>
                                <td align="center" style="padding: 20px 0; background-color:#0d6efd;">
                                    <img src="cid:logo_image" alt="EdgeX Logo" width="150" style="display:block;">
                                </td>
                            </tr>
                            <!-- Greeting -->
                            <tr>
                                <td style="padding: 30px; color:#333333;">
                                    <h2 style="color:#0d6efd;">Hi {name}, 👋</h2>
                                    <p>Thank you for contacting <strong>EdgeX Systems</strong>. We have received your message and our team will get back to you within <strong>24 hours</strong>.</p>
                                    <p><strong>Your Message:</strong></p>
                                    <p style="background-color:#f1f1f1; padding:15px; border-radius:5px;">{message}</p>
                                </td>
                            </tr>
                            <!-- CTA Button -->
                            <tr>
                                <td align="center" style="padding: 20px;">
                                    <a href="mailto:{settings.EMAIL_HOST_USER}" 
                                       style="background-color:#0d6efd; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:5px; font-weight:bold;">
                                       Reply to EdgeX
                                    </a>
                                </td>
                            </tr>
                            <!-- Footer -->
                            <tr>
                                <td style="padding: 20px; text-align:center; color:#888888; font-size:12px;">
                                    © 2026 EdgeX Systems. All rights reserved.<br>
                                    123 Tech Street, Lahore, Pakistan
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        """

        email_message = EmailMultiAlternatives(
            subject=subject,
            body=text_content,
            from_email=settings.EMAIL_HOST_USER,
            to=[email],
        )

        email_message.attach_alternative(html_content, "text/html")

        # Attach logo inline
        with open(f"{settings.BASE_DIR}/static/images/logo.png", 'rb') as f:
            logo = MIMEImage(f.read())
            logo.add_header('Content-ID', '<logo_image>')
            logo.add_header('Content-Disposition', 'inline', filename='logo.png')
            email_message.attach(logo)

        email_message.send(fail_silently=False)

        return JsonResponse({'ok': True, 'id': submission.id, 'message': 'Submission successful.'}, status=201)

    except Exception as e:
        logger.error("Contact form error: %s", e)
        return JsonResponse({'ok': False, 'error': 'Server error. Please try again later.'}, status=500)