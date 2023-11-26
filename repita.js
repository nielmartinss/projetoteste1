function acaoBotao() {
    var n1, n2, r
    do {
        
        n1 = prompt("entre com o priemiro numero ? ")
        n2 = prompt("entre com o segundo numero ?")
        
        document.getElementById("paragrafo").innerText = parseInt (n1) + parseInt(n2)
             

            r = prompt("deseja continuar ? ")

    } while (r != "nao"); 

    
    
    
}
