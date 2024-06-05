const rangeInput = document.querySelectorAll(".rangeContainer input");
const priceInput = document.querySelectorAll(".block input");
const minValGap = 1000;
let min = 0;
let max = 1;
const progress = document.querySelector(".slider .progress");


// adding function to check range inputs and setting left and right properties of progress style

rangeInput.forEach(input =>{
    input.addEventListener("input", e => {
        let minRange = parseInt(rangeInput[0].value),
        maxRange = parseInt(rangeInput[1].value);
            
        if(maxRange - minRange < minValGap){
            if(e.target.className === "min-range"){
                rangeInput[0].value = maxRange - minValGap;
            }
            else{
                rangeInput[1].value = minRange + minValGap;
                
            }
            }
        else{
            let percent1 = (rangeInput[0].value/100)+"%";
            let percent2 = ((rangeInput[1].max - rangeInput[1].value) / 100)+"%";
            console.log(percent2);
            progress.style.left = percent1;
            progress.style.right = percent2;
            priceInput[0].value = rangeInput[0].value;
            priceInput[1].value = rangeInput[1].value;

        }


})})