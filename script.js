console.log("Hello World")
const minPrice =document.getElementById("min-price");
const mxPrice =document.getElementById("mx-price");
const priceRange =document.getElementById("price-range");
const output =document.getElementById("output");
const minPriceCircle =document.getElementById("price-range1");
const maxPriceCircle =document.getElementById("price-range2");


let minPriceValue =Number(minPrice.value);
let mxPriceValue =Number(mxPrice.value);


let priceGap = 100;



// How to grab values of  minPriceCircle when sliding left to right between 1 and 9000?
//minPriceCircle has to be set to minPriceValue input box and vice versa
    // an input is set and between 1 and 9000 as there is a gap of 1000 and minPriceInput is restricted to go above 9000 and below 1
    // when minPriceCircle is slided it shows a placeholder with the value and simultaneously minPriceValue input is set to that value
    // if minPriceCircle is slided to less than price gap then automatically maxPriceCircle is set to minPriceValue+priceGap
    

// maxPriceCircle has to be set to maxPriceValue input box and vice versa





console.log(typeof minPriceValue)
console.log(typeof mxPriceValue)