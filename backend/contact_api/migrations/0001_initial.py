from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name='ContactSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('email', models.EmailField(max_length=254)),
                ('company', models.CharField(blank=True, max_length=160)),
                ('service', models.CharField(blank=True, choices=[('IT Support', 'IT Support'), ('Cloud Services', 'Cloud Services'), ('Web Development', 'Web Development'), ('App Development', 'App Development'), ('Branding', 'Branding'), ('Video Editing', 'Video Editing'), ('Multiple Services', 'Multiple Services'), ('', 'Not specified')], max_length=64)),
                ('message', models.TextField(max_length=5000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={'ordering': ['-created_at']},
        ),
    ]
