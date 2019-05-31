/*
    What is CURRYING?
        - technique of evaluation a function with multiple arguments into a sequence of functions with a single argument.
        - all of the functions return a specific parameterized function until the final returned expression
*/

const curryingExample = function(a){
    return function(b, c){
        return function(d){
            return a + b + c + d;
        }
    }
}

console.log(curryingExample(1)(2, 3)(4));
var test = curryingExample(1)(2, 3);
console.log(test(4)); //WILL RETURN 10

var test2 = curryingExample(1)(2);
console.log(test2(4)); //because we didn't pass a value for the "c" variable, this will print a NaN value

//WHY IS THIS USEFUL???
//This helps create a higher order function, extremely helpful when it comes to event handling.

