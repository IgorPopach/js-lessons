var flag = false;
window.onload = function() {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
    first.addEventListener('click',
        function(event){
        console.log(event);
        this.style.backgroundColor = "green";
        event.stopPropagation();//зупиняє
        console.log("handler1");
        },
        flag);
    second.addEventListener('click',
        function(event){
            console.log(event);
            this.style.backgroundColor = "yellow";
            event.stopPropagation();
            console.log("handler2");
        },
        flag);
    third.addEventListener('click',
        function(event){
            console.log(event);
            this.style.backgroundColor = "red";
            event.stopPropagation();
            console.log("handler3");
        },
        flag);

    var input = document.getElementById('input');
    var btn = document.getElementById('btn');
    btn.addEventListener("click",
        function (event) {
            if(input.value.length == 0) {
                event.preventDefault();// метод, який зупиняє стандартну поведінку браузера, в даному випадку відправку
                // форми
            }
        }, false);


    var show = document.getElementById('show');
    show.addEventListener("click",
        function ShowEventListener(event) {
            var msg = [];
            msg[0] = "type = " + event.type + "\n";
            msg[1] = "target = " + event.target + "\n";
            msg[2] = "current = " + event.currentTarget + "\n";
            msg[3] = "Phase = " + event.eventPhase + "\n"; //фази: 1 - захват, 2 - виконання, 3 - всплиття
            msg[4] = "timeStamp = " + event.timeStamp + "\n";//часова мітка, час за який подія виконалася
            msg[5] = "bubbles = " + event.bubbles + "\n";//true - показує що може вспливати
            msg[6] = "cancelable = " + event.cancelable + "\n";//true - показує що може відміняти/зупиняти стандартну
            // поведінку браузера
            msg[7] = "srcElement = " + event.srcElement + "\n";//вказує розміщення елемента
            alert(msg);
        }, false);
};


//query selector

var test = document.querySelectorAll('.test')[1];
console.log(test);



// home work    false preventDefault

