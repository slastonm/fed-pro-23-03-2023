window.onload = ()=>{
    let btn = document.querySelector('button');
    // btn.onclick  = ()=>{
    //     alert("Done");
    // }
    function displayAlert(){
        alert("Event listner done");
    }
    btn.addEventListener('click', displayAlert);

    let removeBtn = document.querySelector(".remove");
    removeBtn.addEventListener('click', ()=>{
        btn.removeEventListener('click', displayAlert);
        alert('Done')
    });
    let titleEl = document.querySelector('h1');
    titleEl.addEventListener('click', function(){
        console.log(this);
        this.innerHTML ='Click done';
    });
    let [...liArr] = document.querySelectorAll("li");
    for(let i =0; i<liArr.length; i++){
        // liArr[i].addEventListener('click', function(){
        //     this.style.backgroundColor = 'red';
        // });
        liArr[i].onclick = function(){
            this.style.backgroundColor = 'green'
        }
    }
    let title2El = document.querySelector('h2');
    title2El.addEventListener('click', function(event){
        console.log(event);
    });
    let link = document.querySelector('a');
    link.addEventListener('click', function(e){
        alert("Link click");
        e.preventDefault();
    });

    let userIput = document.querySelector('input');
    let getData = document.querySelector('.get');

    getData.addEventListener('click', function(){
        // console.log(userIput);
        // console.log(userIput.value);
        // let userIputData = userIput.value;
        // alert(`${userIputData}`);
        title2El.classList.toggle('active');
    })
}