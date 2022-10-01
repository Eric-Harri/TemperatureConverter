"use strict";
window.onload = initC

function initC() {
    const convertBtnC = document.getElementById("convertBtnC");
    const resetBtnC = document.getElementById("resetBtnC");
    

    convertBtnC.onclick = onConvertBtnCClicked;
    resetBtnC.onclick = onResetBtnCClicked;
}

function onConvertBtnCClicked() {
    const fahTempField = document.getElementById("fahTempField");
    const outPutFieldC = document.getElementById("outPutFieldC");

    let fahTempValue = Number(fahTempField.value);
    let tempConvertC = (fahTempValue - 32) * .555556

    outPutFieldC.value = tempConvertC;
}

function onResetBtnCClicked() {
    const outPutFieldC = document.getElementById("outPutFieldC");

    outPutFieldC.value = "";
}