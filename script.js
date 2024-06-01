// range input grabs all input values from slider in a single query selector const 
const rangeInput = document.querySelectorAll(".rangeContainer input");

// for each  "input" (input as the first argument to perform an action upon it) a function/event is parsed as an arrow function 
rangeInput.forEach(input =>{
    // input event is listened on input element and empty parameter to be parsed to perform arrow function
    input.addEventListener("input", ()=>{

        // getting two ranges values and parsing them to number
        let minVal=  parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        // percent to grab a value where rangeInput[0].max to get 4 digits upmost number 

        let percent = (minVal / rangeInput[0].max)*100;



        
        // console.log(minVal, maxVal);
        console.log(percent);
    })
})




// How to grab values of  minPriceCircle when sliding left to right between 1 and 9000?
    // event listener on inputs in the slider div to select queries and then parsed them to extract integer from their values


//minPriceCircle has to be set to minPriceValue input box and vice versa
    // an input is set and between 1 and 9000 as there is a gap of 1000 and minPriceInput is restricted to go above 9000 and below 1
    // when minPriceCircle is slided it shows a placeholder with the value and simultaneously minPriceValue input is set to that value
    // if minPriceCircle is slided to less than price gap then automatically maxPriceCircle is set to minPriceValue+priceGap
    

// maxPriceCircle has to be set to maxPriceValue input box and vice versa



