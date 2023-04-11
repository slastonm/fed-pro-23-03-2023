let date = new Date();
console.log(date);

// new Date(year, month, hours, minutes, seconds, milliseconds)

let myDate = new Date(2022, 03, 11, 0, 30, 0 );
// значення місяця року розраховується з 0 до 11
console.log(myDate);

let shortDateData = new Date(2018, 11, 24);
console.log(shortDateData);

let shortFormat = new Date(2017, 10);
console.log(shortFormat);

let stringDate = new Date("October 12, 2022 11:13:00");
console.log(stringDate);

// 24h = 86 400 000 millisec
// 1sec = 1000 millisec

let dataFormat = new Date();

console.log(`data to ISO format ${dataFormat.toISOString()}`);
console.log(`data to Date string format ${dataFormat.toDateString()}`);
console.log(`data to UTS string format ${dataFormat.toUTCString()}`);


let today = new Date();
console.log(`Get year ${today.getFullYear()}`);
console.log(`Get month ${today.getMonth()}`);
console.log(`Get hours ${today.getHours()}`);
console.log(`Get minute ${today.getMinutes()}`);




