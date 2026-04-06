from django.contrib import admin

from .models import ContactSubmission


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'service', 'created_at')
    search_fields = ('name', 'email', 'company', 'service', 'message')
    list_filter = ('service', 'created_at')
