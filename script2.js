const rangeInput = document.querySelectorAll(".rangeContainer input");
const priceInput = document.querySelectorAll(".block input");
const minValGap = 1000;
let min = 0;
let max = 1;
const progress = document.querySelector(".slider .progress");



// adding loop in priceInput to update slider according to price

priceInput.forEach(input =>{
    input.addEventListener("blur", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice =parseInt(priceInput[1].value);
        // condition when price difference is below 1000 then checking which element if being input in and accordingly set other value to be off of minValGap
        let maxPriceLength = priceInput[1].value.length;

        if(maxPriceLength >= 4){
            if(maxPrice - minPrice < minValGap){
                if(e.target.className="minPrice"){
                    priceInput[1].value = minPrice + minValGap;
                    }
                else{
                    priceInput[0].value = maxPrice - minValGap;
                } }
            else{
                    let percent1 = (priceInput[0].value/100)+"%";
                    let percent2 = ((priceInput[1].max - rangeInput[1].value) / 100)+"%";
                    progress.style.left = percent1;
                    progress.style.right = percent2;
                    rangeInput[0].value = priceInput[0].value;
                    rangeInput[1].value = priceInput[1].value;
                }
        }
        else{
             alert("Kindly have a minimum input of 0 at Min Price and 1000 at MaxPrice");
             return;
        }
    })
})




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
            progress.style.left = percent1;
            progress.style.right = percent2;
            priceInput[0].value = rangeInput[0].value;
            priceInput[1].value = rangeInput[1].value;
        }
})})