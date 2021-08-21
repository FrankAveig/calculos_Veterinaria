const transformarPeso = 2.2;
const transformarFarmaco = 1000;
const respuesta = document.getElementById('resultado');
function calcular(){
  let concentracion = document.getElementById('concentracion').value;
  let concentracionV1= document.getElementById('concentracionV1').checked;
  let concentracionV2= document.getElementById('concentracionV2').checked;
  let concentracionV3= document.getElementById('concentracionV3').checked;
  let dosis = document.getElementById('dosis').value;
  let dosisV1 = document.getElementById('dosisV1').checked;
  let dosisV2 = document.getElementById('dosisV2').checked;
  let peso = document.getElementById('peso').value;
  let pesoV1 = document.getElementById('pesoV1').checked;
  let pesoV2 = document.getElementById('pesoV2').checked;

  let resultado = 0;
    if(concentracionV3){

      concentracion = concentracion * transformarFarmaco;
    }else if(concentracionV2){
      concentracion = concentracion *transformarFarmaco;
      concentracion = concentracion / 100;
    }else{
 
    }

    if(dosisV1){

      dosis = dosis / concentracion
    }else{

    }

    if(pesoV2){
      peso = peso / transformarPeso;
    }else{

    }
    
    resultado = dosis * peso;
    respuesta.innerHTML=resultado.toFixed(1) +'ml se le debe aplicar'
}