window.onload = ()=>{
    let chartContainer = document.querySelector('.chart');
    let data = [1130, 1110, 15, 113, 1, 145, 50, 1180];

    function craeateDataChart(data, width, height, color){
        let chartBlock = document.createElement('div');
        chartBlock.style.width = `${width}px`;
        chartBlock.style.height = `${height}px`;
        chartBlock.style.position = 'relative';

        let maxValue = Number.NEGATIVE_INFINITY;
        for(let i = 0; i<data.length; i++){
            if(maxValue<data[i]){
                maxValue = data[i];
            }
        }
        console.log(maxValue);
        let scale = height/maxValue;
        let chartSize = Math.floor(width/data.length);

        for(let i =0; i<data.length; i++){
            let barEl = document.createElement("div");
            barEl.style.height = `${data[i]*scale}px`;
            barEl.style.width = `${chartSize - 4}px`;
            barEl.style.position = 'absolute';
            barEl.style.bottom = 0;
            barEl.style.marginRight = `4px`;
            barEl.style.left = `${chartSize*i}px`;
            barEl.style.backgroundColor = color;
            chartBlock.appendChild(barEl);
        }

        return chartBlock;
    }

    let fnData = craeateDataChart(data, 900, 500, 'yellow')
    chartContainer.appendChild(fnData);
}