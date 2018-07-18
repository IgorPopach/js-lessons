// var person = {
//     Name: "Tom",
//     Surname: "Tomson",
//     Age: 40,
//     Birthday: {
//         Day: 28,
//         Mounth: 03,
//         Year: 1984
//     },
//     SeyHello: function(){
//         console.log(this.Name + " says Hello" );
//     }
// }
// console.log(person.Birthday.Day);
// person.SeyHello();
// person.Name = 'Bill';
// person.SeyHello();


// var User = function(name,age) {
//     var _name = name;
//     var _age = age;
//     this.displayInfo = function() {
//         document.write("name =" + _name + " Age = " + _age);
//     };
//     this.getName = function() {
//         return _name;
//     };
//     this.setName = function(name) {
//         if (typeof(name) === "string") {
//             _name = name;
//         }
//     }
// }
// var Tom = new User("Tom",27);
//
// Tom.displayInfo();
// Tom.setName("Bill");
// Tom.displayInfo();
// console.log(Tom.getName());


var Dog = function (name, breed, age, energy, weight) {
    var _name = name;
    var _breed = breed;
    var _age = age;
    var _energy = energy;
    var _weight = weight;
    this.showDogInfo = function () {
        if (_energy > 0) {
            document.write(`Name: ${_name} Breed: ${_breed} Age: ${_age} Energy: ${_energy} Weight: ${_weight}<br>`);
        }
        else {
           this.dead();
        }
    }
    this.dead = function (){
        document.write('Game Over :(' + '<br>');
    }
    this.play = function() {
        return _energy -= 20;
    }
    this.eat = function() {
        if (_energy > 0) {
            return _energy += 20;
        }
    }
    // this.dead = function () {
    //     if (_energy <= 0) {
    //         return document.write('Game Over :(' + '<br>');
    //     }
    // }
    // this.dead();
    this.setName = function(name) {
        if (typeof(name) === "string") {
            _name = name;
        }
    }
    this.getName = function() {
        return _name;
    };
    this.setBreed = function(breed) {
        if (typeof(breed) === "string") {
            _breed = breed;
        }
    }
    this.getBreed = function() {
        return _breed;
    };
    this.setAge = function(age) {
        if (age < 30) {
            _age = age;
        }
    }
    this.getAge = function() {
        return _age;
    };
    this.setEnergy = function(energy) {
        if (energy <= 100) {
            // _energy = energy;
        }
    }
    this.getEnergy = function() {
        return _energy;
    };
    this.setWeight = function(weight) {
        if (weight > 1 && weight < 200) {
            _weight = weight;
        }
    }
    this.getWeight = function() {
        return _weight;
    }
}



var Tuzik = new Dog("Tuzik", "hunter", 2, 20, 2);
// var Borik = new Dog("Borik", "buldog", 5, 75, 45);
// var Jack = new Dog("Jack", "shepherd", 10, 60, 40);

Tuzik.showDogInfo();
Tuzik.play();
Tuzik.showDogInfo();
// Tuzik.eat();
// Tuzik.showDogInfo();
// Tuzik.eat();
// Tuzik.showDogInfo();
// Borik.showDogInfo();
// Jack.showDogInfo();


