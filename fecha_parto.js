const diasGestacionPerro1 = 58;
const diasGestacionPerro2 = 10;
const diasGestacionGatos1 = 63;
const diasGestacionGatos2 = 7;

function sumarDias( fecha, dias){
  fecha.setDate(fecha.getDate()+dias);
  return fecha;
}

function fechaDeParto(){
  const meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre");
  const fechaInput = document.getElementById("fecha");
  const especie = document.getElementById("especie");
  const especieValue = especie.options[especie.selectedIndex].text;
  const valueFecha = fechaInput.value;
  const dateParts = valueFecha.split("-");
  const fechaObjeto = new Date(dateParts);


  if(especieValue == "Canino"){ 
    
    let diaParto = sumarDias(fechaObjeto,diasGestacionPerro1);
    const resultado = document.getElementById("resultado2");
    resultado.innerText = 'La fecha posible de parto es entre el '+ diaParto.getDate()+" de "+ meses[diaParto.getMonth()] + " del "+ diaParto.getFullYear()
    diaParto = sumarDias(fechaObjeto,diasGestacionPerro2);
    let agg = document.createTextNode(' y el ' + diaParto.getDate()+" de "+ meses[diaParto.getMonth()] + " del "+ diaParto.getFullYear())
    resultado.appendChild(agg)
  }else{
    
    let diaParto = sumarDias(fechaObjeto,diasGestacionGatos1);
    const resultado = document.getElementById("resultado2");
    resultado.innerText = 'La fecha posible de parto es entre el '+ diaParto.getDate()+" de "+ meses[diaParto.getMonth()] + " del "+ diaParto.getFullYear()
    diaParto = sumarDias(fechaObjeto,diasGestacionGatos2);
    let agg = document.createTextNode(' y el ' + diaParto.getDate()+" de "+ meses[diaParto.getMonth()] + " del "+ diaParto.getFullYear())
    resultado.appendChild(agg)
  }
  

}
