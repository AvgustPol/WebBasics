function changePaddingByElementId(rangeInput, elementId) { 
    let newPadding = rangeInput.value;

    console.log(`${newPadding}px`);

    document.getElementById(elementId).style.padding = `${newPadding}px`;
}


var rangeInput = document.getElementById("myRange");    
rangeInputPadding.addEventListener('input', changePadding, false);
rangeInputPadding.addEventListener('change', changePadding, false);

var rangeInput = document.getElementById("myRange");    
rangeInputMargin.addEventListener('input', changeMargin, false);
rangeInputMargin.addEventListener('change', changeMargin, false);
