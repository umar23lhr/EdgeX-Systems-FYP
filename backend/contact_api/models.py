from django.db import models


class ContactSubmission(models.Model):
    SERVICE_CHOICES = [
        ('IT Support', 'IT Support'),
        ('Cloud Services', 'Cloud Services'),
        ('Web Development', 'Web Development'),
        ('App Development', 'App Development'),
        ('Branding', 'Branding'),
        ('Video Editing', 'Video Editing'),
        ('Multiple Services', 'Multiple Services'),
        ('', 'Not specified'),
    ]

    name = models.CharField(max_length=120)
    email = models.EmailField(max_length=254)
    company = models.CharField(max_length=160, blank=True)
    service = models.CharField(max_length=64, choices=SERVICE_CHOICES, blank=True)
    message = models.TextField(max_length=5000)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.name} <{self.email}>'
