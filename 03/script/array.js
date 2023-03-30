let products = 'apple, orange, banan, carot'
let productsArray = ['apple', 'orange', 'banan', 'carot', 'chicken', 'dogfood'];
// let productsArray = [];


console.log(products);
console.log(productsArray);
console.log(productsArray[2]);
console.log(productsArray.length);

for(let i=0; i<productsArray.length; i++){
    console.log(`You must buy ${productsArray[i]}`);
}

console.log(`First elemetn ${productsArray[0]}`);
console.log(`Last elemetn ${productsArray[productsArray.length-1]}`);

let varForArr = "hello";
let insideArr = [1,2,4];
let dataArr = [100,true, 'str', 80, varForArr, insideArr];
console.log(dataArr);

let tableData = [
    ['Tom', 25, 'City', ['html', 'css', 'js']],
    ['Tom2', 26, 'City2'],
]

for(let i=0; i<tableData.length; i++){
    // console.log(tableData[i]);
    for(let a = 0; a<tableData[i].length; a++){
        // console.log(1);
        console.log(tableData[i][a]);
    }
}

let firstArr = [1,2,3];
let secondArr = [4,5,6];

let resultArr = firstArr.concat(secondArr, 7, 8, 9);
console.log(resultArr);

// join

let joinResult = firstArr.join();
console.log(firstArr, 'firstArr');
console.log(joinResult);

let toStr = firstArr.toString()
console.log(toStr);
console.log(firstArr, 'afterToStr');

// let arrCreate = [];
let arrCreate = new Array('a', 'b', 'c');
console.log(arrCreate, 'new arr');

console.log(arrCreate.reverse(), 'reverse');
console.log(arrCreate)

//slice

let sliceArr = [1,2,3,4,5, 'A', true, 'false'];
let slicePart = sliceArr.slice(1);
console.log(`after slice ${sliceArr} and slice data ${slicePart}`);
let from = 0;
let to = 3;

console.log(`Slice data ${sliceArr.slice(from, to)}`);


// sort

let dictonary = ['x', 'w', 'e', 'a', 'b', 'd', 'c'];
console.log(dictonary.sort());
console.log(dictonary);

let sortNumbers = [5,2,4, 1, 11, 20];
console.log(sortNumbers.sort());

// push

let todoList = [];
let buyItem = prompt('Milk');
// todoList[0] = buyItem;
todoList.push(buyItem);
todoList.push(8, 9);
todoList.push([88, 99]);

console.log(todoList);

// pop 

todoList.pop();
console.log(todoList);

todoList.pop();
console.log(todoList);

// shift 

todoList.shift();
console.log(todoList);

//  unshift 

todoList.unshift('Add value');
console.log(todoList);

todoList.unshift(1,2,3);
console.log(todoList);




