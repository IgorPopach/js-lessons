function simbols(){
    var numSimbols = prompt('How many simbols do you want to show?','1');
    var horizont = confirm('Do you want to display your simbols in a horizontal line?');
    if ( horizont ) {
        for ( var i = 1; i <= numSimbols; i++ ) {
            var simb = prompt('Enter a simbol, please:','');
            document.write(simb + '&nbsp;');
        }
    } else {
        for ( var i = 1; i <= numSimbols; i++ ) {
            var simb = prompt('Enter a simbol, please:','');
            document.write(simb + '<br>');
        }
    }
}

function sumNum(){
    var number = prompt('How many numbers do you want to show?','1');
    var result = 0;
    for (var i = 1; i <= number; i++) {
        var num = +prompt('Enter number, please','0');
        if ( num % 2 != 0 && (num ^ 0) === num) {
            result += num;
        }
    }
    document.write('Sum of your numbers is: ' + result);
}
