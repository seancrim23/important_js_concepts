/*
    What are PROMISES?
        - (from JS MDN) represents the eventual completion (or failure) of an asynchronous operation and its resulting value
        - in three states
            - pending: initial state, neither fulfilled nor rejected
            - fulfilled: operation completed successfully
            - rejected: operation failed
*/

//basic example (this seems to be the best basic example since more complicated examples usually require knowledge of some API to use etc) using setTimeout function

import axios from 'axios';

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Success!!!');
    }, 5000);
});

myFirstPromise.then((successMessage) => {
    console.log('Yay! ' + successMessage);
});

//We can use other ways to handle asynchronous functions. the most user friendly one appears to be through using async/await. We can define a function to be asynchronous and then simply write "await" wherever we will be performing some sort of asynchronous function.
//We simply have to wrap our "await" in a try/catch block and, if the asynchronous function is successful, the rest of our desired code will run in the try block. However, if the asynchronous function is rejected, the catch block will catch the error and do something

const key = 'e3286cba58436e357a8e006acd6df06e';
const exampleId = '35477';

const asyncAwaitExample = async function(){
    console.log('hello we are inside the async function');
    try{
        const res = await axios(`https://www.food2fork.com/api/get?key=${key}&rId=${exampleId}`);
        console.log(res);
    } catch (err) {
        console.log(`Axios call failure! Error: ${err}`);
    }
};

asyncAwaitExample();