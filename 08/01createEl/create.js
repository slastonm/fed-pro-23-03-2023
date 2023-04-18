window.onload = ()=>{
    let menuContainer = document.querySelector(".menu");
    let menuItems = ['Home', 'News', 'Post', 'Sale'];
    let fragment = new DocumentFragment();
    menuItems.forEach((item)=>{
        let li = document.createElement('li');
        li.innerHTML = item;
        fragment.appendChild(li);
    });

    menuContainer.appendChild(fragment);

    let paragraphEl = document.createElement('p');
    paragraphEl.innerHTML = 'This p element';
    menuContainer.after(paragraphEl);

    let libList = document.querySelector('.libs');
    let libs = ['React', 'Vue', 'Angular'];
    let items = libs.map((libItem)=>{
        let item = document.createElement('li');
        item.innerHTML =  libItem;
        return item;
    })
    libList.lastChild.after(...items);

    let newLi = document.createElement('li');
    newLi.innerHTML = 'New element with content';
    libList.replaceChild(newLi, libList.firstElementChild);

    let beforeLi = document.createElement('li');
    beforeLi.innerHTML= 'Before';
    libList.insertBefore(beforeLi, libList.firstElementChild);    

}