window.onload=()=>{
    let insideEl = document.querySelector(".inside");
    // console.log(insideEl);
    // console.log(insideEl.parentNode);

    let mobileBtn = document.querySelector('.mobile');
    // console.log(mobileBtn.parentNode);4

    let bodyEl = document.querySelector("body");
    // console.log(bodyEl.parentNode);

    let htmlEl = document.querySelector("html");
    // console.log(htmlEl.parentNode);

    let menu = document.querySelector(".menu-list");
    let menuChilden = menu.children;
    console.log([...menuChilden]);
    // console.log(menu.firstChild);
    // console.log(menu.firstElementChild);
    // console.log(menu.lastElementChild);

    let activeItem = document.querySelector(".active");
    
    let nextItem = activeItem.nextElementSibling;
    let prevItem = activeItem.previousElementSibling
    console.log(nextItem, 'Next');
    console.log(prevItem);
    
}