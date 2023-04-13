window.onload =()=>{
    let textBlockElement = document.getElementById("textBlock");
    console.log(textBlockElement);
    let paragraphs = document.getElementsByTagName('p');
    console.log(paragraphs);
    // let elementArr = Array.from(paragraphs);
    let [...elementArr] = document.getElementsByTagName('p');
    console.log(elementArr);
    // [p,p,p]
    // for(let i=0; i<elementArr.length; i++){
    //     elementArr[i].innerHTML = "Worked loop" + i;
    // }
    elementArr.forEach(item=>{
        // item.innerHTML = `<span> Hello </span>`;
        item.innerText = `Hello `;

    });

    let items = document.getElementsByClassName("item");
    // let [...items] = document.getElementsByClassName("item");

    console.log(items);
    let dataFromItems =[ ...items].map(element=>{
        // console.log(element.innerHTML);
        // return element.innerText
        return element.textContent

    })
    console.log(dataFromItems);
    let footerLink = document.querySelector("footer a");
    // console.log(footerLink);
    let [...footerLinks] = document.querySelectorAll("footer a");
    // console.log(footerLinks);
    let classItems = document.querySelectorAll(".item");
    // console.log(classItems);
    let multiSelect = document.querySelectorAll("p, li, a");
    // console.log(multiSelect);
    let selectCssStyle = document.querySelectorAll("ul.navigation > li");
    // console.log(selectCssStyle);
    let secondElement = document.querySelectorAll("li:nth-child(2)");
    console.log(secondElement);
}