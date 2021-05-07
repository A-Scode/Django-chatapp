"""
WSGI config for webs project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter ,URLRouter
from channels.auth import AuthMiddlewareStack
from . import routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webs.settings')

application = ProtocolTypeRouter({
    'http': get_wsgi_application(),

    'websocket':AuthMiddlewareStack(
        URLRouter(
            routing.websocket_urlpatterns
        )
    ),
    'wss':AuthMiddlewareStack(
        URLRouter(
            routing.websocket_urlpatterns
        )
    )

})
