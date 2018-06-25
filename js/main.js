var a = 10;
console.log(a);
console.log(typeof(a));
var b = 3.14;
console.log(b);
console.log(typeof(b));

var STR = "Hello world!";
console.log(STR);
console.log(typeof(STR));

var c = true;
console.log(c);
console.log(typeof(c));
c = false;
console.log(c);
console.log(typeof(c));

var d = null;
console.log(d);
console.log(typeof(d));

var e;
console.log(e);
console.log(typeof(e));

var person = {
    name:"Tom"

}
console.log(person);
console.log(typeof(person));

var arr = [3,8,"test",'bill',true];
console.log(arr);
console.log(typeof(arr));

console.log(typeof(function(){}));

var global = this;
console.log(global);
console.log(typeof(global));