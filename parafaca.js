function acaoBotao() {
    var num,fatorial,contador;

    num = prompt("entre com o numero");
    fatorial = 1 

    for (contador = 1 ; contador <= num ; contador++){
        fatorial = (fatorial * contador);
       
    }



    document.getElementById("paragrafo").innerText = parseInt (fatorial) ;
}