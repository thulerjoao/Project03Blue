let prompt = require("prompt-sync")();

function validacao(x){    
  
    while( x != `sim` && x != `s` && x != `nao` && x != `não` && x != `n`){ 
        console.log(`!!! ATENÇÃO !!!`)
        x = prompt(`Responda somente com [sim] ou [não]: `).toLowerCase();   
        }
        return x;
}

  let sim = prompt(`Digite sim ou não: `)
  sim = validacao(sim);
  console.log(`Ta pegando isso: ${sim}`);