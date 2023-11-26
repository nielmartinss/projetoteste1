var nome,not1,not2,media;

nome = prompt("nome do aluno");
not1 = prompt("entre com a primeira nota do " + nome);
not2 = prompt("entre com a segunda nota do " + nome);

media = (parseInt(not1) + parseInt(not2)) / 2;

if(media >= 5 )
alert("aprovado " + nome)
else
alert("reprovado " + nome)
