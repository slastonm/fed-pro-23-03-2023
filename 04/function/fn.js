function functionName(argument){
    console.log(argument);
}

// functionName('Hello!');
// functionName('World');

let anotherFn = function(){
    console.log('1111');
}
// anotherFn();

let userName = "";
let lastName = "";

function getInfo(){
    userName = prompt('Your name');
    lastName = prompt('Your last name');
}

function getData() {
    console.log(`User ${userName} with ${lastName}`);
}

// getInfo();
// getData();

function printValue(value, printValue){
    if(printValue === undefined){
        printValue = 3;
    }
    for(let i = 0; i<printValue; i++){
        console.log(value);
        console.log(" ");
    }

}
// printValue("Hello", 5);

function modifyPrintValue(value = 'No data', printValue = 1){
    for(let i = 0; i<printValue; i++){
        console.log(value);
        console.log(" ");
    }
}

modifyPrintValue('I have data', 3);

function argsFn() {
    console.log(arguments);
    console.log(arguments.length);
}

// argsFn(1, 2, 3, 'args', true, false , [1,2,3]);

function modArgsFn(...args){
    console.log(args);
    console.log(args.length);
}

// modArgsFn(1, 2, 3, 'args', true, false , [1,2,3]);


// let firstValue = Number(prompt('First value'));
// let secondValue = Number(prompt('Second value'));

function sumValue(a, b){
    let c = a+b;
    // console.log(c);
    return c
};

// console.log(`Sum value ${sumValue(firstValue, secondValue)}`);
// console.log(`Sum value calculate ${sumValue(10, 20)}`);


function regularFn(a){
    return a*2;

}
let arrowFn =(b)=>b*2

console.log(`Regular fn ${regularFn(2)}`);
console.log(`Arrow fn ${arrowFn(2)}`);

function doble(arrayValue, callBack){
    let newArr = [];
    for(let i=0; i<arrayValue.length; i++){
        newArr.push(callBack(arrayValue[i]));
    }
    return newArr;
}


doble([1,2,3], regularFn);

console.log(`Return value with arrowFn ${doble([1,2,3], arrowFn)}`);
console.log(`Return value with arrowFn ${doble([2,3,6], arrowFn)}`);

// console.log(`Return value with global ${newArr}`);

// console.log(fnCall());
let fnCall = ()=>3;
console.log(fnCall());

function validate() {
   let getName = document.querySelector('.userName');
   let getPass = document.querySelector('.pass'); 
}






