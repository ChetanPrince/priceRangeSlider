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
            if(maxRange - minRange <1000){
                rangeInput[0].value = minRange;
                rangeInput[1].value = minRange + minValGap;
            }
            else{
                let percent1 = (rangeInput[0].value / 100)+"%";
                let percent2 = ((rangeInput[1].max - maxRange)/ 100)+"%";
                console.log(percent1);
                console.log(percent2);
                // console.log(rangeInput[0].value);
                // console.log(minRange);
                progress.style.left = percent1;
                progress.style.right = percent2;
            }


        }
    })

})