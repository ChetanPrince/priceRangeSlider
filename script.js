// Bugs Identified :    price inputs have to be concise and should not be allowed negative numbers or inputs with decimal digits or numbers should be automatically converted to multiples of 100 after its closest input
// Bugs: when price input notices price lower than min value gap an alert should be shown or price should automatically set to closes price possible and slider should act accordingly



const rangeInput = document.querySelectorAll(".rangeContainer input");
const progress= document.querySelector(".slider .progress");
let minValueGap = 1000;
const priceInput = document.querySelectorAll(".block input");

// rangeSlider with slider Option
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        e.preventDefault();
        if (priceInput[0].value.length >= 4 && priceInput[1].value.length >= 4) {
        let minPrice=  parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice-minPrice >= minValueGap) && maxPrice<=rangeInput[1].max && minPrice>=rangeInput[0].min){
            if(e.target.className ==="min-price"){
                rangeInput[0].value = minPrice;
                progress.style.left = ((minPrice / rangeInput[0].max)*100) + "%";
            }
            else{
                rangeInput[1].value = maxPrice;
                progress.style.right =100-( maxPrice / rangeInput[1].max)*100 + "%";
            }}
        else if(maxPrice - minPrice < minValueGap){  
             if(e.target.className ==="min-price"){
                 maxPrice = minPrice + minValueGap;
                 priceInput[1].value = maxPrice;
                 rangeInput[0].value = minPrice;
                progress.style.left = ((minPrice / rangeInput[0].max)*100) + "%";
             console.log(maxPrice);}
             else{
                minPrice = maxPrice - minValueGap;
                priceInput[0].value = minPrice;
                rangeInput[1].value = maxPrice;
                progress.style.right =100-( maxPrice / rangeInput[1].max)*100 + "%";
             }
             }}
    
        })})





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
    progress.style.left = ((minVal / rangeInput[0].max)*100) + "%";
    progress.style.right = 100-( maxVal/ rangeInput[1].max)*100 + "%";
}
})
});







