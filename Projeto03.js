let prompt = require("prompt-sync")();

// PRINCIPAIS VARIAVEIS E OBJETOs DOs STATUS DOS PERSONAGENS DA HISTORIA

let nomePersonagem = prompt(`Digite o nome do personagem da história: `);
let idadePersonagem = prompt(`Digite a idade do seu personagem: `);
let elementoEscolhido;
let contador = 0;

const dadosPersonagem = {
    nome: nomePersonagem,
    idade: idadePersonagem,
    vida: 100,
    ataque: 10,
    agilidade: 70,
    defesa: 30,
    energia: 100
};

const lobo = {
    vida: 25,
    ataque: 70,
    agilidade: 30,
    defesa: 30,
    elemento: `neutro`
}

const orc = {
    vida: 150,
    ataque: 130,
    defesa: 100,
    agilidade: 70,
    elemento: `ar`
}

const dragao = {
    vida: 550,
    ataque: 1350,
    defesa: 350,
    agilidade: 145,
    elemento: `fogo`
}
const golem = {
    vida: 200,
    ataque: 120,
    agilidade: 20,
    defesa: 500,
}


// ARROW FUNCTION PARA PAUSAR TEMPO DE EXECUÇÃO

tempo = (ms) => {
    var contar = new Date().getTime();
    for (var i = 0; i < 3e6; i++) {
        if (new Date().getTime() - contar > ms) {
            break;
        }
    }
};

//ARROW FUNCTION PARA AUMENTAR/DIMINUIR O STATUS DO PERSONAGEM CONFORME ELE EVOLUI NA HISTORIA

aumentoStatus = (status) => {
    if (status == `s` || status == `sim` || status == true) {
        dadosPersonagem.ataque += 10;
        dadosPersonagem.vida += 10;
        dadosPersonagem.agilidade += 8;
        dadosPersonagem.defesa += 8;
        dadosPersonagem.energia -= 5;
        console.log(
            `\nSeus status aumentaram para:
            \nVida: ${dadosPersonagem.vida}
            \nAtaque: ${dadosPersonagem.ataque}
            \nAgilidade: ${dadosPersonagem.agilidade}
            \nDefesa: ${dadosPersonagem.defesa}
            Energia: ${dadosPersonagem.energia}`
        );
        return dadosPersonagem.ataque;
        return dadosPersonagem.vida;
        return dadosPersonagem.agilidade;
        return dadosPersonagem.defesa;
        return dadosPersonagem.energia;
    } 
};

diminuirStatus = (status) => {
    if (
        status == `n` ||
        status == `nao` || status == false
    ) {
        dadosPersonagem.ataque -= 10;
        dadosPersonagem.vida -= 10;
        dadosPersonagem.agilidade -= 8;
        dadosPersonagem.defesa -= 8;
        console.log(
            `\nSua vida diminiu para ${dadosPersonagem.vida}, ataque diminiu para ${dadosPersonagem.ataque}.\n`
        );
        return dadosPersonagem.vida;
        return dadosPersonagem.ataque;
        return dadosPersonagem.agilidade;
        return dadosPersonagem.defesa;
        
    }
}

poderElemental = () => { 

    const elementos = ["fogo", "agua", "terra", "ar"];
    
    do {
      elementoEscolhido = prompt(
        `${nomePersonagem}, sou um espirito elementar da natureza, qual elemento você deseja invocar? ${elementos} `
      ).toLowerCase();
    } while (!elementos.includes(elementoEscolhido));
    
    console.log(
      `\nVocê invocou o elemento "${elementoEscolhido}".\n`
    );
    
    if (elementoEscolhido == `fogo`){
        dadosPersonagem.vida += 70;
        dadosPersonagem.ataque += 150;
        dadosPersonagem.agilidade += 84;
        dadosPersonagem.defesa += 50;
        console.log(`O elemento fogo é focado no ataque. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+70)\nAtaque: ${dadosPersonagem.ataque} (+150)
Agilidade: ${dadosPersonagem.agilidade} (+84)\nDefesa${dadosPersonagem.defesa} (+50)`);
    } else if(elementoEscolhido == `agua`){
        dadosPersonagem.vida += 150;
        dadosPersonagem.ataque += 53;
        dadosPersonagem.agilidade += 50;
        dadosPersonagem.defesa += 88;
        console.log(`O elemento agua é focado na vida. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+150)\nAtaque: ${dadosPersonagem.ataque} (+53)
Agilidade: ${dadosPersonagem.agilidade}(+50)\nDefesa: ${dadosPersonagem.defesa} (+88)`);
    }  else if(elementoEscolhido == `terra`){
        dadosPersonagem.vida += 87;
        dadosPersonagem.ataque += 45;
        dadosPersonagem.agilidade += 50;
        dadosPersonagem.defesa += 150;
        console.log(`O elemento terra é focado na defesa. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+87)\nAtaque: ${dadosPersonagem.ataque} (+45)
Agilidade: ${dadosPersonagem.agilidade} (+50)\nDefesa: ${dadosPersonagem.defesa} (+150)`);
    }  else if(elementoEscolhido == `ar`){
        dadosPersonagem.vida += 50;
        dadosPersonagem.ataque += 80;
        dadosPersonagem.agilidade += 150;
        dadosPersonagem.defesa += 45;
        console.log(`O elemento agua é focado na agilidade. Seus atributos aumentaram para: 
Vida: ${dadosPersonagem.vida} (+50)\nAtaque: ${dadosPersonagem.ataque} (+80)
Agilidade: ${dadosPersonagem.agilidade} (+150)\nDefesa: ${dadosPersonagem.defesa} (+45)`);
    }
}

recuperarEnergia = () =>{

    const cardapio = [
        ["arroz", 3],
        ["feijao", 3],
        ["carne de boi", 5],
        ["carne de frango", 5],
        ["verduras", 3],
        ["legumes", 3],
        ["salada", 3],
      ];
  
      for (let comida of cardapio) {
        let escolhaComida = prompt(`Deseja comer ${comida[0]}? `).toLowerCase();
        validacao(escolhaComida);
        if (escolhaComida == "sim" || escolhaComida == `s`) {
          dadosPersonagem.energia += comida[1];
        }
      }
}

//ARROW FUNCTION PARA VALIDAÇÃO DA RESPOSTA DO USUARIO

validacao = (x) => {
    while (x != `sim` && x != `s` && x != `nao` && x != `não` && x != `n`) {
      x = prompt(`Responda somente com "sim" ou "não": `);
    }
  };
  

///////////////// **************************************************** ///////////////////////

console.log(`Criando seu personagem: `);
tempo();
console.log(`.`);
tempo();
console.log(`.`);
tempo();
console.log(`.`);

console.log(
    `Seu personagem foi criado:
    `);
console.table(dadosPersonagem);
tempo();
tempo();
tempo();


//INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

console.log(
    `\nEm um reino distante, chamado Albion Flame, havia uma cidade que era muito abençoada, com terra fértil, água fresca, e muita mata.
Esta cidade era Lorência, e nela vivia ${nomePersonagem}, um jovem aspirante a cavaleiro que era muito orgulhoso e talentoso por sinal.`
);

console.log(
    `\nTodo dia pela manhã, ${nomePersonagem} acorda para treinar esgrima com seu professor.\nNo entato, andava um pouco desmotivado por algum motivo.\n`
);

// ONDE O PERSONAGEM VAI TOMAR O PRIMEIRO RUMO DA HISTORIA
console.log(`O sol raiou e está na hora de ir para o treino.`)
let irTreinar = prompt(`${nomePersonagem}, deseja ir treinar hoje? `).toLowerCase();
tempo();
aumentoStatus(irTreinar);
diminuirStatus(irTreinar);
validacao(irTreinar);
tempo();


if (
    irTreinar == `sim` ||
    irTreinar == `s`

    ) { 
        while (
            irTreinar == `sim` ||
            irTreinar == `s` &&
            contador == 4
            ){
    irTreinar = prompt(
        `Você pode continuar treinando se quiser, deseja continuar? `
    ).toLowerCase();
    tempo();
    aumentoStatus(irTreinar);
    contador++
            }
    console.log(
        `Após o treino, ${nomePersonagem} volou para casa pois precisava ajudar sua família no pasto.\n`
    );
    console.log(`Seu pai Thors já está com idade avançada e tem dificuldade em realizar as tarefas no pasto.`);
    let ajudarPasto = prompt(
        `Deseja ajudar seu pai? `
    ).toLowerCase();
    
    if (ajudarPasto == `s` || ajudarPasto == `sim`) {
        dadosPersonagem.energia -= 5
        console.log(
            `\nAjudar seu pai não foi uma tarefa muito fácil e lhe deixou um pouco cansado.\nIstou diminuiu sua energia para ${dadosPersonagem.energia
            }`
        );
        tempo();
    
        // CONDIÇÃO PARA LUTA DO PERSONAGEM
        console.log(`Trabalho concluído... é hora de voltar para casa.`);
        console.log(`\nEnquanto se arrumava suas coisas, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.
        ${nomePersonagem} pegou sua espada e correu para ajuda-lá.`);
        tempo();
        console.log(
            `\nChegando mais perto, ${nomePersonagem} conseguiu verificar os status do lobo e decidiu enfrenta-lo: \n`
        );
        tempo();
        console.table(lobo);
       
        let matarLobo;
        if (matarLobo =
            dadosPersonagem.ataque > lobo.vida &&
            dadosPersonagem.energia != 0
        ) {
            console.log(
                `Foram necessárias ${Math.ceil(
                    lobo.vida / dadosPersonagem.ataque
                )} investidas para conseguir matar o lobo. `//INVESTIDAS???????
            );
            aumentoStatus (matarLobo);
        } else {
            console.log(
                `Você não conseguiu ajudar a ovelha, e o lobo acabou matando ela.`
            );
        }
    } else if (ajudarPasto == `n` || ajudarPasto == `nao` || ajudarPasto == `não`){
        console.log(`Realmente ${nomePersonagem} não estava em um bom dia...\nNão ajudar no pasto pode poupar energias para uma futura ocasião.`);
    }
    
    //CONDIÇÃO PARA AUMENTO DA ENERGIA DO PERSONAGEM.
    console.log(`\nA manhã se foi e é hora de almoçar para repor suas energias que estão em '${dadosPersonagem.energia}'.
                \n${nomePersonagem} precisa escolher o cardápio.\n`);
    
    
    recuperarEnergia ();
    
    console.log(`\nApós a refeição, a energia de ${dadosPersonagem.nome} aumentou para: ${dadosPersonagem.energia}.\n`);
    tempo();
    console.log(`Como era de costume, toda tarde ${nomePersonagem} saia para caçar em uma floresta ao sul de Lorência. 
    Porém, naquela tarde em especial ele sentiu algo diferente, semelhante de quando acordou. Se sentia um pouco mais forte e rápido. Então se despediu 
    de seu pai e ao se despedir de sua mãe, ela entregou a ele um amuleto para protegelo durante a caçada. \n`);
    
    tempo();
    
    //VALIDAÇÃO E CONDIÇÃO DEPENDENDO DO CAMINHO DO CAMINHO QUE O PERSONAGEM TOMAR. 

    console.log(`A floresta fica muito distante de sua casa, e você deve decidir entre pegar um atalho ou permanecer no caminho padrão.`)
    let caminho = prompt(`Deseja pegar um atalho? [OBS] O atalho é mais rápido, porém não tão seguro: `).toLowerCase();
    validacao(caminho);

    if (caminho == `sim` || caminho == `s`){
        dadosPersonagem.energia -= 10
        console.log(`\nMesmo pegando um atalho, o trajeto foi difícil e ${nomePersonagem} perdeu '10' de energia.`);
        console.log(`Seu novo valor de energia é '${dadosPersonagem.energia}'`);
        
        (`Ainda enquanto passava pelo atalho, ${nomePersonagem} avista de longe um Orc.\n Chegando perto, o montro cerca ${nomePersonagem}, impedindo-o de passar ou recuar.`)
        console.log(`Então, ${nomePersonagem} manteve uma distância segura e constatou os dados do Orc: `)
    console.table (orc)
        console.table(orc);
        console.log(`\nComo não havia escapatória, a única opção de ${nomePersonagem} era enfrentar o monstro. `)
    
        if( 
            dadosPersonagem.ataque < orc.vida &&
            dadosPersonagem.energia != 0
        ) {
            console.lo
            console.log(`O Orc, que é muito superior em todos os atributos e começa a dar uma sequencia de golpes.\n${nomePersonagem} não vai conseguir derrota-lo assim...\n`);
            tempo();
            console.log(`Já quase sem forças ${nomePersonagem} vê um brilho de seu amuleto e uma voz que vinha de dentro do seu peito.\n
        Aparece um espirito elementar em sua frente e pergunta para ${nomePersonagem}: \n`)
            tempo();
            tempo();
    
            poderElemental();
        
        tempo();
        
        dadosPersonagem.energia -= 35
        console.log(`Agora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
            orc.vida / dadosPersonagem.ataque
        )} investidas para eliminar e passar pelo Orc. E sua energia caiu para ${dadosPersonagem.energia}`);
        
        tempo();
    
        console.log(`Derrotar o Orc levou um bom tempo e o dia estava anoitecendo. Então ${nomePersonagem} resolveu desistir da caçada e voltar para casa.`)
        console.log(`Agora que conquistou seu novo poder de invocação ${nomePersonagem} terá de treinar ainda mais para aprimorar suas habilidades.\n`);
        
        tempo();
        
        console.log(`Chegando em casa pela noite e muito exausto pela batalha, a energia de ${nomePersonagem} estava em ${dadosPersonagem.energia}.\n É hora comer algo... `);
    
        recuperarEnergia();
    
        console.log(`Sua energia subiu para: ${dadosPersonagem.energia}`);
    
        console.log(`Depois de um dia longo ${nomePersonagem} precisa descansar.`);
    
    
    
        } else if (dadosPersonagem.ataque > orc.vida &&
            dadosPersonagem.energia != 0) {
                dadosPersonagem.energia -= 35
                console.log(
                    `Foram necessárias ${Math.ceil(
                        orc.vida / dadosPersonagem.ataque
                    )} investidas para conseguir matar o Orc. Sua energia caiu para ${dadosPersonagem.energia}. `
                );
                aumentoStatus (matarOrc);
            }
    
    } else if(caminho == `nao` || caminho == `não` || caminho == `n`){
        dadosPersonagem.energia -= 25
        console.log(`Como pegou o caminho mais longo ${nomePersonagem} acabou perdendo energia.\nEnergia atual: ${dadosPersonagem.energia}.\n`);
        console.log(`Chegando na floresta, ${nomePersonagem} realizou sua caçada sem nenhum problema e acumulou suprimentos para levar para casa.\n
                    Eis que na volta, ${nomePersonagem} ele encontra um jovem pedindo ajuda.`);
        console.log(`O jovem falou que a vila dele havia sido atacada por um dragão assustador, que estava acabando com as casas e também matando as pessoas.`);
    
        let jovem = prompt(`Deseja ajudar o jovem? `).toLowerCase();
        validacao(jovem);
    }
    
        if (jovem == `sim` || jovem == `s`){
            console.log();
            dadosPersonagem.energia -= 20
            console.log(`A vila do jovem ficava próxima a Lorência.\nChegando lá, ${nomePersonagem} avistou o dragão e de longe conseguiu constatar seus atributos:`);
            console.table(dragao);
            console.log(`Como os atributos do dragão eram muitos maiores que o de ${nomePersonagem}, ele decidiu voltar para sua vila e avisar aos moradores.`);
            console.log(`Essa viagem lhe cansou um pouco. Agora restam ${dadosPersonagem.energia} de energia. `);
            console.log(`\nAo chegar na sua vila, a mãe de ${nomePersonagem} lhe ensinou a invocar os espiritos. E assim ele fez.`);
    
            poderElemental();

        } else if(jovem == `nao` || jovem == `não` || jovem == `n`){
            
        }
    
    }
    
    tempo();
} else if (
    irTreinar == `não` ||
    irTreinar == `nao` ||
    irTreinar == `n`
) {
    console.log(`Como ${nomePersonagem} não quis treinar, decidiu sair para explorar uma caverna ao sul da vila que por más linguas vivia um golem
porém, ninguem nunca tinha visto. Como não tinha treinado, sua mãe lhe abençoou com uma proteção e lhe deu um amuleto.\n`);
  console.log(
    `No caminho do caminho ${nomePersonagem} passou pelo mar, e ficou pensando em levar suprimentos para casa.`
  );

  let suprimentos = prompt(
    `Deseja pescar algo para levar pra casa? `
  ).toLowerCase();
  validacao(suprimentos);
  if (suprimentos == `sim` || suprimentos == `s`) {
    dadosPersonagem.energia -= 15;
    console.log(
      `${nomePersonagem} conseguiu pegar alguns peixes, porém levou a tarde toda e gastou um pouco da sua energia ficando com: ${dadosPersonagem.energia}`
    );
  } else if (
    suprimentos == `nao` ||
    suprimentos == `não` ||
    suprimentos == `n`
  ) {
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
  console.log(
    `No caminho de volta pra casa ${nomePersonagem} encontra um Elfo que ficou muito elforico ao ver o amuleto que ${nomePersonagem} carregava.`
  );

  let amuleto = prompt(
    `Deseja saber mais sobre esse amuleto que você carrega? Perguntou o Elfo `
  );
  validacao(amuleto);
  if (amuleto == `sim` || amuleto == `s`) {
    console.log(
      `Esse amuleto foi forjado pelos elfos ancestrais, e colocaram nele os espiritos elementais da floresta.
Sendo eles: Fogo, Agua, Terra e Ar.`
    );
    console.log(
      `O elfo falou sobre um velho amigo que morava no pé da montanha que poderia treinar e ensinar ele mais sobre os elementos`
    );

  } else if (amuleto == `nao` || amuleto == `não` || amuleto == `n`) {
    console.log(
      `${nomePersonagem} seguiu em frente sem dar bola pro Elfo, chegando em casa para a janta.`
    );
  }
}
tempo();
tempo();







