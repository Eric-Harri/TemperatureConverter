"use strict";
// Make sure you see an error message if the input temperature isn't a number
window.onload = initF



function initF() {
    const convertBtnF = document.getElementById("convertBtnF");
    const resetBtnF = document.getElementById("resetBtnF");

    convertBtnF.onclick = onConvertBtnFClicked; 
    resetBtnF.onclick = onResetBtnFClicked;    
}



function onConvertBtnFClicked() {
    const celTempField = document.getElementById("celTempField");
    const outPutFieldF = document.getElementById("outPutFieldF");

    let celTempValue = Number(celTempField.value);
    let tempConvertF = (celTempValue * 1.8) + 32 

    outPutFieldF.value = tempConvertF;

}

function onResetBtnFClicked() {
    const outPutFieldF = document.getElementById("outPutFieldF");

    outPutFieldF.value = "";
}