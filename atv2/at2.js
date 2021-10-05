//**  1) Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro: **//
//**  a) Se o número for múltiplo de 5, retornar "Bora". **//
//**  b) Se o número for múltiplo de 3, retornar "Dale". **//
//**  c) Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT". **//
//**  d) Chamar a função e exibir no console o resultado.  **//


var valores = (v1) => {
   
    if (v1 % 5 == 0  && v1 % 3 == 0){
        return "JavaScript"
    } else if (v1 % 5 == 0 ){
        return "Bora"
    } else if (v1 % 3 == 0 ){
        return "Dale"
    }

    }

    console.log(valores(9))




    //**2)      Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário. **//
    
    //**a)       Escrever o signo referente a data de aniversário de acordo com a tabela acima.**//
    
    //** b)      Chamar a função e exibir no console o resultado.**//
    
    var anv = (dat,mes) => {
    
        if (dat >= 21 && mes == 3 || dat <= 20 && mes == 4 ){
            return "Você é de Aries"
        } else if (dat >=21 && mes == 4 || dat <= 20 && mes == 5 ) {
            return "Você é de Touro"
        } else if (dat >= 21 && mes ==5 || dat <= 20 && mes ==6){
            return "voce é de Gêmeos"
        } else if (dat >= 21 && mes == 6 || dat <=22 && mes == 7){
            return "Você é de Câncer"
        } else if (dat >= 23 && mes ==7 || dat <= 22 && mes == 8){
            return "Você é de Leão"
         } else if (dat >= 23 && mes == 8 || dat <= 22 && mes == 9){
            return  "Você é Virgem"
         } else if (dat >=23 && mes ==9 || dat <=22 && mes ==10){
             return "Você é de Libra"
             
         } else if (dat >=23 && mes ==10 || dat <=21 && mes == 11){
             return "voce é de Escorpião"
             
      } else if (dat >=22 && mes ==11 || dat <=21 && mes == 12){
             return "voce é de Sagitário"
      } else if (dat >=22 && mes ==12 || dat <=19 && mes == 1){
          return "Você é de Capricórnio"
             
      } else if (dat >=20 && mes ==1 || dat <=18 && mes == 2){
             return "Você é de Aquário"
      } else if (dat >= 19 && mes ==2 || dat <=20 && mes ==3){
          return "Você é De Peixes"
             
      } 
   }
  
  console.log (anv(07,12))
