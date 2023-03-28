let i = 0;
let text = "";
let repet = 5;
while(i<repet){
    text = `The i value is ${i}`;
    console.log(text);
    i++;
    if(i === 3){
        console.log('Stop loop');
        break;
    }
}