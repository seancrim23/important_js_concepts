/*
    - When Javascript classes were introduced in ES6, they essentially were
    an improvement on the syntax of the existing prototype-based inheritance.
    
    The below is a comparison of the process one would have to go through to create a class, add a function to it, and then instantiate an object of each class and make use of the object's function.
*/

//ES5 classes were defined as functions
var ObjectExample = function(var1, var2){
    this.var1 = var1;
    this.var2 = var2;
}

//to add a function to an ES5 class, you had to add it to the object prototype
ObjectExample.prototype.exampleFunction = function() {
    console.log('Here are the two arguments from the ES5 example 1: ' + this.var1 + ' and 2: ' + this.var2); 
}

//ES5 code to make use of the ES5 classes and function
var es5ObjectExample = new ObjectExample('random', 'random1');
es5ObjectExample.exampleFunction();

//ES6 classes are more straightforward
class ObjectExample2{
    constructor(var1, var2){
        this.var1 = var1;
        this.var2 = var2;
    }
    
    //instead of adding the "exampleFunction" from before directly to the prototype //object, you can just add it within the class like below
    exampleFunction(){
        console.log('Here are the two arguments from the ES6 example 1: ' + this.var1 + ' and 2: ' + this.var2);
    }
}

//instantiating the ES6 class and making use of the member function "exampleFunction"
var es6ObjectExample = new ObjectExample2('random', 'random1');
es6ObjectExample.exampleFunction();