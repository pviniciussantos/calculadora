function insertValues(num){
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input + num
}

function porcentagem(){
    resultado()
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = (input) /100  
     
}

function resultado(){
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = eval(input)
     
}


function limpatudo(){
    document.getElementById('input-value').value = ""
    
}

function invertevalor(){
    resultado()
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input * -1
}

function voltar(){
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = input.substring(0, input.length-1);
}