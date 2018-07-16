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
// Tom.setName(687);
// Tom.displayInfo();
// console.log(Tom.getName());


var Dog = function (name, breed, age, energy, weight) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.energy = energy;
    this.weight = weight;
    this.showDogInfo = function () {
        document.write(`Name:${this.name} Breed:${this.breed} Age:${this.age} Energy:${this.energy} Weight:${this.weight}<br>`);
    }
    this.setName = function(name) {
        if (typeof(name) === "string") {
            this.name = name;
        }
    }
    this.getName = function() {
        return name;
    };
    this.setBreed = function(breed) {
        if (typeof(breed) === "string") {
            this.breed = breed;
        }
    }
    this.getBreed = function() {
        return breed;
    };
    this.setAge = function(age) {
        if (age < 30) {
            this.age = age;
        }
    }
    this.getAge = function() {
        return age;
    };
    this.setEnergy = function(energy) {
        if (energy < 100) {
            this.energy = energy;
        }
    }
    this.getEnergy = function() {
        return energy;
    };
    this.setWeight = function(weight) {
        if (weight > 1 && weight < 200) {
            this.weight = weight;
        }
    }
    this.getWeight = function() {
        return weight;
    };
}
var Tuzik = new Dog("Tuzik", "hunter", 2, 20, 2);
var Borik = new Dog("Borik", "buldog", 5, 75, 45);
var Jack = new Dog("Jack", "shepherd", 10, 60, 40);

Tuzik.showDogInfo();
Borik.showDogInfo();
Jack.showDogInfo();
