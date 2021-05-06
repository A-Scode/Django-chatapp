from django.shortcuts import render
from django.http import HttpResponse



def chat_app(request):
    global room_name
    room_name = request.POST['room_name']
    user_name = request.POST['username']

    print("Room name :" , room_name)
    print("Username :" , user_name)
    

    return render(request , 'chat_page.html', {'R_N' : room_name , "user_name" :user_name} )

def home_page(request):
    from .consumers import rooms
    return render(request, 'home.html' ,{'rooms' : rooms})

def favicon(request):
    image_data = open("webs/static/favicon.png" , 'rb')
    return HttpResponse(image_data, content_type = "image/png")

def sw(request):
    sw_file = open("serviceworker.js" , "r")
    return HttpResponse(sw_file, content_type = "text/javascript")