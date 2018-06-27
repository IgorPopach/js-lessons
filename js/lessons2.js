// lessons 2

// var day = prompt("Enter...."," ");
// console.log(typeof(day));
//
// var day = parseInt(day);
// console.log(typeof(day));
// console.log(day);

// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90. Пользователь вводит номер квартиры.
//     Программа должна указать в каком подъезде находится данная квартира.

// var num = prompt("Введіть номер квартири:",'');
// var checkNum = parseInt(num);
// if (!typeof(checkNum) ) {
//     if (num >= 1 && num <= 20) {
//         document.write("Квартира в першому під'їзді")
//     } else if (num >= 21 && num <= 48) {
//         document.write("Квартира в другому під'їзді")
//     } else if (num >= 49 && num <= 90) {
//         document.write("Квартира в третьому під'їзді")
//     } else {
//         document.write("Такої квартири не існує")
//     }
// } else {
//     document.write("Ви не ввели не номер!!!")
// }

// var counter = 0;
// while (counter < 10) {
//     counter++;
//     document.write(counter + "<br>");
// }

// var counter = 50;
// do {
//     document.write(counter + "<br>");
//     counter++;
// }
// while (counter < 10);


// for (var i = 0; i < 10; i++) {
//     document.write("i = " + i + "<br>");
// }
// document.write(i);


// for (var i = 0; i < 10; i++) {
//     for (var j = 10; j > 0; j--) {
//         document.write("*" + "<br>");
//     }
//     document.write("<br>");
// }

// for (var i = 0; i < 10; i++) {
//     for (var j = 0; j < i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

for (var i = 0; i < 10; i++) {
    for (var j = 10; j > i; j--) {
        document.write(" ");
    }
    document.write("*" + "<br>");
}

// for (var i = 1; i < 10; i++) {
//     for (var j = 1; j < 10; j++) {
//         var result = i * j;
//         document.write(i + " * " + j + "=" + result + "<br>");
//     }
//     document.write("<br>");
// }