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
    var a = prompt('Вкажіть початок діапазону чисел','0');
    var b = prompt('Вкажіть кінець діапазону чисел','0');
    var result = 0;
    for (var i = a; i <= b; i++) {
        if ( i % 2 != 0 && (i ^ 0) === i) {
            result += i;
        }
    }
    document.write('Sum of your numbers is: ' + result);
}

function burgerShop() {
    var size = prompt("Доброго дня!!! Бажаєте бургер?\n" +
        "Введіть будь-ласка розмір:\n" +
        "Big (ціна 25грн, 340 ккал) чи Small (ціна 17грн, 250 ккал)","");
    var options = prompt("Оберіть будь-ласка числом пункт меню з інгредієнтами:\n" +
        "1. Сир (+ 4грн, + 25 ккал);\n" +
        "2. Салат (+ 5грн, + 5 ккал);\n" +
        "3. Шинка (+ 10грн, + 50 ккал);\n" +
        "4. Сир + салат (+ 9грн, + 30 ккал);\n" +
        "5. Салат + шинка (+ 15грн, + 55 ккал);\n" +
        "6. Сир + шинка (+ 14грн, + 75 ккал);\n" +
        "7. Сир + салат + шинка (+ 19грн, + 80 ккал);");
    var add = prompt("Оберіть будь-ласка числом пункт меню з додатковими інгредієнтами:\n" +
        "1. Соус (+5грн, 0 ккал);\n" +
        "2. Майонез (+ 4грн, + 10 ккал);\n" +
        "3. Соус та майонез (+ 9грн, + 10 ккал);");
    var result = 0;
    var calories = 0;
    var resultAdd = 0;
    var caloriesAdd = 0;
    var resultAll = 0;
    var caloriesAll = 0;

    if (size == "Big") {
        switch (options) {
            case "1": result = 4; calories = 25;
                break;
            case "2": result = 5; calories = 25;
                break;
            case "3": result = 10; calories = 50;
                break;
            case "4": result = 9; calories = 30;
                break;
            case "5": result = 15; calories = 55;
                break;
            case "6": result = 14; calories = 75;
                break;
            case "7": result = 19; calories = 80;
                break;
            default : result = 0; calories = 0;
        }
        switch (add) {
            case "1": resultAdd = 5; caloriesAdd = 0;
                break;
            case "2": resultAdd = 4; caloriesAdd = 10;
                break;
            case "3": resultAdd = 9; caloriesAdd = 10;
                break;
            default : resultAdd = 0; caloriesAdd = 0;
        }
        resultAll = 25 + result + resultAdd;
        caloriesAll = 340 + calories + caloriesAdd;
        document.write("Повна вартість вашого замовлення становить:  " + resultAll + " грн" + "<br>"
            + "Ого! Калорійність вашого бургера:  " + caloriesAll + "ккал");
    } else if (size == "Small") {
        switch (options) {
            case "1": result = 4; calories = 25;
                break;
            case "2": result = 5; calories = 25;
                break;
            case "3": result = 10; calories = 50;
                break;
            case "4": result = 9; calories = 30;
                break;
            case "5": result = 15; calories = 55;
                break;
            case "6": result = 14; calories = 75;
                break;
            case "7": result = 19; calories = 80;
                break;
            default : result = 0; calories = 0;
        }
        switch (add) {
            case "1": resultAdd = 5; caloriesAdd = 0;
                break;
            case "2": resultAdd = 4; caloriesAdd = 10;
                break;
            case "3": resultAdd = 9; caloriesAdd = 10;
                break;
            default : resultAdd = 0; caloriesAdd = 0;
        }
        resultAll = 17 + result + resultAdd;
        caloriesAll = 250 + calories + caloriesAdd;
        document.write("Повна вартість вашого замовлення становить:  " + resultAll + " грн" + "<br>"
            + "Ого! Калорійність вашого бургера:  " + caloriesAll + "ккал");
    } else {
        document.write("Упс! Ви не ввели необхідні дані! Повторіть будь-ласка ще раз :)")
    }

}


// function yourName() {
//     var name = prompt("введіть будь-ласка ваші ПІБ через пробіл","");
//     var arr = name.split('\u0020');
//     var arr1 = name.split('');
//     for ( var i = 0; i < name.length; i++) {
//         if (arr1[i] != '\u0020' || typeof(arr1[i]) != "number" || )
//     }
//     document.write("Прізвище: " + arr[0] + "<br>"
//     + "Ім'я: " + arr[1] + "<br>" + "По-батькові: " + arr[2]);
// }
