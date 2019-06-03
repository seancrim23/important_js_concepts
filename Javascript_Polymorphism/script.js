/*
    What is POLYMORPHISM?
        - the practice of designing objects to share behaviors and to be able to override shared behaviors with specific ones
        -takes advantage of inheritance
*/

//Example one, we can define an object and override one of its prototype functions (ES5 version)
function Employee(name){
    this.name = name;
}

Employee.prototype.getDetails = function(){
    return this.name;
}

var normalEmployee = new Employee('normal');

console.log('normal: ' + normalEmployee.getDetails());

Employee.prototype.getDetails = function(){
    return this.name.toUpperCase();
}

console.log('polymorphism: ' + normalEmployee.getDetails());

//example two, we can define a parent class and then have a child class that can inherit variables/functions from its parent
function Person(age, weight){
    this.age = age;
    this.weight = weight;
}

Person.prototype.getInfo = function(){
    return ` > > > PERSON OBJECT < < < I am ${this.age} years old and weigh ${this.weight} kilos.`;
};

//now we define a subclass of Person, Employee. Employee will share the variables and functions of Person. Also in ES6 this is done using "extends" (much easier)
function EmployeePoly(age, weight, salary){
    this.age = age;
    this.weight = weight;
    this.salary = salary;
}
EmployeePoly.prototype = new Person();

//override the Person getInfo function with a more Employee specific getInfo function that includes printing the salary

EmployeePoly.prototype.getInfo = function(){
    return `> > > EMPLOYEE OBJECT < < < I am ${this.age} years old, weigh ${this.weight} kilos, and have a salary of $${this.salary}`;
};

var person = new Person(35, 145);
var employee = new EmployeePoly(45, 14, 15000);

console.log(person.getInfo());
console.log(employee.getInfo());

//ES6 EXAMPLE!!!
class Animal{
    constructor(age,size,origin){
        this.age = age;
        this.size = size;
        this.origin = origin;
    }
    
    showInfo(){
        return `This animal is ${this.age} years old, is a ${this.size} size, and is from ${this.origin}`;
    }
    
};

//The lion class extends the animal class. this means it inherits the variables and functions of Animal. 
//With polymorphism, we can then override the "showInfo" function to make it more specific to the Lion class
class Lion extends Animal {
    constructor(age, size, origin, sound){
        super(age,size,origin);
        this.sound = sound;
    }
    
    showInfo(){
         return `This animal is ${this.age} years old, is a ${this.size} size, and is from ${this.origin}. It makes a ${this.sound} sound.`;       
    }
};

var animalExample = new Animal(35, 'large', 'aruba');
var lionExample = new Lion(56, 'small', 'china', 'roar');

console.log('> > > PARENT CLASS < < < ' + animalExample.showInfo());
console.log('> > > CHILD CLASS < < < ' + lionExample.showInfo());



