var prompt = require("prompt-sync")();

// // PRINCIPAIS VARIAVEIS E OBJETO DO STATUS DOS PERSONAGENS DA HISTORIA

const dadosPersonagem = {
  nomePersonagem:'',
  idadePersonagem:0,
  vidaPersonagem: 100,
  ataquePersonagem: 10,
  energiaPersonagem: 100,
};

dadosPersonagem.nomePersonagem = prompt(`Digite o nome do personagem da história: `);
dadosPersonagem.idadePersonagem = prompt(`Digite a idade do seu personagem: `);

const lobo = {
  vidaLobo: 25,
  ataqueLobo: 70,
};

console.log(`Seu personagem foi criado: `);
console.table(
dadosPersonagem
);

// // ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

tempo = (ms) => {
  var contar = new Date().getTime();
  for (var i = 0; i < 3e6; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

// //ARROW FUNCTION PARA AUMENTAR/DIMINUIR O STATUS DO PERSONAGEM CONFORME ELE EVOLUI NA HISTORIA

aumentoStatus = (status) => {
  if (status == `SIM` || status == `s` || status == `sim` || status == `S`) {
    dadosPersonagem.ataquePersonagem += 10;
    dadosPersonagem.vidaPersonagem += 10;
    dadosPersonagem.energiaPersonagem -= 5;
    console.log(
      `Seu ataque aumentou para ${dadosPersonagem.ataquePersonagem} e sua vida aumentou para ${dadosPersonagem.vidaPersonagem}, porém sua energia ficou em ${dadosPersonagem.energiaPersonagem}.`
    );
    return dadosPersonagem.ataquePersonagem;
    return dadosPersonagem.vidaPersonagem;
  } else if (
    status == `NAO` ||
    status == `n` ||
    status == `nao` ||
    status == `N`
  ) {
    dadosPersonagem.ataquePersonagem -= 10;
    dadosPersonagem.vidaPersonagem -= 10;
    console.log(
      `Seu ataque diminiu para ${dadosPersonagem.ataquePersonagem} e sua vida diminiu para ${dadosPersonagem.vidaPersonagem}`
    );
    return dadosPersonagem.vidaPersonagem;
    return dadosPersonagem.ataquePersonagem;
  }
};

// // //INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

console.log(
  `Em um reino distante, chamado Albion Flame, havia uma cidade que era muito abençoada, com terra fértil, água fresca, e muita mata, e chamada de Lorencia.
  E nessa cidade vivia ${dadosPersonagem.nomePersonagem}, um jovem aspirante a cavaleiro da cidade, muito orgulhoso e talentoso por sinal.`
);

console.log(
  `Todo dia pela manhã, ${dadosPersonagem.nomePersonagem} acorda para treinar esgrima com seu professor, mas está um pouco desmotivado por algum motivo.`
);

let irTreinar = prompt(
  `${dadosPersonagem.nomePersonagem}, deseja ir treinar hoje? `
).toLowerCase();

aumentoStatus(irTreinar);

if (irTreinar == `sim` || irTreinar == `s`) {
  irTreinar = prompt(
    `Você pode continuar treinando se quiser, deseja continuar? `
  ).toLowerCase();
  aumentoStatus(irTreinar);
} else if (irTreinar == `não` || irTreinar == `nao` || irTreinar == `n`) {
  return;
}

console.log(
  `Logo apos o treino, ainda de manhã, voltou para casa e logo em seguida foi ajudar no pasto da familia.`
);

let ajudarPasto = prompt(
  `Seu pai Thors, ja está com idade avançada e precisa de ajuda. Deseja ajuda seu pai?`
).toLowerCase();

if (ajudarPasto == `s` || ajudarPasto == `sim`) {
  console.log(
    `Por ter ajudado seu pai a alimentar todo os animais e cuidar do pasto ficou um pouco cansado diminuindo sua energia para ${
      dadosPersonagem.energiaPersonagem - 5
    }`
  );
  console.log(`Enquanto se arrumava para voltar pra casa, ${dadosPersonagem.nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.
  ${dadosPersonagem.nomePersonagem} pegou sua espada e correu para ajuda-lá.`);

  console.log(
    `Chegando mais perto ${dadosPersonagem.nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: `
  );
  console.table(lobo);

  if (
    dadosPersonagem.ataquePersonagem > lobo.vidaLobo &&
    dadosPersonagem.energiaPersonagem != 0
  ) {
    console.log(
      `Foram necessários ${Math.ceil(
        lobo.vidaLobo / dadosPersonagem.ataquePersonagem
      )} para conseguir matar o lobo. `
    );
  } else {
    console.log(
      `Você não conseguiu ajudar a ovelha, e o lobo acabou matando ela.`
    );
  }
  console.log(
    `Ja no horário do almoço ${dadosPersonagem.nomePersonagem} voltou para casa para comer, para poder assim, recuperar as energias.`
  );

  const cardapio = [
    ["arroz",3],
    ["feijao",3],
    ["carne de boi",3],
    ["carne de frango",3],
    ["verduras",3],
    ["legumes",3],
    ["salada",3],
  ];
  let escolhaAlmoco = [];

  for (i = 0; i < cardapio.length; i++) {
    if (prompt(`Deseja comer ${cardapio[i][0]}? `).toLowerCase() == "sim") {
      escolhaAlmoco.push((cardapio[i])[0]);
      dadosPersonagem.energiaPersonagem += (cardapio[i])[1];
    }
  }
  console.log(escolhaAlmoco);
  console.log(`Sua energia passou para ${dadosPersonagem.energiaPersonagem}`);
}