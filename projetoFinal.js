const prompt = require("prompt-sync")();

console.log(
`Bem vindo ao reino distante de Albion Flame!! Um lugar mágico cheio de criaturas e varios caminhos a serem explorados.
Moramos em uma vila muito abençoada chamada Lorência. Temos terra fértil, água fresca, e muita mata.
`
);

// PRINCIPAIS VARIAVEIS E OBJETOs DOs STATUS DOS PERSONAGENS DA HISTORIA

let nomePersonagem;
let idadePersonagem;
let elementoEscolhido;
let numeroDias;

nomePersonagem = prompt(`Digite o nome que deseja para seu personagem na história: `);
  while(!isNaN(nomePersonagem)) {
    console.clear();
    console.log(`!!!ATENÇÃO!!!`);
    nomePersonagem=prompt(`Digite um nome válido para seu personagem: `);
    console.clear();
  }
idadePersonagem = +prompt(`Digite a idade do seu personagem: `);
  while(isNaN(idadePersonagem)  || idadePersonagem < 1) {
    console.log(`!!!ATENÇÃO!!!`);
    idadePersonagem=prompt(`Digite um valor correto para idade: `);
    console.clear();
  }
numeroDias = +prompt(`Quantos dias jogar? `);
  while(isNaN(numeroDias) || numeroDias < 1) {
    console.clear();
    console.log(`!!!ATENÇÃO!!!`);
    numeroDias=prompt(`Digite um valor correto para o número de dias que deseja jogar: `);
    console.clear();
  }

//OBJETO PRINCIPAL COM TODAS AS VARIAÇÕES DE STATUS DO PERSONAGEM.

const dadosPersonagem = {
  nome: nomePersonagem,
  idade: idadePersonagem,
  vida: 100,
  ataque: 10,
  agilidade: 70,
  defesa: 30,
  energia: 100,

  aumentarStatus: function (status) {
    if (status == `s` || status == `sim` || status == true) {
      this.ataque += 15;
      this.vida += 15;
      this.agilidade += 11;
      this.defesa += 9;
      this.energia -= 5;
      console.log(
        `\nSeus status aumentaram para:\nVida: ${this.vida}\nAtaque: ${this.ataque}\nAgilidade: ${this.agilidade}\nDefesa: ${this.defesa}\nEnergia: ${this.energia}`
      );
    }
  },

  diminuirStatus: function (status) {
    if (status == `n` || status == `nao` || status == false) {
      this.ataque -= 10;
      this.vida -= 10;
      this.agilidade -= 8;
      this.defesa -= 8;
      console.log(
        `\nSua vida diminiu para ${this.vida}, ataque diminiu para ${this.ataque}.\n`
      );
    }
  },

  poderElemental: function () {
    const elementos = ["fogo", "agua", "terra", "ar"];

    let elementoEscolhido;
    do {
        console.log(`${nomePersonagem}, sou um espirito elementar da natureza, e venho em missão de lhe conceder algum dos seguintes elementos: ${elementos} `)
      elementoEscolhido = prompt(
        `Qual destes voce escolhe? `
      ).toLowerCase();
    } while (!elementos.includes(elementoEscolhido));
    console.clear();
    console.log(
      `\nVocê invocou o elemento "${elementoEscolhido}".\n`
    );

    console.log(`\nVocê invocoou o elemento "${elementoEscolhido}".\n`);

    if (elementoEscolhido == `fogo`) {
      this.vida += 70;
      this.ataque += 150;
      this.agilidade += 84;
      this.defesa += 50;
      console.log(`O elemento fogo é focado no ataque. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+70)\nAtaque: ${this.ataque} (+150)\nAgilidade: ${this.agilidade} (+84)\nDefesa${this.defesa} (+50)`);
    } else if (elementoEscolhido == `agua`) {
      this.vida += 150;
      this.ataque += 53;
      this.agilidade += 50;
      this.defesa += 88;
      console.log(`O elemento agua é focado na vida. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+150)\nAtaque: ${this.ataque} (+53)\nAgilidade: ${this.agilidade}(+50)\nDefesa: ${this.defesa} (+88)`);
    } else if (elementoEscolhido == `terra`) {
      this.vida += 87;
      this.ataque += 45;
      this.agilidade += 50;
      this.defesa += 150;
      console.log(`O elemento terra é focado na defesa. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+87)\nAtaque: ${this.ataque} (+45)\nAgilidade: ${this.agilidade} (+50)\nDefesa: ${this.defesa} (+150)`);
    } else if (elementoEscolhido == `ar`) {
      this.vida += 50;
      this.ataque += 80;
      this.agilidade += 150;
      this.defesa += 45;
      console.log(`O elemento agua é focado na agilidade. Seus atributos aumentaram para: 
    \nVida: ${this.vida} (+50)\nAtaque: ${this.ataque} (+80)\nAgilidade: ${this.agilidade} (+150)\nDefesa: ${this.defesa} (+45)`);
    }
  },

  poderElementalFuria: function () {
    const elementos = ["fogo", "agua", "terra", "ar"];

    do {
      elementoEscolhido = prompt(
        `${nomePersonagem}, chame por um elemento: `
      ).toLowerCase();
    } while (!elementos.includes(elementoEscolhido));

    console.log(`\n${elementoEscolhido}!!! Gritou ${nomePersonagem}.\n`);

    if (elementoEscolhido == `fogo`) {
      this.vida += 4899;
      this.ataque += 12450;
      this.agilidade += 8754;
      this.defesa += 4205;
      console.log(`Desceu um bola de fogo do alto e envolveu ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+4899)\nAtaque: ${this.ataque} (+12450)
  Agilidade: ${this.agilidade} (+8754)\nDefesa${this.defesa} (+4205)`);
    } else if (elementoEscolhido == `agua`) {
      this.vida += 12450;
      this.ataque += 4899;
      this.agilidade += 4205;
      this.defesa += 8754;
      console.log(`A chuva aumentou dratiscamente cercando ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+12450)\nAtaque: ${this.ataque} (+4899)
  Agilidade: ${this.agilidade}(+4205)\nDefesa: ${this.defesa} (+8754)`);
    } else if (elementoEscolhido == `terra`) {
      this.vida += 8754;
      this.ataque += 4205;
      this.agilidade += 4899;
      this.defesa += 12450;
      console.log(`A terra começou a se agitar em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+8754)\nAtaque: ${this.ataque} (+4205)
  Agilidade: ${this.agilidade} (+4899)\nDefesa: ${this.defesa} (+12450)`);
    } else if (elementoEscolhido == `ar`) {
      this.vida += 4899;
      this.ataque += 8754;
      this.agilidade += 12450;
      this.defesa += 4205;
      console.log(`Um furacão se formou em volta de ${nomePersonagem}. Seus atributos aumentaram para: 
  Vida: ${this.vida} (+4899)\nAtaque: ${this.ataque} (+8754)
  Agilidade: ${this.agilidade} (+12450)\nDefesa: ${this.defesa} (+4205)`);
    }
  },

  recuperarEnergia: function () {
    const cardapio = [
      ["arroz", 9],
      ["feijao", 9],
      ["carne de boi", 15],
      ["carne de frango", 13],
      ["verduras", 7],
      ["legumes", 8],
      ["salada", 6],
    ];

    for (let comida of cardapio) {
      let escolhaComida = prompt(`Deseja comer ${comida[0]}? `).toLowerCase();
      escolhaComida = validacao(escolhaComida);
      if (escolhaComida == "sim" || escolhaComida == `s`) {
        dadosPersonagem.energia += comida[1];
      }
    }
  },
};

const lobo = {
  vida: 25,
  ataque: 70,
  agilidade: 30,
  defesa: 30,
  elemento: `neutro`,
};

const orc = {
  vida: 150,
  ataque: 130,
  defesa: 100,
  agilidade: 70,
  elemento: `ar`,
};

const dragao = {
  vida: 550,
  ataque: 1350,
  defesa: 350,
  agilidade: 145,
  elemento: `fogo`,
};

const golem = {
  vida: 200,
  ataque: 120,
  agilidade: 20,
  defesa: 500,
  elemento: `Terra`,
};

const necromante = {
  vida: 550,
  ataque: 1350,
  defesa: 350,
  agilidade: 145,
  elemento: `DARKNESS`,
};

// ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

tempo = (ms) => {
  var contar = new Date().getTime();
  for (var i = 0; i < 5e6; i++) {
    if (new Date().getTime() - contar > ms) {
      break;
    }
  }
};

//ARROW FUNCTION PARA VALIDAÇÃO DA RESPOSTA DO USUARIO

function validacao(x){    
  
  while( x != `sim` && x != `s` && x != `nao` && x != `não` && x != `n`){ 
      console.log(`!!! ATENÇÃO !!!`)
      x = prompt(`Responda somente com [sim] ou [não]: `).toLowerCase();   
      }
      return x;
}

///////////////// **************************************************** ///////////////////////
console.clear();
console.log(`Criando seu personagem: `);
// tempo();
// console.log(`.`);
// tempo();
// console.log(`.`);
// tempo();
// console.log(`.\n`);
// tempo();
console.clear();

console.log(
  `Seu personagem foi criado. Confira:\n
Nome: ${dadosPersonagem.nome}
Vida: ${dadosPersonagem.vida}\nAtaque: ${dadosPersonagem.ataque}
Agilidade: ${dadosPersonagem.agilidade}\nDefesa: ${dadosPersonagem.defesa}
Energia: ${dadosPersonagem.energia}`);

tempo();

//ENTRADA E VALIDAÇÃO TEMPORAL DO JOGO.

// while (true) {
//   if (
//     !isNaN(numeroDias) &&
//     numeroDias > 0 &&
//     numeroDias % 1 == 0 &&
//     numeroDias.length != 0
//   ) {
//     break;
//   }
// }

for (i = 0; i < numeroDias; i++) {
  console.log(`\n${i + 1}º dia no Reino de Albion Flame. `);
  tempo();

  //INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

  console.log(
    `\nTodo dia pela manhã, ${nomePersonagem} acorda cedo para treinar esgrima com seu professor.\nPorém, ultimamente ele anda um pouco desmotivado.
\nEis que nesta manhã, ${nomePersonagem} ficou se questionando...`
  );
  tempo();

  // ONDE O PERSONAGEM VAI TOMAR O PRIMEIRO RUMO DA HISTORIA

  let irTreinar = prompt(`Será que devo treinar hoje? [sim] ou [não]: `).toLowerCase();
  irTreinar = validacao(irTreinar);
  console.clear();
  tempo();
  dadosPersonagem.aumentarStatus(irTreinar);
  dadosPersonagem.diminuirStatus(irTreinar);
  tempo();

  // PRIMEIRA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

  if (irTreinar == `sim` || irTreinar == `s`) {
    while (irTreinar == `sim` || irTreinar == `s`) {
      irTreinar = prompt(
        `Você pode continuar treinando se quiser, deseja continuar? `
      ).toLowerCase();
      irTreinar = validacao(irTreinar);
      tempo();
      console.clear();

      dadosPersonagem.aumentarStatus(irTreinar);
    }
    tempo();

    console.log(
      `Após o treino, ${nomePersonagem} volou para casa pois precisava ajudar sua família.`
  );
  console.log(`Seu pai Thors já está com idade avançada e tem dificuldades em realizar as tarefas no pasto.\n`);
    tempo();

    let ajudarPasto = prompt(`Deseja ajudar seu pai? `).toLowerCase();
    ajudarPasto = validacao(ajudarPasto);
    console.clear();

    tempo();

    if (ajudarPasto == `s` || ajudarPasto == `sim`) {
      dadosPersonagem.energia -= 5;
      console.log(
        `\nSua família tem muitos animais e ajudar seu pai não foi uma tarefa muito fácil. Você acabou ficando um pouco cansado.\nIstou diminuiu sua energia para ${dadosPersonagem.energia}`
    );

      tempo();

      console.log(`\nTrabalho concluído... é hora de voltar para casa.`);
      console.log(`\nEnquanto arrumava suas coisas, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.\n${nomePersonagem} pegou sua espada e correu para salva-la.`);
      tempo();

      console.log(
        `\nChegando mais perto ${nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: \n`
      );

      tempo();

      console.table(lobo);

      //CONDIÇÃO PARA PRIMEIRA LUTA DO PERSONAGEM.

      let matarLobo;
      if (
        (matarLobo =
          dadosPersonagem.ataque > lobo.vida && dadosPersonagem.energia != 0)
      ) {
        console.log(
          `Foram necessárias ${Math.ceil(
              lobo.vida / dadosPersonagem.ataque
          )} investidas para conseguir matar o lobo. A ovelha foi salva!`
      );
        dadosPersonagem.aumentoStatus(matarLobo);
      } else {
        console.log(
          `\nVocê não estava forte o suficiente para enfrentar o lobo e a ovelha acabou morrendo.`
      );
      }
    } else {
      console.clear();
      console.log(`Como ${nomePersonagem} não estava em um bom dia...\nNão ajudar no pasto pode poupar energias para uma futura ocasião.`);
  }
    tempo();
    console.log(`\nA manhã se foi e é hora de almoçar para repor suas energias que estão em '${dadosPersonagem.energia}'.\n${nomePersonagem} precisa escolher o cardápio.\n`);
    
    dadosPersonagem.recuperarEnergia();
    console.clear();

    console.log(`\nApós a refeição, a energia de ${dadosPersonagem.nome} aumentou para: ${dadosPersonagem.energia}.\n`);
    tempo();

    console.log(`Como era de costume, toda tarde ${nomePersonagem} saia para caçar em uma floresta ao sul de Lorência. 
    Porém, naquela tarde em especial ele sentiu algo diferente, semelhante de quando acordou. Se sentia um pouco mais forte e rápido. Então se despediu 
    de seu pai e ao se despedir de sua mãe, ela entregou a ele um amuleto para protege-lo durante a caçada. \n`);

    tempo();

    //SEGUNDO CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

    console.log(`A floresta fica muito distante de sua casa, e você deve decidir entre pegar um atalho ou permanecer no caminho padrão.`)
    let caminho = prompt(`Deseja pegar um atalho? [OBS] O atalho é mais rápido, porém não tão seguro: `).toLowerCase();
    caminho = validacao(caminho);
    console.clear();

    if (caminho == `sim` || caminho == `s`) {
      dadosPersonagem.energia -= 10;
      console.log(`\nMesmo pegando um atalho, o trajeto foi difícil e ${nomePersonagem} perdeu '10' de energia.`);
      console.log(`Seu novo valor de energia é '${dadosPersonagem.energia}'`);  
      console.log(`Enquanto passava pelo atalho, ${nomePersonagem} avistou de longe um Orc.\nChegando perto, o monstro o cercou. Impedindo ${nomePersonagem} de passar adiante ou recuar.`)
      console.log(`Então, ${nomePersonagem} manteve distância e constatou os dados do Orc: `)
      console.table(orc);
      console.log(`\nComo não havia escapatória, a única opção de ${nomePersonagem} foi enfrentar o monstro. `);
     
      if (dadosPersonagem.ataque < orc.vida && dadosPersonagem.energia != 0) {
        
        console.log(`O Orc, que é muito superior em todos os atributos, começou a dar uma sequencia de golpes.\n${nomePersonagem} não vai conseguir derrota-lo assim...\n`);
        tempo();
        console.log(`...até que quase sem forças, ${nomePersonagem} vê um brilho saindo de seu amuleto e uma voz que vinha de dentro do seu peito.\n`)
        console.log(`De repente, aparece um espirito elementar em sua frente e ele diz as seguintes palavras: \n`)

        tempo();

        dadosPersonagem.poderElemental();

        tempo();

        dadosPersonagem.energia -= 35;
        console.log(
          `\nAgora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
            (orc.vida + orc.defesa) /
              (dadosPersonagem.ataque + dadosPersonagem.agilidade)
          )} investidas para eliminar e passar pelo Orc. Sua energia caiu para ${
            dadosPersonagem.energia
          }`
        );

        tempo();

        console.log(`\nDerrotar o Orc levou um bom tempo e o dia estava anoitecendo. Então ${nomePersonagem} resolveu desistir da caçada e voltar para casa.`)
        console.log(`Agora que conquistou seu novo poder de invocação, ${nomePersonagem} terá de treinar ainda mais para aprimorar suas habilidades.\n`);
        
        tempo();

        console.log(
          `Chegando em casa já pela noite e muito exausto pela batalha, ${nomePersonagem} decide comer algo... `
        );

        dadosPersonagem.recuperarEnergia();
        console.clear();

        console.log(`Com a ultima refeição, sua energia subiu para: ${dadosPersonagem.energia}`);
        console.log(`Depois de um dia longo ${nomePersonagem} precisa descansar.`);
    
      } else if (
        dadosPersonagem.ataque > orc.vida &&
        dadosPersonagem.energia != 0
      ) {
        dadosPersonagem.energia -= 35;
        console.log(
          `Foram necessárias ${Math.ceil(
            (orc.vida + orc.defesa) /
              (dadosPersonagem.ataque + dadosPersonagem.agilidade)
          )} investidas para conseguir matar o Orc. Sua energia caiu para ${
            dadosPersonagem.energia
          }. `
        );
        dadosPersonagem.aumentoStatus(matarOrc);
      }
    } else if (caminho == `nao` || caminho == `não` || caminho == `n`) {
      dadosPersonagem.energia -= 25;

      console.log(`Como pegou o caminho mais longo ${nomePersonagem} acabou perdendo energia.\nEnergia atual: ${dadosPersonagem.energia}.\n`);
      console.log(`Chegando na floresta, ${nomePersonagem} realizou sua caçada sem nenhum problema e acumulou suprimentos para levar para casa.\nEis que na volta, ${nomePersonagem} encontra um jovem pedindo ajuda.`);
      console.log(`O jovem falou que a vila dele havia sido atacada por um dragão assustador, que estava acabando com as casas e também matando as pessoas.`);
    

      let jovem = prompt(`Deseja ajudar o jovem? `).toLowerCase();
      jovem = validacao(jovem);
      console.clear();

      //TERCEIRA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

      if (jovem == `sim` || jovem == `s`) {
        
        console.log();
            dadosPersonagem.energia -= 20
            console.log(`A vila do jovem ficava próxima a Lorência.\nChegando lá, ${nomePersonagem} avistou o dragão e de longe conseguiu constatar seus atributos:`);
            console.table(dragao);
            console.log(`Como os atributos do dragão eram muitos maiores que o de ${nomePersonagem}, ele decidiu voltar para sua vila e avisar aos moradores.`);
            console.log(`Essa viagem lhe cansou um pouco. Agora restam ${dadosPersonagem.energia} de energia. `);
            console.log(`\nAo chegar na sua vila, a mãe de ${nomePersonagem} lhe ensinou a invocar os espiritos. E assim ele fez.`);

        dadosPersonagem.poderElemental();

        // ******************************************** PRECISO CONTINUAR A HISTORIA AQUI ******************************************** //
      } else {
        tempo();
        console.log(`chegando em Lorência,\n${nomePersonagem} fica espantado ao se deparar com um dragão atacando a vila.\nRapidamente ${nomePersonagem} saca sua espada, e corre para 
enfrentar o dragão. No entanto, os atributos do dragão eram muito maiores.\n`);

        console.table(dragao);

        let enfrentarDragao = prompt(
          `Deseja enfrentar o dragão mesmo assim? `
        ).toLowerCase();
        enfrentarDragao = validacao(enfrentarDragao);
        if (
          enfrentarDragao == `sim` ||
          (enfrentarDragao == `s` && dadosPersonagem.energia != 0)
        ) {
          let resultadoLuta1 =
            (dadosPersonagem.vida + dadosPersonagem.defesa) %
            (dragao.ataque + dragao.agilidade);
          let resultadoLuta2 =
            (dragao.vida + dragao.defesa) %
            (dadosPersonagem.ataque + dadosPersonagem.agilidade);
          if (resultadoLuta1 > resultadoLuta2) {
            console.log(
              `\nO dragão é muito forte e está acabando com todas as forças de ${nomePersonagem}.\nPorém desistir não é uma opção! Caso o faça, sua vila acabara em ruinas...\n`
            );
            tempo();
            console.log(`Tutuh`);
            tempo();
            console.log(`Tutuh`);
            tempo();
            console.log(`Tutuh`);
            tempo();

            console.log(
              `Até que o amuleto de ${nomePersonagem} brilha mais uma vez. Porém desta vez o brilho esta mais forte e mais intenso.`
            );
            tempo();
            tempo();
            console.log(`Chame por um elemento...`);
            tempo();
            tempo();
            console.log(`${nomePersonagem} escuta vozes de sorroco, mas não sabe de onde vem. É o seu pai sendo levado pelo dragão.`); 
            console.log(`E ele grita: - Por favor, não! Por favor!!!`);
            tempo();
            tempo();
            console.log(`Chame por um elemento...`);
            tempo();
            console.log(
              `Vendo todo aquela situação sem saber o que fazer, mais uma vez ${nomePersonagem} escuta a mesma voz: `
            );

            dadosPersonagem.poderElementalFuria();

            console.log(
              `${nomePersonagem} recebeu um aumento enorme em seu poder elemental. Possibilitando a ele, o que faltava para derrotar o dragão. `
            );
            dadosPersonagem.energia -= 45;
            console.log(
              `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
                (dragao.vida + dragao.defesa) /
                  (dadosPersonagem.ataque + dadosPersonagem.agilidade)
              )} investidas para eliminar o dragao. E sua energia caiu para ${
                dadosPersonagem.energia
              }`
            );
            console.log(
              `Após eliminar o dragão ${nomePersonagem} ficou esgotado. E todos da sua vila parabenizaram ele pelo feito. 
Lorencia agora vive em paz no comando de ${nomePersonagem}.`
            );
          }
        } else if (
          enfrentarDragao == `nao` ||
          enfrentarDragao == `n` ||
          enfrentarDragao == `não`
        ) {
          console.log(`${nomePersonagem} fugiu da vila, muito ferido, porque está muito fraco para enfrentar o dragão. 
Praticamente todos os moradores da vila morreram. Agora ele vai ter que refazer toda sua vida.`);
        }
      }
    }

    tempo();
  } else if (irTreinar == `não` || irTreinar == `nao` || irTreinar == `n`) {
    console.log(`Como ${nomePersonagem} não quis treinar, decidiu sair para explorar uma caverna ao sul da vila que por más linguas vivia um golem
porém, ninguem nunca tinha visto. Como não tinha treinado, sua mãe lhe abençoou com uma proteção e lhe deu um amuleto.\n`);

    console.log(
      `No caminho do caminho ${nomePersonagem} passou pelo mar, e ficou pensando em levar suprimentos para casa.`
    );

    let suprimentos = prompt(
      `Deseja pescar algo para levar pra casa? `
    ).toLowerCase();

    validacao(suprimentos);

    if (
      suprimentos == `sim` ||
      (suprimentos == `s` && dadosPersonagem.energia != 0)
    ) {
      dadosPersonagem.energia -= 35;

      console.log(
        `${nomePersonagem} conseguiu pegar alguns peixes, porém levou a tarde toda e gastou um pouco da sua energia ficando com: ${dadosPersonagem.energia}`
      );
    } else if (
      suprimentos == `nao` ||
      suprimentos == `não` ||
      suprimentos == `n`
    ) {
      dadosPersonagem.energia -= 20;

      console.log(`${nomePersonagem} Foi direto em direção a caverna.`);
    }

    console.log(
      `Chegando a caverna ${nomePersonagem} começa a ficar apreensivo pois não sabia o que tinha dentro e mesmo assim decidiu entrar.`
    );

    console.log(
      `Ao entrar na caverna ${nomePersonagem} percebeu um barulho e foi caminhando em direção a ele, até que conseguiu avistar o tal Golem.
Com os atributos: `
    );

    console.table(golem);

    console.log(`Assustado. ${nomePersonagem} decide voltar para casa.`);

    console.log(
      `No caminho de volta pra casa ${nomePersonagem} encontra um Elfo que ficou muito elforico ao ver o amuleto que ${nomePersonagem} carregava.`
    );

    // QUARTA CONDIÇÃO DA HISTORIA QUE DETERMINA A DIREÇÃO DO PERSONAGEM.

    let amuleto = prompt(
      `Deseja saber mais sobre esse amuleto que você carrega? Perguntou o Elfo `
    ).toLowerCase();
    validacao(amuleto);
    if (amuleto == `sim` || amuleto == `s`) {
      console.log(
        `Esse amuleto foi forjado pelos elfos ancestrais, e colocaram nele os espiritos elementais da floresta.
Sendo eles: Fogo, Agua, Terra e Ar.`
      );
      console.log(
        `O elfo falou que poderia ativar os espiritos e fortalecer ${nomePersonagem}.`
      );

      let ativarAmuleto = prompt(
        `Deseja ativar o amuleto para dominar os elementos? `
      ).toLowerCase();
      validacao(ativarAmuleto);

      if (ativarAmuleto == `sim` || ativarAmuleto == `s`) {
        console.log(
          `O Elfo com um simples toque no amuleto o ativou e ele começou a brilhar. Onde saiu um espirito elemental. `
        );
        dadosPersonagem.poderElemental();

        console.log(
          `Com esse novo poder, e os atributos totalmente mudados. ${nomePersonagem} decide voltar para caverna para lidar com o golem.`
        );

        console.log(
          `Chegando na caverna novamente e chegando mais perto do golem, percebe que está acorrentado e e parecia estar sofrendo.
So que fica indagando se solta ou não o golem.`
        );

        let soltarGolem = prompt(`Soltar o golem? `).toLowerCase();
        validacao(soltarGolem);

        if (
          soltarGolem == `sim` ||
          (soltarGolem == `s` && dadosPersonagem.energia != 0)
        ) {
          console.log(
            `O golem foi solto e parte pra cima de ${nomePersonagem} sem constestar que sem querer, terá que lutar contra ele.`
          );
          dadosPersonagem.energia -= 25;
          console.log(
            `Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
              (golem.vida + golem.defesa) /
                (dadosPersonagem.ataque + dadosPersonagem.agilidade)
            )} investidas para eliminar o golem. E sua energia caiu para ${
              dadosPersonagem.energia
            }`
          );
        } else if (
          soltarGolem == `nao` ||
          soltarGolem == `não` ||
          soltarGolem == `n`
        ) {
          console.log(
            `${nomePersonagem} viu o golem e não o que esperava, voltou para casa frustrado ainda em horário da janta.`
          );
          dadosPersonagem.recuperarEnergia();

          console.log(`Após a janta, simplesmente quis ficar em sem quarto e descansar, esse dia não foi muito bom para ${nomePersonagem}. 
Quem sabe amanhã melhore...`);
        }
      }
    } else if (amuleto == `nao` || amuleto == `não` || amuleto == `n`) {
      console.log(
        `${nomePersonagem} seguiu em frente sem dar bola pro Elfo, chegando em casa para chegar na hora da janta.\n`
      );

      dadosPersonagem.recuperarEnergia();

      console.log(`Quando ${nomePersonagem} se praparava para dormir, escuta um estrondo muito alto, e corre para ver o que é.
Ao chegar na porta vê um forte chama alastrando por toda sua vila, e ao fixar seu olhar, consegue ver um mago necromante e seus exercitos de zumbis.\n`);

      console.log(`Corre para pegar sua espada, e assim que volta seu pai já está no centro da vila enfrentando o necromante. Porém, seu pai já de idade, sofre 
um encanto do necromante e acaba morrendo.`);

      tempo();
      tempo();
      console.log(`grugh`);

      tempo();
      tempo();
      console.log(`grugh`);

      tempo();
      tempo();
      console.log(`${nomePersonagem} ainda imovel, percebe que seu pai está se levantando como um zumbi.\nAo ver isso
${nomePersonagem} se enfurece demais e pensa: `);

      let enfentrarNecro = prompt(`Será que devo enfrentar esse Necromante? `);
      validacao(enfentrarNecro);
      dadosPersonagem.energia -= 40;
      if (
        enfentrarNecro == `sim` ||
        (enfentrarNecro == `s` && dadosPersonagem.energia != 0)
      ) {
        console.log(
          `${nomePersonagem} corre em direção ao necromante sem pensar muito e o exercicito de zumbis que estava ao derredor atacam todos ao mesmo tempo. Ele ainda estava muito fraco.`
        );

        console.log(
          `Caido no chão, e começa chover, e ele pensa: - Podia ter treinado mais cedo... Meu pai não teria morrido, minha vila não teria sido destruida, e eu não estaria aqui prestes a morrer. `
        );
        tempo();
        tempo();
        console.log(`Chame por um elemento.`);
        tempo();
        tempo();
        console.log(`${nomePersonagem} escuta de longe alguem falando, procura mas não acha. Vê um de longe um dos zumbis do necromante indo atacar sua mãe. 
E ele grita: - Por favor não! Por favor!`);
        tempo();
        tempo();
        console.log(`Chame por um elemento.`);
        tempo();
        console.log(
          `Vendo aquela situação sem saber o que fazer, mais uma vez escuta a mesma voz: `
        );

        dadosPersonagem.poderElementalFuria();

        tempo();
        console.log(
          `${nomePersonagem} parte pra cima do necromante com todas as forças`
        );
        console.log(
          `Agora com seu novo poder ${nomePersonagem} parte pra cima do necromante e desfere ${Math.ceil(
            (necromante.vida + necromante.defesa) /
              (dadosPersonagem.ataque + dadosPersonagem.agilidade)
          )} golpes, que foi o suficiente para matar o necromante.
        `
        );
        console.log(
          `${nomePersonagem} acaba desmaiando, porém, conseguiu salvar a vila.\n`
        );
      } else {
        console.log(
          `${nomePersonagem} ficou sem energia para enfrentar o necromante, infelizmente, a vila foi destruida. Amanhã talvez o dia seja melhor...`
        );
      }
    }
  }
  tempo();
  tempo();
  console.log(`Carregando outro dia.`);
  tempo();
  console.log(`.`);
  tempo();
  tempo();
  console.log(`..`);
  tempo();
  tempo();
  console.log(`...`);
}