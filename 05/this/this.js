let person = {
    firstName :"John",
    lastName : "Doe",
    id : 123,
    fullInformation : function(){
        return `This person ${this.firstName} and ${this.lastName} and ${this.id}`
    }
}

let globalThis = this;
console.log(globalThis.innerWidth);
console.log(globalThis.innerHeight);


// console.log(person.fullInformation());
