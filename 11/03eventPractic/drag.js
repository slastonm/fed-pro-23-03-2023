window.onload = function(){
    let div = document.querySelector('div');
    function drag(elementToDrag, e){
        let startX = e.clientX;
        let startY = e.clientY;
        let originX = elementToDrag.offsetLeft;
        let originY = elementToDrag.offsetTop;

        let middleValueX = startX-originX;
        let middleValueY = startY-originY;

        function moveHandler(e){
            elementToDrag.style.left =(e.clientX - middleValueX) + 'px';
            elementToDrag.style.top = (e.clientY - middleValueY) + 'px';
        }
        function upMouseHandler(e){
            document.removeEventListener('mouseup', upMouseHandler);
            document.removeEventListener('mousemove', moveHandler);
        }

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', upMouseHandler);
    }

    div.onmousedown = function(e){
        drag(this, e);
    }
}