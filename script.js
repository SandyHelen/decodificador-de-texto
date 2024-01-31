let textArea=document.getElementsByClassName('text-space');
let newText = [];
let copyButton = document.getElementById('copy');

//// criptografar

function cryptography(){
    setResult(getTextToEncrypt());

    textArea[0].value = "";
    newText = [];
    
}

//recebe o texto e realiza a criptografia
function getTextToEncrypt(){
    let finalText = "";
    let text = textArea[0].value;

    if(hasUppercase(text) == true || hasAccents(text) == true){

        finalText = "OPS... Não se esqueça de digitar o texto sem letras maiúsculas e sem acentos.";

    } else {
        
        for(let i = 0; i < text.length; i++){
            if(text[i] === 'a'){
                newText.push('ai')
            } else if(text[i] === 'e'){
                newText.push('enter')
            } else if(text[i] === 'i'){
                newText.push('imes')
            } else if(text[i] === 'o') {
                newText.push('ober')
            } else if(text[i] === 'u') {
                newText.push('ufat')
            } else{
                newText.push(text[i])
            }
        }

        finalText = newText.join('');
    }

    return finalText;
}

////descriptografar

function descryptography(){
    setResult(getTextToDecrypt());
    textArea[0].value = "";
}

//recebe o texto e realiza a descriptografia
function getTextToDecrypt(){
    let finalText = "";
    let text = textArea[0].value;

    text = text.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    finalText = text;
    return finalText;
}


///atualiza a area que exibe o resultado da mensagem gerada criptografada ou descriptografada
function setResult(textToDisplay){
    let resultAreaP = document.getElementsByClassName('result-area__p');
    let resultAreaImage = document.getElementsByClassName('result-area-image');
    let resultAreaTitle = document.getElementsByClassName('result-area__title');


    if(textArea[0].value === ""){
        resultAreaImage[0].style.display = 'block';
        resultAreaTitle[0].style.display = 'block';
        resultAreaP[0].innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
        copyButton.style.display = 'none';
    } else{
        resultAreaImage[0].style.display = 'none';
        resultAreaTitle[0].style.display = 'none';
        resultAreaP[0].innerText = textToDisplay;   
        copyButton.style.display = 'block';
    }
    
}

//ativa o botao para copiar o texto, cria um input auxiliar oculto e atribui nesse input o texto desejado, input excluido no final
function copyText(){
    let copyArea = document.getElementsByClassName('result-area__p')[0].innerText;
    let aux = document.createElement('input');

    aux.setAttribute('value', copyArea);
    document.body.appendChild(aux);
    
    aux.select();
    aux.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(aux.value);

    document.body.removeChild(aux);
}


//verificar acentos ou letras maiusculas
function hasAccents(textToVerify){
    let regexAccents = /[áàâãéèêíïóôõöúçÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ]/i;

    return regexAccents.test(textToVerify);
}

function hasUppercase(textToVerify){
    let regexUppercase = /[A-Z]/;

    return regexUppercase.test(textToVerify);
}