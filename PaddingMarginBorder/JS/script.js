function changePaddingByElementId(rangeInput, elementId) { 
    let newPadding = rangeInput.value;

    console.log(`${newPadding}px`);

    document.getElementById(elementId).style.padding = `${newPadding}px`;
}

function changeMarginByElementId(rangeInput, elementId) { 
    let newMargin = rangeInput.value;

    console.log(`${newMargin}px`);

    document.getElementById(elementId).style.margin = `${newMargin}px`;
}
