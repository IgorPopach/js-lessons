
var getChar = function getChar(event) {
    var x = event.charCode || event.keyCode;
    if (x != 48 && x != 49) {
        event.preventDefault();
    }
}

function getIp() {
    var ipAdress;
    var binaryFirst = document.querySelector('.first').value;
    var binarySecond = document.querySelector('.second').value;
    var binaryThird = document.querySelector('.third').value;
    var binaryFourth = document.querySelector('.fourth').value;
    console.log(binaryFirst, binarySecond, binaryThird, binaryFourth);
    ipAdress = parseInt(binaryFirst, 2) + "." + parseInt(binarySecond, 2) + "." + parseInt(binaryThird, 2) + "." +
        parseInt(binaryFourth, 2);
    console.log(ipAdress);
    document.getElementById("showIp").innerHTML = "Ваша ip-адреса: " + ipAdress;
}

