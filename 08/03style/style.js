window.onload=()=>{
    let hEl = document.querySelector('h1');
    hEl.setAttribute('style', 'color:red;background-color:yellow;font-size:30px');
    console.log(hEl.style);
    // hEl.setAttribute('style', 'padding:50px');
    hEl.style.cssText += 'padding:50px;border:2px solid black;'

    let menuContent = [
        {
            linkContent:'Home',
            linkHref:"#"
        },
        {
            linkContent:'About',
            linkHref:"about.html"
        },
    ];
    let pEl = document.querySelector('p');
    pEl.style.color = 'green';
    pEl.style.fontSize='40px';
    pEl.style.backgroundColor='black';

    let subHel = document.querySelector('h2');
    let subHelStyle = getComputedStyle(subHel);
    console.log(subHelStyle);
    console.log(subHelStyle.backgroundColor);
    console.log(subHelStyle.padding);

    let menuEl = document.querySelector('.menu');
    console.log(menuEl.className);
    menuEl.className += ' dark';

    console.log(menuEl.classList);
    menuEl.classList.add('new-class');
    let menuClass = 'bootstrap-menu'
    menuEl.classList.add('first', 'second', menuClass);

    menuEl.classList.remove('dark');
    menuEl.classList.remove('new-class', 'bootstrap-menu');
    menuEl.classList.remove('underfindClass');

    console.log(menuEl.classList.contains('list'));
    let buttonEl = document.querySelector('button');
    buttonEl.classList.toggle('active');

    let box = document.querySelector('.box');
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    console.log(width, height);
    if(height>200){
        box.classList.add('top');
    }

}