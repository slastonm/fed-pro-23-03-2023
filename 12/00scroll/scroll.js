window.onload = function() {
    let header = document.querySelector('header');
    window.addEventListener('scroll',function(){
        console.log(window.scrollY);
        if(window.scrollY>200){
            header.classList.add('fixed');
        }
        else{
            header.classList.remove('fixed');
        }
    });
}