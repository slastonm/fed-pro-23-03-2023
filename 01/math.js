// let firstNumber = Number(prompt('First value'));
// let secondNumber = Number(prompt('Second value'));

//let result = parseInt(firstNumber) + parseInt(secondNumber); // 1.2 => 1 
// let result = parseFloat(firstNumber) + parseFloat(secondNumber) ;
// let result = Number(firstNumber)  + Number(secondNumber);
// let result = +firstNumber + +secondNumber;


// console.log(firstNumber + secondNumber);
// console.log(firstNumber - secondNumber);
// console.log(firstNumber*secondNumber);
// console.log(firstNumber/secondNumber);
//  Оператор залишку 
console.log('Оператор залишку');
console.log(5%2);
console.log(10%2);
console.log(9%3);
console.log(4%3);


let postIncrement = 1;

document.write(postIncrement + "<br />");
postIncrement++;
document.write(postIncrement + "<br />");
document.write(postIncrement++ + "<br />");
document.write(postIncrement + "<br />");
document.write(postIncrement ++ + "<br />");
document.write(postIncrement + "<br />");

document.write('<hr>');

let prefIncrement = 1;

document.write(prefIncrement + "<br />");
++prefIncrement;
document.write(prefIncrement + "<br />");
document.write(++prefIncrement + "<br />");
document.write(prefIncrement + "<br />");
document.write(++prefIncrement + "<br />");
document.write(prefIncrement + "<br />");

document.write('<hr>');

let postDecrement = 10;
document.write(postDecrement + "<br />");
postDecrement--;
document.write(postDecrement + "<br />");
document.write(postDecrement-- + "<br />");
document.write(postDecrement + "<br />");
document.write(postDecrement-- + "<br />");
document.write(postDecrement + "<br />");

document.write('<hr>');

let prefDecrement = 10;
document.write(prefDecrement + "<br />");
--prefDecrement;
document.write(prefDecrement + "<br />");
document.write(--prefDecrement + "<br />");
document.write(prefDecrement + "<br />");
document.write(--prefDecrement + "<br />");
document.write(prefDecrement + "<br />");

let numberValue = 3;
// numberValue = numberValue + 4;
// numberValue += 4;
// numberValue *= 4;
// numberValue -= 4;
numberValue /= 4;

console.log(numberValue);
