from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RecipeViewSet, create_recipe

router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]