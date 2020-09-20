function changePaddingByElementId(rangeInput, elementId) { 
    let newPadding = rangeInput.value;

    console.log(newPadding);
    console.log(`${newPadding}px`);

    document.getElementById(elementId).style.padding = `${newPadding}px`;
}


var rangeInput = document.getElementById("myRange");    
rangeInput.addEventListener('input', changePadding, false);
rangeInput.addEventListener('change', changePadding, false);
