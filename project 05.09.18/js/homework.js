window.onload = function() {
    //All for Dog start
    let writeDog = document.getElementById('writeDog');
    let removeDog = document.getElementById('removeDog');
    let readDog = document.getElementById('showDog');
    writeDog.addEventListener('click', function write() {
        let name = document.querySelector('.nameDog').value;
        let age = document.querySelector('.ageDog').value;
        let breed = document.querySelector('.breedDog').value;
        let gender = document.querySelector('.genderDog').value;
        let bite;
        if (document.getElementById('r1').checked) {
            bite = 'yes';
        } else {
            bite = 'no';
        }
        let Dog = new dog(name, age, gender, breed, bite);
        window.localStorage.setItem('nameDog', Dog._name);
        window.localStorage.setItem('ageDog', Dog._age);
        window.localStorage.setItem('breedDog', Dog._breed);
        window.localStorage.setItem('genderDog', Dog._gender);
        window.localStorage.setItem('biteDog', Dog._bite);
    }, false);
    readDog.addEventListener('click', function read() {
        let nameDog = window.localStorage.getItem('nameDog');
        let ageDog = window.localStorage.getItem('ageDog');
        let breedDog = window.localStorage.getItem('breedDog');
        let genderDog = window.localStorage.getItem('genderDog');
        let biteDog = window.localStorage.getItem('biteDog');
        if (biteDog == 'yes') {
            document.getElementById("dogInfo").innerHTML = `Hello! My name is ${nameDog}, my age ${ageDog}.
             My breed - ${breedDog}. Gender ${genderDog}.\nBe careful - I can bite you!`;
        } else {
            document.getElementById("dogInfo").innerHTML = `Hello! My name is ${nameDog}, my age ${ageDog}.
             My breed - ${breedDog}. Gender ${genderDog}.\nDon't worry - I don't bite!`;
        }
    }, false);
    removeDog.addEventListener('click', function remove() {
        window.localStorage.removeItem('nameDog');
        window.localStorage.removeItem('ageDog');
        window.localStorage.removeItem('breedDog');
        window.localStorage.removeItem('genderDog');
        window.localStorage.removeItem('biteDog');
    }, false);
    //All for Dog end

    //All for Cat start
    let writeCat = document.getElementById('writeCat');
    let removeCat = document.getElementById('removeCat');
    let readCat = document.getElementById('showCat');
    writeCat.addEventListener('click', function write() {
        let name = document.querySelector('.nameCat').value;
        let age = document.querySelector('.ageCat').value;
        let breed = document.querySelector('.breedCat').value;
        let gender = document.querySelector('.genderCat').value;
        let scratch;
        if (document.getElementById('r3').checked) {
            scratch = 'yes';
        } else {
            scratch = 'no';
        }
        let Cat = new cat(name, age, gender, breed, scratch);
        window.localStorage.setItem('nameCat', Cat._name);
        window.localStorage.setItem('ageCat', Cat._age);
        window.localStorage.setItem('breedCat', Cat._breed);
        window.localStorage.setItem('genderCat', Cat._gender);
        window.localStorage.setItem('biteCat', Cat._scratch);
    }, false);
    readCat.addEventListener('click', function read() {
        let nameCat = window.localStorage.getItem('nameCat');
        let ageCat = window.localStorage.getItem('ageCat');
        let breedCat = window.localStorage.getItem('breedCat');
        let genderCat = window.localStorage.getItem('genderCat');
        let scratchCat = window.localStorage.getItem('scratchCat');
        if (scratchCat == 'yes') {
            document.getElementById("catInfo").innerHTML = `Hello! My name is ${nameCat}, my age ${ageCat}.
             My breed - ${breedCat}. Gender ${genderCat}.\nBe careful - I can scratch you!`;
        } else {
            document.getElementById("catInfo").innerHTML = `Hello! My name is ${nameCat}, my age ${ageCat}.
             My breed - ${breedCat}. Gender ${genderCat}.\nDon't worry - I don't scratch!`;
        }
    }, false);
    removeCat.addEventListener('click', function remove() {
        window.localStorage.removeItem('nameCat');
        window.localStorage.removeItem('ageCat');
        window.localStorage.removeItem('breedCat');
        window.localStorage.removeItem('genderCat');
        window.localStorage.removeItem('scratchCat');
    }, false);
}

class animal {
    constructor(name, age, gender) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        console.log("animal constructor");
    }
}

class dog extends animal {
    constructor (name, age, gender, breed, bite){
        super(name, age, gender);
        this._breed = breed;
        this._bite = bite;
        console.log("Dog constructor");
    }
}

class cat extends animal {
    constructor (name, age, gender, breed, scratch){
        super(name, age, gender);
        this._breed = breed;
        this._scratch = scratch;
        console.log("Cat constructor");
    }
}
