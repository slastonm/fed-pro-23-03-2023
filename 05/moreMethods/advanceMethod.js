let fruits = ['apple', 'orange', 'cherry'];
// let fruits = "";

fruits.forEach((item, index, arr)=>{console.log(`I have ${item } with index ${index}  in ${arr}`);});

// for(let i = 0; i<fruits.length; i++){
//     console.log(`${fruits[i]}`);
//     console.log(`${i}`);
//     console.log(`${fruits}`);
// }

let numbers = [1, 2, 3];

function double (item, index, arr){
    arr[index] = item*2;
}

numbers.forEach(double);
// console.log(numbers);


let tripNumbers = [1, 2, 3];

let newArr = tripNumbers.map((arrItem)=>arrItem*3);
// console.log(`First arr ${tripNumbers} and new arr ${newArr}`);

let userAges = [32, 22, 17, 18, 20, 16, 15, 40];
function checkAge(age){
    return age >=18;
}
let filtredAge = userAges.filter(checkAge);

function ageTest(){
    let newAgeArr = [];
    for(let i=0; i<userAges.length; i++){
    
    if(userAges[i] >=18){
        newAgeArr.push(userAges[i]);
    }
    
    }
    return newAgeArr;
}

// console.log(`test with for ${ageTest()}`);

// console.log(filtredAge);


let filterNumbers = [2, 4, 6, 7,9];
console.log(filterNumbers.filter((number)=>number%2 === 0));

let users = [40, 20,30,1,2,10,11, 12,22, 24];
console.log(users.sort());
console.log(`Sort corect ${users.sort(function(a,b){return a-b})}`);
console.log(`Sort corect ${users.sort(function(a,b){return b-a})}`);




