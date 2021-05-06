from .consumers import Chat_handler
from django.urls import re_path


websocket_urlpatterns = [

    re_path('^.*$' , Chat_handler.as_asgi()),
    
]