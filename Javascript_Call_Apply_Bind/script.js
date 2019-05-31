/*
    Call Method:
        - using the call method, we can bind an object value to a function
    
    Apply Method:
        - basically the same as the "Call" function, but with this one you can pass an array to the function you're calling apply from
    
    Bind Method:
        - this will bind obj values to a particular function, then you can make use of the value later in a function
        
    SEE BELOW FOR SPECIFIC EXAMPLES!!!
*/

var exampleObject = {
    num: 10,
    num1: 15,
    num2: 20
};

//
var add = function(num2, num3, num4){
    return this.num + num2 + num3 + num4;
};

var arr = [5, 6 , 7];

console.log(add(1, 2, 3) == NaN);
if(add(1, 2, 3).isNaN){        
    console.log('We didn\'t use call/apply/bind! The add function does not know what object to apply the "this" keyword to and assigns it to NaN! It does not have any context!');
}

//USING THE CALL METHOD
console.log('Using the call method: ' + add.call(exampleObject, 5, 6, 7));

//USING THE APPLY METHOD
console.log('Using the apply method: ' + add.apply(exampleObject, arr));

//ANOTHER EXAMPLE OF USING APPLY
//Math.max cannot parse an array passed to it. However, if we use the apply function
//and pass it a null object and the array, it can parse and return the max.
var arrThatNeedsToBeApplied = [1, 2, 3, 4, 5];
console.log('This is the max using apply: ' + Math.max.apply(null, arrThatNeedsToBeApplied));

//USING THE BIND METHOD
//BIND THE OBJECT TO THE DESIRED FUNCTION
var boundFunc = add.bind(exampleObject);
console.log('Using the bind method: ' + boundFunc(5, 6, 7));
