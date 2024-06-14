
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.forms import ValidationError
from django.utils.translation import gettext as _
from django.contrib.auth import authenticate
from rest_framework import serializers

from rest_framework import serializers
from django.contrib.auth import authenticate


from green.models import CustomUserProfile
from .models import CustomUserProfile, PDFDocument,Comment, Post



class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'first_name', 'last_name', 'whatsapp_number')


class ProfileChangeSerializer(serializers.Serializer):
    first_name = serializers.CharField(required=False)
    last_name = serializers.CharField(required=False)



class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(style={'input_type': 'password'})

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'), email=email, password=password)

            if user:
                if not user.email_confirmed:
                    raise serializers.ValidationError(_('Email not confirmed. Please activate your account.'))

                data['user'] = user
                return data
            else:
                raise serializers.ValidationError(_('Invalid email or password.'))
        else:
            raise serializers.ValidationError(_('Must include "email" and "password".'))




class SignupSerializer(serializers.ModelSerializer):
    id_proof = serializers.FileField(write_only=True, required=True)  # Add id_proof field

    class Meta:
        model = CustomUserProfile
        fields = ('email', 'password', 'first_name', 'last_name', 'whatsapp_number', 'username', 'id_proof')
        extra_kwargs = {
            'password': {'write_only': True},
            'username': {'required': True}  # Ensure username is required
        }

    def validate_id_proof(self, value):
        # You can add validation for the id_proof field if needed
        # For example, you can validate the file type or size
        if value.content_type not in ['image/jpeg', 'image/png']:
            raise ValidationError(_('Only JPEG and PNG files are allowed.'))
        return value

    def create(self, validated_data):
        id_proof = validated_data.pop('id_proof')
        user = CustomUserProfile.objects.create_user(
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            whatsapp_number=validated_data.get('whatsapp_number'),
            id_proof=id_proof,  # Add id_proof to user creation
            username=validated_data['username']
        )
        return user









class AccountActivationSerializer(serializers.Serializer):
    code = serializers.CharField()


class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()
    

class PasswordResetVerifySerializer(serializers.Serializer):
    code = serializers.CharField()
    new_password = serializers.CharField(write_only=True, style={'input_type': 'password'}, validators=[validate_password])


class EmailChangeSerializer(serializers.Serializer):
    email = serializers.EmailField()


class EmailChangeVerifySerializer(serializers.Serializer):
    code = serializers.CharField()
    new_email = serializers.EmailField()


class PasswordChangeSerializer(serializers.Serializer):
    old_password = serializers.CharField(write_only=True, style={'input_type': 'password'})
    new_password = serializers.CharField(write_only=True, validators=[validate_password], style={'input_type': 'password'})


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'first_name', 'last_name')







class PDFDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PDFDocument
        fields = ['id', 'title', 'pdf_file']






class PostSerializer(serializers.ModelSerializer):
    # Update user field to use ProfileSerializer
    user = ProfileSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'user', 'title', 'content', 'image', 'created_at']

    def create(self, validated_data):
        # Include the user data from request context
        user_data = self.context['request'].user
        if isinstance(user_data, CustomUserProfile):
            validated_data['user'] = user_data
            return super().create(validated_data)
        else:
            raise ValueError("User must be authenticated.")

class CommentSerializer(serializers.ModelSerializer):
    # Update user field to use ProfileSerializer
    user = ProfileSerializer(read_only=True)
    
    class Meta:
        model = Comment
        fields = ['id', 'user', 'post', 'content', 'created_at']

    def create(self, validated_data):
        # Include the user data from request context
        user_data = self.context['request'].user
        if isinstance(user_data, CustomUserProfile):
            validated_data['user'] = user_data
            return super().create(validated_data)
        else:
            raise ValueError("User must be authenticated.")
