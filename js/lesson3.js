// //1.практична (кубики)
// // Игра «кубики». Условие: имеется два игральных кубика со значениями от 1 до 6. Игра происходит с компьютером,
// // кубики бросаются поочередно. Побеждает тот, у кого сумма выпавших очков по итогам пяти бросков больше.
// // Предусмотрите возможность получения первого хода человеком или компьютером. Кубики отображаются с помощью символов.
// // В конце игры необходимо выводить среднюю сумму по броскам для обоих участников.
// var Pl1 = null;
// var result1 = 0;
// var counter = 0;
// var Pl2 = null;
// var result2 = 0;
// function Drop() {
//     counter++;
//     Pl1 = Math.floor(Math.random() * 6) + 1;
//     Pl2 = Math.floor(Math.random() * 6) + 1;
//     result1 += Pl1;
//     result2 += Pl2;
//     if ( counter == 5 ) {
//         console.log("Player1:" + result1);
//         console.log("Player2:" + result2);
//         if ( result1 > result2 ) {
//             document.write("Player1 - Win!!");
//         }
//         else if ( result1 == result2 ) {
//             document.write("No one - Win!!");
//         }
//         else {
//             document.write("Player2 - Win!!");
//         }
//     }
// }





