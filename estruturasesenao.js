
function acaoBotao() {

    var num1,num2,alt,resul;

num1 = prompt("entre com o primeiro numero " + num1);
num2 = prompt("entre com o segundo numero " + num2);

alt = prompt("escolha entre somar(1), subtrair(2) , multiplicar (3), dividir(4)");

if (alt == "1"){
    resul = parseInt(num1) + parseInt(num2)
    
}else if(alt == "2"){
    resul = parseInt(num1) - parseInt(num2)
    
}else if(alt == "3"){
    resul = parseInt(num1) * parseInt(num2)
    
}else if(alt == "4"){
    resul = parseInt(num1) / parseInt(num2)
    
}
document.getElementById("paragrafo").innerText = resul

}
