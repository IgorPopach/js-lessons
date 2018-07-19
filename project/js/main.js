// var xhr = new XMLHttpRequest();
// console.log(typeof (xhr));
// xhr.open('GET','person.json', false);
// xhr.send();
// if (xhr.status != 200) {
//     alert (xhr.status + xhr.statusText);
// } else {
//     document.write(xhr.responseText + '<br>');
//     // var person = JSON.parse(xhr.responseText); // перетворюємо json в js
//     // document.write(person.Name + '<br>' + person.Birthday.Year);
//     //  JSON.stringify() навпаки  перетворюємо  js в json
// }

var xhr = new XMLHttpRequest();
var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
xhr.open('GET',url, false);
xhr.send();
if (xhr.status != 200) {
    alert (xhr.status + xhr.statusText);
} else {
    // document.write(xhr.responseText + '<br>');
    var cash = JSON.parse(xhr.responseText);
    for (var i = 0; i < cash.length; i++) {
        document.write(cash[i].ccy + ' / ' + cash[i].base_ccy + ' buy: ' + cash[i].buy + ' sale: ' + cash[i].sale + '<br>');
        // for (var key in cash[i]) {
        //     document.write(key + cash[i][key] + '<br>');
        // }
    }

}