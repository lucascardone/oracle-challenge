let btnCopy = document.getElementById("btn-copy");
let btnCript = document.getElementById("btn-cript");
let btnDscript = document.getElementById("btn-dscript");
let result = document.getElementById("result");
let resultImg = document.getElementById("result-img").style.visibility = "hidden";

// Encriptador desafio de Alura-Oracle


btnCript.onclick = function () {
    let text = document.getElementById("text").value;
    if (text == "") {
        document.getElementById("result-img").style.visibility = "visible";
        result.value = "";
    } else {
        document.getElementById("result-img").style.visibility = "hidden";
        result.value = encriptarTexto(text);
    }
}

btnDscript.onclick = function(){
    let text = document.getElementById("text").value;
    if (text == "") {
        document.getElementById("result-img").style.visibility = "visible";
        result.value = "";
    } else {
        document.getElementById("result-img").style.visibility = "hidden";
        result.value = desencriptarTexto(text);
    }
}

btnCopy.onclick = function(){
    var clipboard = document.getElementById("result").value;
    navigator.clipboard.writeText(clipboard);
    result.value = "";
    document.getElementById("text").value = "";
}
    


function encriptarTexto(text) {
    let nText = "";
    nText = text.replace(/e/g, "enter");
    nText = nText.replace(/i/g, "imes");
    nText = nText.replace(/a/g, "ai");
    nText = nText.replace(/o/g, "ober");
    nText = nText.replace(/u/g, "ufat");
    return nText;
}

function desencriptarTexto(text) {
    let nText = "";
    nText = text.replace(/enter/g, "e");
    nText = nText.replace(/imes/g, "i");
    nText = nText.replace(/ai/g, "a");
    nText = nText.replace(/ober/g, "o");
    nText = nText.replace(/ufat/g, "u");
    return nText;
}

