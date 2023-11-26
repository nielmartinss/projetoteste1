var num1,num2,alt,resul;

num1 = prompt("entre com o primeiro numero ");
alt = prompt("entre com a operação + / - / * ( / ) ");
num2 = prompt("entre com o segundo numero");

switch (alt) {
    case "+":
        resul = parseInt(num1) + parseInt(num2) ;
        resul = alert("a soma é  : " + resul);
        
    break;
    
    case "-":
        resul = parseInt(num1) - parseInt(num2) ;
        resul = alert("a subtração é  : " + resul);
    break;
    
    case "*":
        resul = parseInt(num1) * parseInt(num2) ;
        resul = alert("a multiplicação é  : " + resul);
    break;
    
    case "/":
        resul = parseInt(num1) / parseInt(num2) ;
        resul = alert("a divisão é  : " + resul);
    break;
    
    default:
        break;
}