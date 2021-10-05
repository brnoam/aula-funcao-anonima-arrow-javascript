//**1)  Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30: **//
//**a)  Chamar a função e exibir o resultado no console. **//

var elo = function (){
    var aprovadors = [
        {candidato: "Renata Soares",nota:7.8, idade:29 },
        {candidato: "Marcos Teixeira",nota:7.8, idade:26 },
        {candidato: "Priscila Gomes",nota:7.8, idade:30 },
        {candidato: "João Oliveira",nota:7.8, idade:27 },
        {candidato: "Adriana Telles",nota:7.8, idade:28 },
    ];

          return aprovadors
       
}

console.log (elo.match(/[28,29,30]/ig).length)









//**2)      Criar um função anônima que recebe uma string como parâmetro:**//
//**a) Repetir o valor do parâmetro 37 vezes. **//
//**b) Retornar o Resultado. **//
//** c) Chamar a função e exibir o resultado no console.  **//


var rept = function (str){
    for (let rpt = 1; rpt <= 37; rpt++){
        console.log(str);
    }
} 

console.log(rept("R6"))