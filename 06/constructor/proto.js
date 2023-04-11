function ProductConstructor(name, price){
    this.name = name;
    this.price = price;
}
ProductConstructor.prototype.returnPriceWithCurrency = function(){
    return `${this.price} $`
}
ProductConstructor.prototype.info = function(){
        console.log(`This product ${this.name} with ${this.price}`);
    }
let tv = new ProductConstructor('tv', 100);
let phone = new ProductConstructor('phone', 200);

console.log(tv);
tv.info();
console.log(tv.returnPriceWithCurrency());
let tvShop = [tv];
console.log(tvShop);
tvShop.push(phone);
console.log(tvShop);
console.log(new Object());
