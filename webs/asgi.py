"""
ASGI config for webs project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/


"e:/python/Test Environments/django_env/Scripts/Activate"
"""
import django
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webs.settings')
django.setup()

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter ,URLRouter
from channels.auth import AuthMiddlewareStack
from . import routing



application = ProtocolTypeRouter({
    'http': get_asgi_application(),

    'websocket':AuthMiddlewareStack(
        URLRouter(
            routing.websocket_urlpatterns
        )
    )
})