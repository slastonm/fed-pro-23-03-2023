let i = 0;
let text = "";

while(i<10){
    text = `The number is ${i}`;
    if(i=== 4){
        // continue;
        console.log(text);
    }
    console.log('loop work');
    i++;
}

let doText = "";
let counter = 0;

do{
    doText+=counter;
    console.log(doText);
    counter++;   
}
while(counter<5);

for(let i = 0; i<9; i++){
    console.log(`For loop work ${i}`);
}

for(let i = 5; i>0; i--){
    console.log(`For loop reverse work ${i}`);
}

for(let i = 0; i<5; i++){
    let templateStr = `<div> ${i}</div>`
    document.write(templateStr);
}

for(let i = 0; i<4; i++){
    console.log('create row');
    for(let c =0; c<4; c++){
        console.log(`create td ${c}`);
    }
}