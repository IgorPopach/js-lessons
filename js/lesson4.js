// // Анонімна функція
// (function () {
//     document.write("works")
// })();
//
// // function Declaration
// var func = function() {
//     document.write("funk");
// }
// func();
//
// // function Expression
// function func() {
//     document.write("funk");
// }
// func();
//
// // Яка різниця між function Expression function Declaration


// // функція яка викликає саму себе
// function recurs(counter) {
//     counter--;
//     if(counter != 0) {
//         recurs(counter);
//     }
//     document.write(counter);
// }
// recurs(3);


// function external(){
//     function internal(){
//         document.write("Internal")
//     }
//     internal();
// }
// external();


// function external(callback){
//     console.log(callback);
//     function One(){
//         document.write("One");
//     }
//     function Two(){
//         document.write("Two");
//     }
//     callback();
// }
// external("Two");


// function external(callback,a,b){
//     var result = callback(a,b);
//     document.write(result);
// }
// var sum = function(a,b){
//     return a + b;
// }
// external(sum,5,10);

// // Login button
// document.addEventListener("load",Init());
// function Init(){
//     var btn = document.getElementsByClassName("check")[0];
//     btn.addEventListener("click",getLoginForm);
//     function getLoginForm(){
//         var login = document.getElementsByClassName("name")[0].value;
//         var pass = document.getElementsByClassName("pass")[0].value;
//         if (login == "admin" && pass == "admin"){
//             console.log("Wellcome login");
//         } else if (login == "Bill" && pass == "Bill"){
//             console.log("Wellcome login");
//         } else if (login == "Alex" && pass == "Alex"){
//             console.log("Wellcome login");
//         } else {
//             console.log("Oooopssss!!!!");
//         }
//     }
//     // console.log(btn);
//     // console.log(typeof(btn));
// }


// // Для роботи з масивами for in:
// var arr = [1,2,3,"four",29,"Bill",true];
// console.log(arr);
// console.log(typeof(arr));
// // for (item in arr){
// //     console.log(item)
// // }
// console.log(arr[3]);
// for (item in arr) {
//     console.log(arr[item])
// }


