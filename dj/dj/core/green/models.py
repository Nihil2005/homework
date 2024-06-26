import hashlib
import json
import re
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils.translation import gettext as _
from django.utils import timezone

from random import randint


from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext as _












class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, whatsapp_number=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        if not whatsapp_number:
            raise ValueError('The WhatsApp number field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, whatsapp_number=whatsapp_number, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
    
        
        user.save(using=self._db)
        return user
        
    
      
    def create_superuser(self, email, password=None, whatsapp_number=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, whatsapp_number, **extra_fields)

class CustomUserProfile(AbstractUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    email_confirmed = models.BooleanField(default=False, verbose_name=_('Email Confirmed'))
    email_verification_code = models.CharField(max_length=6, null=True, blank=True, verbose_name=_('Verification code'))
    whatsapp_number = models.CharField(max_length=20, verbose_name=_('WhatsApp Phone Number'))
    id_proof = models.FileField(upload_to='id_proof/')


    objects = CustomUserManager()

  



    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'whatsapp_number']

    def __str__(self):
        return self.email




class AccountActivation(models.Model):
    user = models.OneToOneField(CustomUserProfile, on_delete=models.CASCADE, related_name='email_confirmation')
    activation_code = models.CharField(max_length=6, null=True, blank=True, verbose_name=_('Activation Code'))
    created_at = models.DateTimeField(default=timezone.now, verbose_name=_('Creation Time'))

    def __str__(self):
        return f"Email Confirmation for {self.user.email}"

    def create_confirmation(self):
        code = str(randint(100000, 999999))  # Generate a random 6-digit code
        self.activation_code = code
        self.save()
        return code

    def verify_confirmation(self, code):
        if self.activation_code == code:
            self.user.email_confirmed = True
            self.user.save()
            self.delete()  # Remove the confirmation record
            return True

        # Invalid confirmation code
        return False

class PDFDocument(models.Model):
    title = models.CharField(max_length=100)
    pdf_file = models.FileField(upload_to='pdfs/')

    def __str__(self):
        return self.title




class Post(models.Model):
    user = models.ForeignKey(CustomUserProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='post_images/', null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

class Comment(models.Model):
    user = models.ForeignKey(CustomUserProfile, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Comment by {self.user.email} on {self.post.title}"