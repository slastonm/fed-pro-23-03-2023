let userAge = 20
let isAdmin = false;
let isLogin = false;

console.log(isAdmin != true); // not

// Logical &&
let userRes = userAge > 16 && isAdmin; //false
console.log('userRes &&', userRes)
console.log('User data', isAdmin && isLogin);

// true && true = true
// true && false = false
// false && true = false
// false && false = false
// &  00001 0010101

// OR ||


let orResult = userAge > 16 || isAdmin; // true
console.log('User res ||', orResult);

// true || true = true
// true || false = true
// false || true = true
// false || false = false







