let newArr = new Array(5);
console.log(newArr.length);
let newObj = new Object;
newObj.password = 12345;
console.log(newObj);


function ProductConstructor(productName, productPrice){
    this.productName = productName;
    this.productPrice = productPrice;
    this.productInfo = function(){
        return `This produc name ${this.productName}  has price ${this.productPrice}`;
    }
}

let tv = new ProductConstructor('TvBrand', 1000);
let phone = new ProductConstructor('PhoneBrand', 500);

// console.log(tv);
// console.log(phone);

let products = [tv, phone, 1, 2, 3, 4, 5, 'hello'];

// for(let product of products){
//     console.log(product.productInfo());
// }

// for(let index in products){
//     console.log(index);
//     console.log(products[index]);
// }

for (let arrValueByIndex of products){
    console.log(arrValueByIndex);
}
