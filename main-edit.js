const myModule = (() =>{
  'use strict'
  const ValorIMC = document.getElementById('result1');
  const classPeso = document.getElementById('result2');
  const riesgoEnf = document.getElementById('result3');

  const calcularIMC = (peso,altura) =>{
      const alturaMetros = altura / 100;// convertir de altura cm a metros
      const IMC = peso / (alturaMetros * alturaMetros);//proceso....
      return IMC;//retorno del resultado
  }
  function calculatImc(){
      //creamos una variable y seleccionamos el elemento de html
      let peso = document.getElementById('inputSide2'); 
      let altura = document.getElementById('inputSide1');
    //aqui obtenemos su valor ya convertido
      peso = parseFloat(peso.value);  
      altura = parseFloat(altura.value);
      const imc = calcularIMC(peso, altura);//una variable para guardar los valores ingresado a la funcion
      const result = imc.toFixed(2);//mostrar
      ValorIMC.innerText = result;
      if (imc <= 18){
        ValorIMC.style.color = "blue";
        classPeso.innerText = 'Bajo Peso';
        riesgoEnf.innerText = 'Aumento de riesgo';
      } else if(imc > 18 && imc < 26){
        ValorIMC.style.color = "green";
        classPeso.innerText = 'Peso Normal';
        riesgoEnf.innerText = 'Riesgo Bajo';
      } else if(imc > 25 && imc < 31){
        ValorIMC.style.color = "yellow";
        classPeso.innerText = 'Exceso de peso';
        riesgoEnf.innerText = 'Aumento del riesgo';
      } else if(imc > 30 && imc < 36){
        ValorIMC.style.color = "orange";
        classPeso.innerText = 'Obesidad grado I';
        riesgoEnf.innerText = 'Riesgo moderado'; 
      } else if(imc > 35 && imc < 41){
        ValorIMC.style.color = "brown";
        classPeso.innerText = 'Obesidad grado II';
        riesgoEnf.innerText = 'Riesgo severo'; 
      } else if(imc > 40 && imc < 100){
        ValorIMC.style.color = "red";
        classPeso.innerText = 'Obesidad grado III';
        riesgoEnf.innerText = 'Riesgo muy severo';
      }
    
  }
    return{
      CIMC : calculatImc,
  }
})();
