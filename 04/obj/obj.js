
let userBob = ['SuperMan', 30, ['Tom', 'Max'],'Bob'];
userBob[2]
let obj = {
    userName: 'Bob',
    age:30,
    isStudy:true,
    skills:['html', 'css']
}
let TomUser = {
    age:32,
    userName: 'Tom',
    isStudy:true,
    skills:['html']
}
console.log(obj.userName);
console.log(obj.age);
console.log(obj.isStudy);
console.log(obj.skills);

let users = [obj, TomUser];
console.log(users);

let dog = new Object(); // let dog = {}
dog.nickName = 'Rex';
dog.age = 2;
console.log(dog);
dog.voice = function(){
    // let voice = function(){}
    console.log('Gav gav');
}

dog.voice();
dog.voice();

let planets = [
    {
        "name": "Yavin IV", 
        "rotation_period": "24", 
        "orbital_period": "4818", 
        "diameter": "10200", 
        "climate": "temperate, tropical", 
        "gravity": "1 standard", 
        "terrain": "jungle, rainforests", 
        "surface_water": "8", 
        "population": "1000", 
        "residents": [], 
        "films": [
            "https://swapi.dev/api/films/1/"
        ], 
        "created": "2014-12-10T11:37:19.144000Z", 
        "edited": "2014-12-20T20:58:18.421000Z", 
        "url": "https://swapi.dev/api/planets/3/"
    }, 
    {
        "name": "Hoth", 
        "rotation_period": "23", 
        "orbital_period": "549", 
        "diameter": "7200", 
        "climate": "frozen", 
        "gravity": "1.1 standard", 
        "terrain": "tundra, ice caves, mountain ranges", 
        "surface_water": "100", 
        "population": "unknown", 
        "residents": [], 
        "films": [
            "https://swapi.dev/api/films/2/"
        ], 
        "created": "2014-12-10T11:39:13.934000Z", 
        "edited": "2014-12-20T20:58:18.423000Z", 
        "url": "https://swapi.dev/api/planets/4/"
    }, 
    {
        "name": "Dagobah", 
        "rotation_period": "23", 
        "orbital_period": "341", 
        "diameter": "8900", 
        "climate": "murky", 
        "gravity": "N/A", 
        "terrain": "swamp, jungles", 
        "surface_water": "8", 
        "population": "unknown", 
        "residents": [], 
        "films": [
            "https://swapi.dev/api/films/2/", 
            "https://swapi.dev/api/films/3/", 
            "https://swapi.dev/api/films/6/"
        ], 
        "created": "2014-12-10T11:42:22.590000Z", 
        "edited": "2014-12-20T20:58:18.425000Z", 
        "url": "https://swapi.dev/api/planets/5/"
    }
]






