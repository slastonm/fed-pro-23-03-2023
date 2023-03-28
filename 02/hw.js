let firstValue = Number(prompt('Type number')); 
let secondValue = Number(prompt('Type number')); 
let thirdValue = Number(prompt('Type number')); 

// let firstValue = prompt('Type number'); 
// let secondValue = prompt('Type number'); 
// let thirdValue = prompt('Type number'); 

// let convertFirstValue = Number(firstValue);

let summ = firstValue + secondValue + thirdValue;
let result = summ/3;

console.log(result);

let shortVersion = (firstValue + secondValue + thirdValue)/3;

console.log(shortVersion);

let milkPrice = 12999;

let percentValue = milkPrice/100;
let discount = Number(prompt('Type discount value'));
let discountValue = discount*percentValue;
let finalPrice = milkPrice - discountValue;

console.log(finalPrice);

let shortDiscountVersion = milkPrice - ((milkPrice/100)*discount);
console.log("Discount short", shortDiscountVersion);




