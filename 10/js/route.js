window.onload = function(){
    let first = document.querySelector('#first');
    let second = document.querySelector('#second');
    let third = document.querySelector('#third');
    let isTunnel = false;
    first.addEventListener('click', function(e){
        this.style.backgroundColor = 'darkgreen';
        alert('Firs div');
       

    }, isTunnel);
    second.addEventListener('click', function(e){
        this.style.backgroundColor = 'yellow';
        alert('Second div');
    }, isTunnel);
    third.addEventListener('click', function(e){
        this.style.backgroundColor = 'darkblue';
        alert('Third div');
        e.stopPropagation();
    }, isTunnel);
}