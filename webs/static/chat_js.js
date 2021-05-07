var hostname = window.location.host
console.log(hostname)
var socket;


window.addEventListener("load" ,openws)

function openws(rid = 'dwq'){
    
    if (window.location.protocol === "https:"){ window.location.protocol = "http:"}
socket  = new WebSocket(
    "ws://"+ hostname +"/"+roomName)

console.log(rid)
console.log(socket)

socket.onopen = (e)=>{
    console.log("onopen event:", e)

    socket.send(JSON.stringify({username : userName , roomname : roomName}))
}

socket.onmessage = (event)=>{

    console.log(event)
    let get_msg_info = JSON.parse(event.data)

    if (get_msg_info["message"]){
    if (get_msg_info["username"] === userName){
        var msg = get_msg_info["message"]
    document.getElementById('chats').innerHTML += "<div class = 'msgline my'><div class= 'mine'><div class= 'chathead'>"+ get_msg_info["username"] +"</div>"+ msg + '</div></div>';
    scroll_to_bottom()
    }
    else{
        var msg = get_msg_info["message"]
    document.getElementById('chats').innerHTML += "<div class = 'msgline other'><div class= 'others'><div class= 'chathead'>"+ get_msg_info["username"] +"</div>"+ msg + '</div></div>';
    scroll_to_bottom()

    }
}
}

socket.onclose = (e)=>{
    console.log("Connection has closed :" , e)
}



}



function send_message(elem){

    let ele = elem.innerHTML
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    if (h > 12){
        h -=12
        var t = " pm"
        console.log("time is pm")
    }
    else{
        var t = " am"
    }
    let time_str = "<div class = 'time'>"+ h + ':' + m + t + "</div>"

    ele += time_str
    console.log(elem)
    var msg_json = JSON.stringify({username: userName , roomname : roomName, message:ele})
    console.log(msg_json)
    // msg_json = JSON.stringify(msg_json)

    elem.innerHTML = '';

    socket.send(msg_json);

};
var roomName;
var userName;

getvars = (room_name , user_name)=>{
    roomName = room_name
    userName = user_name
    
    console.log(roomName, userName)
}

function scroll_to_bottom(){
    var element = document.getElementById("chats")
    element.scrollTop = element.scrollHeight
}

function heightChange(){
    var chaboxheight =  document.querySelector("#chats")
    var insendheight =document.querySelector("#insendid")   

    // console.log(chaboxheight , insendheight)
}

