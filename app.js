let namePlayer = prompt("Qual é o seu nome? ");
alert("Bem vindo(a) ao Show do Milhão " + namePlayer);
let decisao = prompt("Você quer jogar o Show do milhão? \n 1-Sim? \n 2-Não?")
let name = document.getElementById("Player")
name.innerHTML = "Olá " + namePlayer;

if (decisao === '1') {
    let pergunta1 = prompt("Quais os países que têm a maior e a menor expectativa de vida do mundo?\n" +
        " A- Japão e Serra Leoa\n B- Austrália e Afeganistão\n C- Itália e Chade\n D- Brasil e Congo\n E- EUA e Angola")

    if (pergunta1 === "A") {
        let questionCorrect1 = document.getElementById("Correto1")
        questionCorrect1.innerHTML = "pergunta1";
    }
    else {
        let questionIncorrect1 = document.getElementById("Incorreto1")
        questionIncorrect1.innerHTML = "pergunta1";
    }
    let pergunta2 = prompt("Qual a nacionalidade de Che Guevara? \n" + "A- Cubana\n B- Peruano\n C- Panamenha\n D- Columbiana\n E- Argentina")
    if (pergunta2 === "E") {
        let questionCorrect2 = document.getElementById("Correto2")
        questionCorrect2.innerHTML = "pergunta2";
    }
    else {
        let questionIncorrect2 = document.getElementById("Incorreto2")
        questionIncorrect2.innerHTML = "pergunta2";
    }
 
        let pergunta3 = prompt("Em qual local da Ásia o portugues é lingua oficial? \n" + "A- Índia\n B- Filipinas\n C- Moçambique\n D- Macau\n E- Portugual")
        if (pergunta3 === "D") {
        let questionCorrect3 = document.getElementById("Correto3")
        questionCorrect3.innerHTML = "pergunta3";
    }
    else {
        let questionIncorrect3 = document.getElementById("Incorreto3")
        questionIncorrect3.innerHTML = "pergunta3";
    }
}
else {
    alert("Que pena! deixa para um proxima vez")
}





console.log("teste")