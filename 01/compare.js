// == приводить значення порівняння до однакового типу

console.log(5 == '5');

// === порівнює без приведення до однгого типу данних

console.log(5 === '5');

console.log('Compare value');

// let stringFirstValue = "Some";
// let stringSecondValue = "sOme";

// let stringFirstValue = 1;
// let stringSecondValue = '1';

// let stringFirstValue = true;
// let stringSecondValue = true;

let stringFirstValue = null;
let stringSecondValue = undefined;

console.log(stringFirstValue == stringSecondValue);
console.log(stringFirstValue === stringSecondValue);

let userAge = Number(prompt('Your age?'));
let restrictAge = 15;

// let userAgeResult = userAge > restrictAge;
// let userAgeResult = userAge < restrictAge;
// let userAgeResult = userAge >= restrictAge;
let userAgeResult = userAge <= restrictAge;


console.log(userAgeResult, 'User allow acces');