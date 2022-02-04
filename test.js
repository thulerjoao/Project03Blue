var prompt = require("prompt-sync")();

let pontuacao = 100;
let nomePersonagem;
let horaDeAcordar;
let escovarDente;
let arrumarQuarto;
let cardapio = ["arroz", "feijão", "brócolis", "salada", "batata", "bife"];
let escolhaComida = [];
let simNao;
let fazerATarde;
let tarefaNoite;
let jogarNovamente = "sim";

while (jogarNovamente == "sim" || jogarNovamente == "s") {
  console.log(`Bem vindo ao jogo da vida.`);
  nomePersonagem = prompt(`Qual o seu nome? `);
  horaDeAcordar = prompt(`Que horas seu dispertador irá dispertar pela manhã?`);
  if (horaDeAcordar <= 8) {
    console.log(`Parabéns ${nomePersonagem}, você acordou cedo!`);
    escovarDente = prompt(`Deseja escovar os dentes?`);
    if (escovarDente == "sim" || escovarDente == "s") {
      console.log(`Que otimo!`);
    } else if (
      escovarDente == "não" ||
      escovarDente == "nao" ||
      escovarDente == "n"
    ) {
      console.log(
        ` ${nomePersonagem}, acho que não é uma boa ideia ficar sem escovar os dentes...`
      );
      pontuacao = pontuacao - 10;
    }
  } else if (horaDeAcordar >= 8 && horaDeAcordar <= 11) {
    console.log(`Que pena, voce poderia ter acordado mais cedo...`);
    pontuacao = pontuacao - 20;
  } else {
    console.log(`Voce acordou tarde demais!!!!.`);
    pontuacao = pontuacao - 25;
  }
  console.log(`O almoço já esta quase pronto!`);
  console.log(`Vamos escolher o cardápio...`);
  for (i = 0; i <= cardapio.length - 1; i++) {
    simNao = prompt(`Deseja comer ${cardapio[i]}`);
    if (simNao == "sim" || simNao == "s") {
      escolhaComida[i] = cardapio[i];
    } else {
      escolhaComida = escolhaComida;
    }
    escolhaComida = escolhaComida.filter(function (j) {
      return j;
    });
  }
  if (escolhaComida.length > 4) {
    console.log(`Voce comeu bem e está de parabéns!!`);
  } else if (escolhaComida.length > 2) {
    console.log(`Voce não comeu muito e pode sentir fome...`);
    pontuacao = pontuacao - 15;
  } else if (escolhaComida.length <= 2) {
    console.log(`Voce comeu muito pouco e irá se sentir mal.`);
    pontuacao = pontuacao - 20;
  }
  console.log(`...a tarde chegou e está na hora de decidir o que fazer.`);
  fazerATarde = prompt(`Prefere sair para correr ou dormir um pouco?`);
  if (fazerATarde == "sair para correr" || fazerATarde == "correr") {
    console.log(`Muito bem, a pratica de exercícios é sempre muito bem vinda!`);
  } else if (fazerATarde == "dormir") {
    console.log(`Parece que se exercitar teria sido uma opção mais saudável.`);
    pontuacao = pontuacao - 25;
  }
  console.log(
    `A tarde passou e temos mais coisas a fazer antes do dia terminar.`
  );
  tarefaNoite = prompt(
    `Seria uma boa ideia assistir uma série.. ou então estudar desenvolvimento web com a Blue. O que prefere?`
  );
  if (
    tarefaNoite == "assistir serie" ||
    tarefaNoite == "assistir série" ||
    tarefaNoite == "serie" ||
    tarefaNoite == "série" ||
    tarefaNoite == "assistir uma série" ||
    tarefaNoite == "assistir uma serie"
  ) {
    console.log(
      `Que pena ${nomePersonagem}... teria sido bem mais proveitoso estudar.`
    );
    pontuacao = pontuacao - 30;
  } else if (tarefaNoite == "estudar" || tarefaNoite == "estudar com a blue") {
    console.log(`Ótima escolha, tenho certeza de que foi a melhor possível!!`);
  }
  console.log(`Muito bem ${nomePersonagem}, mais um dia se passou.`);
  console.log(
    `Mas antes de deitar para dormir, fique sabendo que a pontuação do seu dia foi de ${pontuacao} Pontos.`
  );
  jogarNovamente = prompt(`Deseja jogar novamente?`);
}
