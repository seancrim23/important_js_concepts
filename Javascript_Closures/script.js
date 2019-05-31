/*
    What is a closure?
        - A closure is a function that exists inside of another function that is able to use variables that were defined in the scope of the parent function.
        -closures are created every time a function is created at function creation time
        
    Closure Scope Access:
        - its own variables
        - its parent function's variables
        - global variables
        
    What are they used for?
        -interfaces/stateful functions (return values may be influenced by internal state)
        -giving objects data privacy
        -partial functions - function with multiple params return function with fewer params - a way to "fix" arguments. pass in one or more at the beginning and include the rest later.
*/

//Closure for data privacy
const getPrivateData = (privateData) => {
  
    return {
        get: () => privateData,
    };
    
};

const privateDataVar = getPrivateData('hello');
console.log('The outer private data can be accessed by the inner function: ' + privateDataVar.get());

//For stateful functions, return values may be influenced by internal state
const getFunctionByState = (state) => {
  
    return () => {
        if(state === 0){
            console.log('state is zero and because of closures we can access it: ' + state);
        }else if(state === 1){
            console.log('state is one and because of closures we can access it: ' + state);
        }else{
            console.log('state is not zero or one and because of closures we can access it: ' + state);
        }
    };
    

    
};
const stateFunctionZero = getFunctionByState(0);
stateFunctionZero();
const stateFunctionOne = getFunctionByState(1);
stateFunctionOne();
const stateFunctionRandom = getFunctionByState(10000);
stateFunctionRandom();

//closure for partial application function
const partialApply = (fn, fixedArgument) => {
    return function (newArguments){
        return fn(fixedArgument, newArguments);
    }

};

const concStrings = (a, b) => `${a} ${b}`;

const addStrings = partialApply(concStrings, 'hi!');

const finalStrings = addStrings('Sean');

console.log(finalStrings);