console.log("working")

var logodiv = document.querySelector('#logoid')
var form = document.querySelector("#form")
var body = document.body
console.log(body)
var bodyrect = body.getBoundingClientRect()


changepos = ()=>{
    console.log("body resized")
    let formrect = form.getBoundingClientRect()
    console.log("form readed")
    let offset =   formrect.top -  bodyrect.top

    const logooffset = offset + 40

    logodiv.style.top = logooffset+"px"
    console.log("logo edited")

    
}

room_validation = (elem)=>{
    const value = elem.value
    
    if (! /^[0-9a-z]+$/.test(value)){
        alert("Room name shoud not contain space or other characters")
        return false
    }
    else{
        return true
    }
}

document.addEventListener("load" ,changepos() )