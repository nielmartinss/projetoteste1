function acaoBotao() {

var nome, idade, limite, contador;
    
limite = prompt("entre com a quantidade de vezes que vai ser verificado a idade: " );
    
contador = 0
    
while(contador < limite) {
    nome = prompt("entre com o nome")
    idade = prompt("entre com a idade ")
        if ( idade > 18 ) 
           document.getElementById("paragrafo").innerText = nome + " é maior de idade"
        else    
            document.getElementById("paragrafo").innerText = nome + " é menor de idade"
            
            
            contador++
            }
            

            }
            
        

