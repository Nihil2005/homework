from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models import CustomUserProfile,PDFDocument,Post,Comment

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'whatsapp_number', 'is_active', 'is_staff', 'email_confirmed',  'email_verification_code')
    list_filter = ('is_staff', 'is_active', 'email_confirmed')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('first_name', 'last_name', 'whatsapp_number')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'email_confirmed', 'email_verification_code')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'first_name', 'last_name', 'whatsapp_number', 'is_active', 'is_staff', 'email_confirmed')}
        ),
    )
    search_fields = ('email', 'first_name', 'last_name', 'whatsapp_number')
    ordering = ('email',)

class CustomUserProfileAdmin(admin.ModelAdmin):
    list_display = ['email', 'first_name', 'last_name', 'whatsapp_number', 'id_proof']

admin.site.register(CustomUserProfile, CustomUserProfileAdmin) 
admin.site.register(PDFDocument)

admin.site.register(Post)
admin.site.register(Comment)

