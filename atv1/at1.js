
//** 1)      Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:**//
//**a)       Transformar todos os elementos em letras maiúsculas. **//
var regioes = function  (){
   
    var estados = ["Recife","João Pessoa","Salvador","Paraíba","Fortaleza"] 
    var convert = estados.join();
    var maisculos = convert.toUpperCase();
    return maisculos.split();
    }
    
 
 
    console.log (regioes())





//**2) Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450. **//
//**a)  Chamar a função e exibir no console o retorno da função.  **//

var pares = function (){

    var intr = []
    for ( let i = 100; i <= 450; i++){
        if (i % 2 == 0 ){
          intr.push(i)
        }
    }
  return intr
} 

console.log(pares())



//**3) Criar uma função anônima que recebe quatro strings: **//
//** a) Concatenar as strings e retornar o resultado. **//
//**b) Chamar a função e exibir no console o resultado. **//



var strings = function (txt1,txt2,txt3,txt4){
    var juntas = txt1.concat(txt2,txt3,txt4)
    return juntas 

}

console.log(strings("Eu ","To ","com ","Fome"))

   