/*
    What is HOISTING?
        - javascript mechanism where variables and function declarations are moved to the top of their scope before code execution.
        
    JAVASCRIPT ONLY HOISTS DECLARATIONS!!! NOT INITIALIZATION!!!
*/

//Example of javascript only hoisting declarations:
console.log('There is an initialized variable under this that won\'t get its value hoisted! -> ' + varThatOnlyGetsDecHoisted + ' <-');
var varThatOnlyGetsDecHoisted = 'This won\'t be hoisted :(';

//Javascript does hoist function declarations however!
functionThatGetsHoisted('Hooray I got hoisted!');

function functionThatGetsHoisted(message){
    console.log(message);
};

//JAVASCRIPT DOES NOT HOIST FUNCTION EXPRESSIONS!!!!!
try{
    functionThatWontGetHoisted('I won\'t get hoisted!');
}catch(err){
    console.log('functionThatWontGetHoisted didn\'t get hoisted because it is a function expression... It should be a declaration if you want it to get hoisted!');
}

const functionThatWontGetHoisted = (message) => {
    console.log(message);
};
