const socket = io("http://localhost:8000");
socket.emit('Server-on');

let greets=['hello','#','hii','Hello'];

//Declaring variables
const messageInput = document.getElementById("messageInp");
const form = document.getElementById("send-container");
const containers = document.querySelector(".container");
const btn = document.getElementById('btnjs');
//Creating a function to display chats:
const append = (message) => {
    const messageElement = document.createElement("div");
    messageElement.innerText = message;
    messageElement.classList.add('msg');
    messageElement.classList.add('right');
    containers.append(messageElement);
}


//Bot chats client side
function append_bot(message) {

    const messageElement = document.createElement("div");
    messageElement.classList.add('msg');
    messageElement.classList.add('left');
    const spacer = document.createElement("span")
    spacer.innerText = message;
    messageElement.append(spacer);
    containers.append(messageElement);
}

//scrollfunctionality
shouldScroll = containers.scrollTop + containers.clientHeight === containers.scrollHeight;
function scrollToBottom() {
    containers.scrollTop = containers.scrollHeight;
}


const que=[1,2,3,4,5,6,7,8,9,10];
let subflag=0;
let obj = {
    main: 0,
    submenu: 0
}
document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', initial);
})


const initial = (e) => {
    e.preventDefault();
    let message = messageInput.value;
    console.log(obj);
    if(message=="*"){
        obj.submenu=0;
    }
    if(message=="#"){
        obj.main=0;
        obj.submenu=0;
    }
    console.log(message);
    if ((message=='hello'||message=="#"||message=='hi'||message=='Hi') && obj.main==0) {
        append(message);
        socket.emit('send', 'main')
        socket.once('receive', messageR => {
            append_bot(messageR);
            cls();
            scrollToBottom();
        })
    }
    else {
        if(message in que|| message=="*"){
        if (obj.main == 0) {
            obj.main = message;
        }
        if (obj.submenu == 'done') {
            obj.submenu = message;
        }
        if (obj.main == 1) {
            if (obj.submenu == 0) {
                // display_menu(message, "A");
                append(message);
                scrollToBottom();
                display_menu(message,"A",0);
            }
            else if (obj.submenu in que) {
                append(message);
                scrollToBottom();
                display_menu(message, "A"+(que[message]-1),1);
                
            }  
        }
        if(obj.main==2){
            if (obj.submenu == 0) {
                append(message);
                scrollToBottom();
                display_menu(message, "B",0);
            }
            else if (obj.submenu in que) {
                append(message);
                scrollToBottom();
                display_menu(message, "B"+(que[message]-1),1);
            }
        }
        if(obj.main==3){
            if (obj.submenu == 0) {
                append(message);
                scrollToBottom();
                display_menu(message, "C",0);
            }
            else if (obj.submenu in que) {
                append(message);
                scrollToBottom();
                display_menu(message, "C"+(que[message]-1),1);
            }
        }
        if(obj.main==4){
            if (obj.submenu == 0) {
                append(message);
                scrollToBottom();
                display_menu(message, "D",0);
            }
            else if (obj.submenu in que) {
                append(message);
                scrollToBottom();
                display_menu(message, "D"+(que[message]-1),1);
            }
        }
        if(obj.main==5){
            if (obj.submenu == 0) {
                append(message);
                scrollToBottom();
                display_menu(message, "E",0);
            }
            else if (obj.submenu in que) {
                append(message);
                scrollToBottom();
                display_menu(message, "E"+(que[message]-1),1);
            }
        }
        if(obj.main==6){
            if (obj.submenu == 0) {
                append(message);
                scrollToBottom();
                display_menu(message, "F",0);
            }
            else if (obj.submenu in que) {
                append(message);
                scrollToBottom();
                display_menu(message, "F"+(que[message]-1),1);
            }
        }
        if(obj.main==7){
            if (obj.submenu == 0) {
                append(message);
                scrollToBottom();
                display_menu(message, "G",0);
            }
            else if (obj.submenu in que) {
                append(message);
                scrollToBottom();
                display_menu(message, "G"+(que[message]-1),1);
            }
        }

    }
        else{
            alert('Invalid input');
            obj.main=0;
            obj.submenu=0;
            cls();
        }
    }
}

    function cls() {
        messageInput.value = "";
    }

    function display_menu(message, submsg,subflag) {
        socket.emit('send', submsg);
        socket.once('receive', messageR => {
            setTimeout(function(){
            append_bot(messageR);
            if(subflag==0)
            append_bot("Press # To go back to Main menu");
            if(subflag==1)
            append_bot("Press # To go back to Main menu\nPress * To go back to Previous menu");
            cls();
            scrollToBottom();
            console.log(obj);
            obj.submenu="done";
            },600);
        })
    }


