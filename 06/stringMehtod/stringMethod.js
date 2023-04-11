let text = "Hello"; // ['H','e','l','l','0']
console.log(text[1]);
console.log(text.length);
if(text.length>0){
    console.log(text.slice(1,3), 'Slice');
    console.log(text.substring(0,3));
    console.log(text.substring(2));  
}

let skills = "html, css, js";
let newSkills = skills.replace("css", "scss");
console.log(newSkills);

let userName = "          user Name     ";
let trimUserName = userName.trim();
// let trimUserName = userName.trimStart();
// let trimUserName = userName.trimEnd();

console.log(trimUserName);
console.log(`Untrim${userName}Untrim too`);

console.log(trimUserName.charCodeAt(0));
console.log(trimUserName.split(" "));



