window.onload = ()=>{
    let newElement = document.createElement('p'); //{}

    newElement.innerHTML = "Hello P";
    document.body.appendChild(newElement);

    let newDivEl = document.createElement('div');
    newDivEl.id = 'js-id';
    newDivEl.className = 'js-class';
    newDivEl.innerText = 'Hello from div';
    document.body.appendChild(newDivEl);

    let hElement = document.querySelector('h1');
    let spanElement = document.createElement('span');
    spanElement.innerHTML ="!!!!!";
    hElement.appendChild(spanElement);

    let listEl = document.querySelector('.list');
    let li = document.createElement('li');
    li.innerHTML = 'js li element';
    // listEl.appendChild(li);
    // listEl.appendChild(li); не працює при повторному виклику

    function createLiItem(content){
        let li = document.createElement('li');
        li.innerHTML = content;
        return li; // {li:content}
    }
    let menuContent = ['Home arr','About Us','About js', 'new item', 'next item!!!!'];
    // listEl.appendChild(createLiItem('Home'));
    // listEl.appendChild(createLiItem('About Us'));
    // listEl.appendChild(createLiItem('About js'));
    for(let i=0; i<menuContent.length; i++){
        listEl.appendChild(createLiItem(menuContent[i]));
    }

    function removeLastChild(){
        let list = document.querySelector('.list');
        let item = list.lastElementChild
        if(item != null){
            list.removeChild(item);
        }
    }


    console.log(listEl.children);
    let [...arr] = listEl.children;
    if(arr.length > 3){
        listEl.removeChild(arr[2]);
    }
    // removeLastChild();


}