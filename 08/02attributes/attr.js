window.onload = ()=>{
  
    let firstLink = document.querySelector('#linkFirst');
    console.log(firstLink);

    let secondLink = document.querySelector('#linkSecond');
    secondLink.setAttribute('href','https://prog.kiev.ua/');
    secondLink.innerHTML = 'New link';
    
    let btn = document.querySelector('button');
    if(btn){
        btn.setAttribute('name', 'send');
        btn.setAttribute('disabled', '');
        btn.innerHTML = 'value';
        btn.setAttribute('class', 'btn');
    }

    firstLink.removeAttribute('href');
    firstLink.removeAttribute('target');

    let inputEl = document.querySelector('input');
    let inputType = inputEl.getAttribute('type');
    console.log(inputType);
}
