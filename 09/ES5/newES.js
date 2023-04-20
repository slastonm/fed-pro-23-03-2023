const cars = ['ford f-model', 'fiat fi-model', 'toyota t-model'];

// old way
const fordInfo = cars[0];
const fiatInfo = cars[1];
const toyotaInfo = cars[2];

const [fordI, fiatI, toyotaI] = cars;
console.log(`fordInfo = ${fordInfo} and new js = ${fordI}`);

let hero = {
    heroName:'Batman',
    realName:'Bruce',
    // suitColor:'Black'
}

let {heroName, realName, suitColor='no suit information'} = hero;

// console.log(`old way ${hero.heroName} new way ${heroName}`);
console.log(suitColor);


let herous = [
    {
        heroName:'Batman'
    },
    {
        heroName:'Joker'
    }
]
for(const{heroName} of herous){
    console.log(`heroName is ${heroName}`);
}

function Person(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

let stiv = new Person('Stiv', 'Jobs', 20);
console.log(stiv);

class PersonClass{
    constructor(name, bornYear){
        this.name = name;
        this.bornYear = bornYear;
    }
    userInfo(){
        return `User name ${this.name} born in ${this.bornYear}`
    }
    static userNickName = 'Neo';
}

let rob = new PersonClass('Rob', '1980');
console.log(rob);
console.log(rob.userInfo());
console.log(rob.userNickName);
console.log(PersonClass.userNickName);

PersonClass.staticMehtod = function(){
    console.log('Static method');
}
PersonClass.prototype.publickMethod = function(){
    console.log('publickMethod');
}

rob.publickMethod();
// rob.staticMehtod();

PersonClass.staticMehtod();


