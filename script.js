
// How to grab values of  minPriceCircle when sliding left to right between 1 and 9000?
// event listener on inputs in the slider div to select queries and then parsed them to extract integer from their values


//minPriceCircle has to be set to minPriceValue input box and vice versa
// an input is set and between 1 and 9000 as there is a gap of 1000 and minPriceInput is restricted to go above 9000 and below 1
// when minPriceCircle is slided it shows a placeholder with the value and simultaneously minPriceValue input is set to that value
// if minPriceCircle is slided to less than price gap then automatically maxPriceCircle is set to minPriceValue+priceGap


// maxPriceCircle has to be set to maxPriceValue input box and vice versa



 
const rangeInput = document.querySelectorAll(".rangeContainer input");
const progress= document.querySelector(".slider .progress");
let minValueGap = 1500;
const priceInput = document.querySelectorAll(".block input");

// rangeSlider with slider Option
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal=  parseInt(priceInput[0].value),
        maxVal = parseInt(priceInput[1].value);
        
        if((maxVal-minVal >= minValueGap) && maxVal<=10000 && minVal>=0){
            if(e.target.className ==="min-price"){
                rangeInput[0].value = minVal;
                progress.style.left = (minVal / rangeInput[0].max)*100 + "%";
            }
                else{
                    rangeInput[1].value = maxVal;
                    progress.style.right = ((rangeInput[0].max - maxVal) / rangeInput[1].max)*100 + "%";
                }
                
        }

})
});




// rangeSlider with slider Option

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal=  parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        
        if(maxVal-minVal < minValueGap){
            if(e.target.className ==="min-range"){
                rangeInput[0].value = maxVal-minValueGap;}
                else{
                    rangeInput[1].value = minVal + minValueGap;
                }
                
            }
else{
     
    priceInput[0].value = minVal;
    priceInput[1].value =maxVal;
    progress.style.left = (minVal / rangeInput[0].max)*100 + "%";
    progress.style.right = ((rangeInput[0].max - maxVal) / rangeInput[1].max)*100 + "%";
}
})
});







