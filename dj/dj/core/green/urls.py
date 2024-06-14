from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns


from . import views 



urlpatterns = [
    path('', views.Account.as_view(), name = 'accounts'),
    path('edit-details/', views.AccountChange.as_view(), name='edit-details'),
    path('login/', views.Login.as_view(),name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),
    path('signup/', views.Signup.as_view(), name='signup'),
    path('activate-account/', views.AccountActivationView.as_view(), name='account-activation'),
    path('password-change/', views.PasswordChangeView.as_view(), name='password-change'),
    path('password-reset/', views.PasswordResetView.as_view(), name='password-reset'),
    path('password-reset/verify/', views.PasswordResetVerifyView.as_view(), name='password-reset-verify'),
    path('email-change/', views.EmailChangeView.as_view(), name='email-change'),
    path('email-change/verify/', views.EmailChangeVerifyView.as_view(), name='email-change-verify'),
   
    path('users/<int:id>/', views.UserDetailView.as_view(), name='user-detail'),
  
    path('profilex/', views.ProfileView.as_view(), name='profile'),
    path('profile/', views.profile, name='profile'),
    path('pdf-documents/', views.PDFDocumentViewSet.as_view({'get': 'list', 'post': 'create'}), name='pdf-document-list'),
    path('pdf-documents/<int:pk>/', views.PDFDocumentViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='pdf-document-detail'),
    path('download-pdf/<int:pk>/', views.download_pdf, name='download_pdf'),
    path('api/posts/', views.PostListCreateAPIView.as_view(), name='post-list'),
    path('api/posts/<int:pk>/', views.PostDetailAPIView.as_view(), name='post-detail'),
    path('api/posts/<int:pk>/comments/', views.CommentListCreateAPIView.as_view(), name='comment-list'),
    path('api/comments/<int:pk>/', views.CommentDetailAPIView.as_view(), name='comment-detail'),
    path('api/create_post/', views.create_post, name='create-post'),

    path('posts/', views.PostCreateAPIView.as_view(), name='post-create'),
    path('comments/', views.CommentCreateAPIView.as_view(), name='comment-create'),
   
    
  
  
]

urlpatterns = format_suffix_patterns(urlpatterns)