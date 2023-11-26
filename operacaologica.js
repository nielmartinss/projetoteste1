var nome,not1,not2,media,passou;

passou = false;

nome = prompt("nome do aluno");
not1 = prompt("entre com a primeira nota do " + nome);
not2 = prompt("entre com a segunda nota do " + nome);

media = (parseInt(not1) + parseInt(not2)) / 2;

if(media >= 5 )
    passou = true;

    if(passou && media >=10)
alert("passou com excelencia "+ nome)

    else
    
    if(passou && (media >=7 || media <=9))
alert("aprovado " + nome)

    else
alert("reprovado " + nome)