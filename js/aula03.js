let numeroSorteado = parseInt(Math.random()*6);
let numeroSorteado2 = parseInt(Math.random()*6);
console.log(`Número Sorteado = ${numeroSorteado}`);



// 1. exemplo
if(numeroSorteado % 2 === 0){

    console.log('O número é par');
    
} else {
    console.log('O número é impar');

}

// Exibir o próximo e o anterior número 
let proximoNumero = numeroSorteado +1;
let anteriorNumero = numeroSorteado -1;
console.log(`Próximo número = ${proximoNumero}`)
console.log(`Número anterior = ${anteriorNumero}`)



numeroSorteado++;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado--;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado+=10;
console.log(`Novo número = ${numeroSorteado}`);

numeroSorteado-=10;
console.log(`Novo número = ${numeroSorteado}`);

// Sortear dois números exibir o maior
console.log(numeroSorteado, numeroSorteado2);

if(numeroSorteado > numeroSorteado2){
    console.log(`Maior número = ${numeroSorteado}`);
} else if (numeroSorteado2 > numeroSorteado) {
    console.log(`Maior número = ${numeroSorteado2}`);
} else {
    console.log(`Os números são iguais`);

}

// Outro exemplo 

// let numeroSorteadoExercicio = parseInt (Math.random()*10001)

// console.log(`Valor sorteado ${numeroSorteadoExercicio}`);

// if (numeroSorteadoExercicio < 2001){
//     console.log(`Este é o rendimento de um valor até 2000 ${ numeroSorteadoExercicio * 5 / 100}`);
// }
    
// else if (numeroSorteadoExercicio < 4001){
//     console.log(`Este é o rendimento de um valor até 4000 ${ numeroSorteadoExercicio * 10 / 100}`);}

// else if (numeroSorteadoExercicio < 6001){
//     console.log(`Este é o rendimento de um valor até 6000 ${ numeroSorteadoExercicio * 15 / 100}`);}

// else if (numeroSorteadoExercicio < 8001){
//     console.log(`Este é o rendimento de um valor até 8000 ${ numeroSorteadoExercicio * 20 / 100}`);}

//  else { 
//     console.log(`Este é o rendimento de um valor acima de 8000 ${ numeroSorteadoExercicio * 25 / 100}`);}

let valor = parseInt(Math.random()*10001)
let rendimento = 0;
let valorTotal = 0;

if(valor <=2000){
 rendimento = valor *0.05
 valorTotal = valor + rendimento;
}

else if (valor <=4000){
 rendimento = valor *0.10
 valorTotal = valor + rendimento;
}

else if (valor <=6000){
 rendimento = valor *0.15
 valorTotal = valor + rendimento;
}

else if (valor <=8000){
 rendimento = valor *0.20
 valorTotal = valor + rendimento;
}
else { 
 rendimento - valor * 0.25
 valorTotal = valor + rendimento;
}

console.log(`Valor inicial = ${valor.toFixed(2)}`);
console.log(`Valor do rendimento = ${rendimento.toFixed(2)}`);
console.log(`Valor total =${valorTotal.toFixed(2)}`);
