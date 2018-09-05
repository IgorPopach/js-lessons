class dog {
    constructor(name, age, breed, gender){
         this._name = name;
         this._age = age;
         this._breed = breed;
         this._gender = gender;
         console.log("Dog constructor");
        //  this.ShowInfo();
    }
    ShowInfo(){
        console.log(`name ${this._name} \nage ${this._age} \nbreed ${this._breed} \ngender ${this._gender} \n`);
    }
    setName(name) {
        if (typeof(name) === "string") {
            this._name = name;
        } else {
            console.log("R.T.F.M.");
        }
    }
    get Name (){
        return this._name;
    }
    setAge(age) {
        if (typeof(age) === "string") {
            this._age = age;
        } else {
            console.log("R.T.F.M.");
        }
    }
    get Age (){
        return this._age;
    }
    setBreed(breed) {
        if (typeof(breed) === "string") {
            this._breed = breed;
        } else {
            console.log("R.T.F.M.");
        }
    }
    get Breed (){
        return this._breed;
    }
    setGender(gender) {
        if (typeof(gender) === "string") {
            this._gender = gender;
        } else {
            console.log("R.T.F.M.");
        }
    }
    get Gender (){
        return this._gender;
    }

    // //статичні методи використовуються тільки для самих класів, а не для екземплярів класу
    // static canPlay() {
    //     console.log(`${this._name} Plaing ...`);
    // }
}
// let Tuzik = new dog("Tuzik", 2, "Tax", "male");
// Tuzik.ShowInfo();
// Tuzik.setName("Bobik");
// Tuzik.setAge("10");
// Tuzik.setBreed("Buldog");
// Tuzik.setGender("female");
// Tuzik.ShowInfo();
// dog.canPlay();// undefined Plaing ...

class hunterDog extends dog {
    constructor (name, age, breed, gender, speed){
        super(name, age, breed, gender);
        this._speed = speed;
        console.log("hunterDog constructor");
    }
    ShowInfo(){
        console.log(`name ${this._name} \nage ${this._age} \nbreed ${this._breed} \ngender ${this._gender} \nspeed ${this._speed}`);
    }
}
let Barsik = new hunterDog("Barsik", "3", "Tax", "male", 30);
Barsik.ShowInfo();
