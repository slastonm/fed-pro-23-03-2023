let product ={
    productName : 'TV',
    price : '120$',
    discount: false,
    colors: ['black', 'red', 'green']
}

let shopProducts=[
    {
        productName : 'TV',
        price : '120$',
        discount: false,
        colors: ['black', 'red', 'green']
    },
    {
        productName : 'Phone',
        price : '220$',
        discount: false,
        colors: ['black', 'red']
    }
    
    
];

for(let key in product){
    console.log(key);
    console.log(product[key]);
}

let numbers = [45, 32, 28, 16, 25];

for(let index in numbers){
    console.log(index);
    console.log(numbers[index]);
}

let buyList = ['fish', 'orange', 'milk'];

for (let item of buyList) {
    console.log(`Need buy ${item}`);
}

for(let objItem of shopProducts){
    console.log(`Product information ${objItem.productName}`);
}