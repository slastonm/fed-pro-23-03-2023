let time = '9:05'// 9:30
console.log(`${/^\d{1,2}:\d\d/.test(time)} time format `);

let stringText = 'How cats, rats, and bats became Halloween animals';

let atsAnimal = /[cbr]ats/g;

let animalRes = stringText.match(atsAnimal);
console.log(animalRes);

let dateData = '21-12-1999';
let dataRegExp = /\d{1,2}-\d{1,2}-\d{4}/;
console.log(dataRegExp.test(dateData));

let phoneNumber = '+38(062)222-33-44';
let phoneRegExp = /\+38\(\d{3}\)\d{3}-\d{2}-\d{2}/;

console.log(phoneRegExp.test(phoneNumber), 'phone' );

let emailAddress = 'emailnam.example@example.com';
let emailPattern = /\b[a-zA_Z0-9._]+@[a-z]+\.[a-z]{2,5}\b/;
console.log(emailPattern.test(emailAddress), 'email' );

let filePattern = /\w+\.html/;
console.log(filePattern.test('inde.css'), 'file');
console.log(filePattern.test('inde.html'), 'file');
