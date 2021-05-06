"""
"E:\python\Test Environments\ws_env\Scripts\activate"
"""

from channels.generic.websocket import AsyncWebsocketConsumer

from asgiref.sync import async_to_sync

import channels.layers

import json

rooms  = []

class Chat_handler(AsyncWebsocketConsumer):
    
    async def connect(self):

        await self.accept()
        print('connected Websockets')
        print(self.scope)
        self.room_name = self.scope['path'][1::]
        if self.room_name not in rooms:
                rooms.append(self.room_name) 
        print("Channel Name : ", self.channel_name)

        await self.channel_layer.group_add(
            self.room_name, self.channel_name
        )
        
    async def disconnect(self , close_code):
        await self.channel_layer.group_discard(
            self.room_name,
            self.channel_name)
        await self.close()
        print("close code is: ", close_code)

    async def receive(self , text_data):
        
        print(text_data)
        
        await self.channel_layer.group_send(
            self.room_name, {
                "type": "link.send", #here link.send refer to function link_send()
                "message" :text_data}
        )
    async def link_send(self, event):
        print(event)
        await self.send(
            event["message"]
        )