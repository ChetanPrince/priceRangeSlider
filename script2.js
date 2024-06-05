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
            

        if(e.target.className = "min-range"){
            if(maxRange - minRange >=1000){
                rangeInput[0].value = minRange;
                rangeInput[1].value = maxRange;
                let percent1 = (rangeInput[0].max/maxRange *100)+"%";
                progress.computedStyleMap.left = percent1;
            }


        }
    })

})