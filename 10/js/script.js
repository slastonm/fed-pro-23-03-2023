window.onload = ()=>{
    // let inputEl  = document.querySelector('input');
    // let btnEl = document.querySelector('button');

    // btnEl.addEventListener('click',function(){
    //     // console.log(inputEl);
    //     console.log(inputEl.value);
    //     inputEl.value = "";
    // });
    let mouse = document.querySelector('.mouse');
    mouse.addEventListener('mousemove', handler);
    function handler(e){
        let infoText = "";
        infoText = `Alt ${e.altKey} Ctrl ${e.ctrlKey} Shift ${e.shiftKey}   X cordinate ${e.clientX} Y cordinate ${e.clientY}`;
        mouse.innerHTML = infoText;
    }
    let headerEl = document.querySelector('header');
    let hoverEl = document.querySelector('.hover');
    hoverEl.onmouseover = function(){
        this.style.backgroundColor = 'red';
        headerEl.style.backgroundColor = 'gray';
    }
    hoverEl.onmouseout = function(){
        this.style.backgroundColor = 'yellow';
        headerEl.style.backgroundColor = 'pink';
    }
    let mousemoveEl = document.querySelector(".onmousemove");
    let mouseDown = document.querySelector(".onmousedown");
    let mouseUp = document.querySelector(".onmouseup");

    mousemoveEl.onmousemove = function(e){
        this.innerHTML = `Event X ${e.offsetX} : Y ${e.offsetY} X cordinate client ${e.clientX} Y cordinate client ${e.clientY}`;
    }
    mouseDown.onmousedown = function(e){
        this.innerHTML = `Event X ${e.offsetX} : Y ${e.offsetY} X cordinate client ${e.clientX} Y cordinate client ${e.clientY}`;
    }
    mouseUp.onmouseup = function(e){
        this.innerHTML = `Event X ${e.offsetX} : Y ${e.offsetY} X cordinate client ${e.clientX} Y cordinate client ${e.clientY}`;
    }
}