let prompt = require("prompt-sync")();

// PRINCIPAIS VARIAVEIS E OBJETOs DOs STATUS DOS PERSONAGENS DA HISTORIA

let nomePersonagem;
let idadePersonagem;
let elementoEscolhido;
let jovem;
let irTreinar;

nomePersonagem = prompt(`Digite o nome do personagem da história: `);
    while(!isNaN(nomePersonagem)) {
        console.log(`!!!ATENÇÃO!!!`);
        nomePersonagem=prompt(`Digite um nome válido para seu personagem: `);
        console.clear();
    }

idadePersonagem = prompt(`Digite a idade do seu personagem: `);
    while(isNaN(idadePersonagem)) {
        console.log(`!!!ATENÇÃO!!!`);
        idadePersonagem=prompt(`Digite valor correto para idade: `);
        console.clear();
}

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
        console.clear();
        console.log(
            `\nCom a ação que acabou de tomar, seus status mudaram.\nConfira:`)
            console.table(dadosPersonagem);
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
            `\nDeixando de treinar, sua vida diminiu para ${dadosPersonagem.vida} e o ataque para ${dadosPersonagem.ataque}.\n`
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
        console.log(`${nomePersonagem}, sou um espirito elementar da natureza, e venho em missão de lhe conceder algum dos seguintes elementos: ${elementos} `)
      elementoEscolhido = prompt(
        `Qual destes voce escolhe? `
      ).toLowerCase();
    } while (!elementos.includes(elementoEscolhido));
    console.clear();
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
      console.clear();
}

//ARROW FUNCTION PARA VALIDAÇÃO DA RESPOSTA DO USUARIO

validacao = (x) => {    
    let y = '';
    while (x != `sim` && x != `s` && x != `nao` && x != `não` && x != `n`) {
        console.log(`!!! ATENÇÃO !!!`)
      x = prompt(`Responda somente com "sim" ou "não": `).toLowerCase();
      y = x;
    }
    return y;
  };
  

///////////////// **************************************************** ///////////////////////
//EFEITO DE CARREGANDO PERSONAGEM
console.clear();
console.log(`Criando seu personagem: `);
tempo();
console.log(`.`);
tempo();
console.clear();
console.log(`Criando seu personagem: `);
console.log(`. .`);
tempo();
console.clear();
console.log(`Criando seu personagem: `);
console.log(`. . .`);
tempo();
console.clear();

console.log(
    `Seu personagem foi criado. Confira:
    `);
console.table(dadosPersonagem);
tempo();
tempo();
tempo();


//INICIO DA HISTORIA, JOGO E AS INTERAÇÕES COM O USUARIO.

console.log(
    `\nEm um reino distante chamado Albion Flame, havia uma cidade que era muito abençoada, com terra fértil, água fresca, e muita mata.
Esta cidade era Lorência, e nela vivia ${nomePersonagem}, um jovem aspirante a cavaleiro que era muito orgulhoso e talentoso por sinal.`
);

console.log(
    `\nTodo dia pela manhã, ${nomePersonagem} acorda para treinar esgrima com seu professor.\nNo entato, por algum motivo andava um pouco desmotivado .\n`
);

// ONDE O PERSONAGEM VAI TOMAR O PRIMEIRO RUMO DA HISTORIA
// console.log(`O sol raiou e está na hora de ir para o treino.\n`)
// irTreinar = prompt(`${nomePersonagem}, deseja ir treinar hoje? `).toLowerCase();
// console.log(irTreinar);
// irTreinar = validacao(irTreinar);
// console.clear();
// console.log(irTreinar);
// aumentoStatus(irTreinar);
// tempo();
// diminuirStatus(irTreinar);
// tempo();

irTreinar = prompt(`Será que vou treinar hoje? `).toLowerCase();
  tempo();
  dadosPersonagem.aumentoStatus(irTreinar);
  dadosPersonagem.diminuirStatus(irTreinar);
  validacao(irTreinar);
  tempo();


if (
    irTreinar == `sim` ||
    irTreinar == `s`

    ) { console.log(`Entrou aqui`);
        while (
            irTreinar == `sim` ||
            irTreinar == `s`
            ){
    irTreinar = prompt(
        `Você pode continuar treinando se quiser, no entanto sua energia irá diminuir cada vez mais. Deseja continuar? `
    ).toLowerCase();
    irTreinar = validacao(irTreinar);
    aumentoStatus(irTreinar);
    tempo();
    
            }
        console.log(
        `Após o treino, ${nomePersonagem} volou para casa pois precisava ajudar sua família.\n`
    );
    console.log(`Seu pai Thors já está com idade avançada e tem dificuldades em realizar as tarefas no pasto.`);
    let ajudarPasto = prompt(
        `Deseja ajudar seu pai? `
    ).toLowerCase();
    ajudarPasto = validacao(ajudarPasto)
    
    if (ajudarPasto == `s` || ajudarPasto == `sim`) {
        dadosPersonagem.energia -= 5
        console.log(
            `\nSua família tem muitos animais e ajudar seu pai não foi uma tarefa muito fácil. Você acabou ficando um pouco cansado.\nIstou diminuiu sua energia para ${dadosPersonagem.energia
            }`
        );
        tempo();
    
        // CONDIÇÃO PARA LUTA DO PERSONAGEM
        console.log(`\nTrabalho concluído... é hora de voltar para casa.`);
        console.log(`\nEnquanto arrumava suas coisas, ${nomePersonagem} avistou umas de suas ovelhas do rebanho sendo atacada por um lobo.\n${nomePersonagem} pegou sua espada e correu para ajuda-lá.`);
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
                )} investidas para conseguir matar o lobo. A ovelha foi salva!`//INVESTIDAS???????
            );
            aumentoStatus (matarLobo);
        } else {
            console.log(
                `\nVocê não estava forte o suficiente para enfrentar ovelha, e o lobo acabou a matando.`
            );
        }
    } else {
        console.clear();
        console.log(`Realmente ${nomePersonagem} não estava em um bom dia...\nNão ajudar no pasto pode poupar energias para uma futura ocasião.`);
    }
    
    //CONDIÇÃO PARA AUMENTO DA ENERGIA DO PERSONAGEM.
    console.log(`\nA manhã se foi e é hora de almoçar para repor suas energias que estão em '${dadosPersonagem.energia}'.\n${nomePersonagem} precisa escolher o cardápio.\n`);
        
    recuperarEnergia ();
    console.clear();

    console.log(`\nApós a refeição, a energia de ${dadosPersonagem.nome} aumentou para: ${dadosPersonagem.energia}.\n`);
    tempo();
    console.log(`Como era de costume, toda tarde ${nomePersonagem} saia para caçar em uma floresta ao sul de Lorência. 
    Porém, naquela tarde em especial ele sentiu algo diferente, semelhante de quando acordou. Se sentia um pouco mais forte e rápido. Então se despediu 
    de seu pai e ao se despedir de sua mãe, ela entregou a ele um amuleto para protege-lo durante a caçada. \n`);
    
    tempo();
    
    //VALIDAÇÃO E CONDIÇÃO DEPENDENDO DO CAMINHO DO CAMINHO QUE O PERSONAGEM TOMAR. 

    console.log(`A floresta fica muito distante de sua casa, e você deve decidir entre pegar um atalho ou permanecer no caminho padrão.`)
    let caminho = prompt(`Deseja pegar um atalho? [OBS] O atalho é mais rápido, porém não tão seguro: `).toLowerCase();
    caminho = validacao(caminho);
    console.clear();

    if (caminho == `sim` || caminho == `s`){
        dadosPersonagem.energia -= 10
        console.log(`\nMesmo pegando um atalho, o trajeto foi difícil e ${nomePersonagem} perdeu '10' de energia.`);
        console.log(`Seu novo valor de energia é '${dadosPersonagem.energia}'`);  
        console.log(`Enquanto passava pelo atalho, ${nomePersonagem} avistou de longe um Orc.\nChegando perto, o monstro o cercou. Impedindo ${nomePersonagem} de passar adiante ou recuar.`)
        console.log(`Então, ${nomePersonagem} manteve uma distância segura e constatou os dados do Orc: `)
        console.table(orc);
        console.log(`\nComo não havia escapatória, a única opção de ${nomePersonagem} foi enfrentar o monstro. `);
    
        if( 
            dadosPersonagem.ataque < orc.vida &&
            dadosPersonagem.energia != 0
        ) {
            console.lo
            console.log(`O Orc, que é muito superior em todos os atributos, começou a dar uma sequencia de golpes.\n${nomePersonagem} não vai conseguir derrota-lo assim...\n`);
            tempo();
            console.log(`...até que quase sem forças, ${nomePersonagem} vê um brilho saindo de seu amuleto e uma voz que vinha de dentro do seu peito.\n`)
            console.log(`De repente, aparece um espirito elementar em sua frente e ele diz as seguintes palavras: \n`)
            tempo();
            tempo();
    
            poderElemental();
        
        tempo();
        
        dadosPersonagem.energia -= 35
        console.log(`\nAgora com seu novo poder ${nomePersonagem} precisou de ${Math.ceil(
            orc.vida / dadosPersonagem.ataque
        )} investidas para eliminar e passar pelo Orc. E sua energia caiu para ${dadosPersonagem.energia}`);
        
        tempo();
    
        console.log(`\nDerrotar o Orc levou um bom tempo e o dia estava anoitecendo. Então ${nomePersonagem} resolveu desistir da caçada e voltar para casa.`)
        console.log(`Agora que conquistou seu novo poder de invocação, ${nomePersonagem} terá de treinar ainda mais para aprimorar suas habilidades.\n`);
        
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
        console.log(`Chegando na floresta, ${nomePersonagem} realizou sua caçada sem nenhum problema e acumulou suprimentos para levar para casa.\nEis que na volta, ${nomePersonagem} encontra um jovem pedindo ajuda.`);
        console.log(`O jovem falou que a vila dele havia sido atacada por um dragão assustador, que estava acabando com as casas e também matando as pessoas.`);
    
        jovem = prompt(`Deseja ajudar o jovem? `).toLowerCase();
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
    tempo();
}else{ //ELSE REFERENTE A RESOLVER NÃO IR TREINAR
    console.log(`Como ${nomePersonagem} não quis treinar, ele decidiu sair para explorar uma caverna ao sul da vila.`);
    console.log(`Por más línguas, lá vivia um Golem. Porém ninguém nunca havia o visto.`)
    console.log(`Por não ter treinado, antes que saísse de casa sua mãe lhe abençoou com uma proteção e lhe deu um amuleto.\n`);
  console.log(
    `Durante o caminho, ${nomePersonagem} passou pelo mar e ficou pensando em levar alguns suprimentos para casa.`
  );

  let suprimentos = prompt(
    `Deseja pescar algo para levar pra casa? `
  ).toLowerCase();
    suprimentos = validacao(suprimentos);
    console.clear();

  if (suprimentos == `sim` || suprimentos == `s`) {
    dadosPersonagem.energia -= 15;
    console.log(
      `\n${nomePersonagem} é um ótimo pescador e conseguiu pegar alguns peixes.\nPorém isso levou a tarde toda e consumiu um pouco da sua energia, ficando com: ${dadosPersonagem.energia}`
    );
    console.log(`\nEntão, ${nomePersonagem} guarda os suprimentos e segue seu caminho.\n`)
  } else {
    console.log(`\n${nomePersonagem} decidiu seguir seu caminho e não se preocupar com suprimentos no momento.\n`); 
  }
  console.log(
    `Chegando a caverna ${nomePersonagem} ficou apreensivo, pois não sabia o que havia dentro. Mesmo assim, ele decidiu entrar.`
  );
  console.log(
    `Assim que entrou, ${nomePersonagem} percebeu um barulho enstranho e foi caminhando devagar em direção a ele.\nEis que avistou o tal Golem, que possuia os seguintes atributos: `
  );
  console.table(golem);
  console.log(`\nComo o Golem era muito forte, ${nomePersonagem} prefiriu não enfrenta-lo no momento e ir para casa.`)
  console.log(
    `\nNo caminho de volta, ${nomePersonagem} encontrou um Elfo que ficou muito eufórico ao ver o amuleto que ele carregava.`
  );

  let amuleto = prompt(
    `Deseja saber mais sobre esse amuleto que carrega? Perguntou o Elfo. `
  ).toLowerCase();
  amuleto = validacao(amuleto);
  console.clear();

  if (amuleto == `sim` || amuleto == `s`) {
    console.log(
      `\nEntão o Elfo disse:\n\nEsse amuleto foi forjado pelos elfos ancestrais, que colocaram nele os espiritos elementais da floresta.
Sendo eles: Fogo, Agua, Terra e Ar.`
    );
    console.log(
      `O elfo contou também, a respeito de um velho amigo que morava no pé da montanha, que poderia treinar e ensinar ${nomePersonagem} mais sobre os elementos`
    );

  } else {
    console.log(
      `${nomePersonagem} seguiu em frente sem dar bola pro Elfo, chegando em casa para a janta.`
    );
  }
}
tempo();
tempo();







