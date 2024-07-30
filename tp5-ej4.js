const diasSemana =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
]
function obtenerHorario(){
    let fechaCompleta = new Date();
    let fechaIndex = document.querySelector("#fecha");
    let horaIndex = document.querySelector("#horas")
    let minutosIndex = document.querySelector("#minutos")
    let segundosIndex = document.querySelector("#segundos")
    let AmPmIndex = document.querySelector("#ampm")
    let diaNumero = fechaCompleta.getDay()
    let diaLetra = fechaCompleta.getUTCDate()
    let mes = fechaCompleta.getMonth()
    let anio = fechaCompleta.getFullYear()
    let hora = fechaCompleta.getHours()
    let minutos = fechaCompleta.getMinutes()
    let segundos = fechaCompleta.getSeconds()
    let ampm;
    if(hora <12){
        ampm="AM"
    }
    if(hora==12){
        ampm = "PM"
    }
    if(hora>12){
        ampm = "PM"
        hora -=12
    }
    if(segundos < 10){
        segundos = "0" + segundos
    }
    if(minutos < 10){
        minutos = "0" + minutos
    }
   
    fechaIndex.innerHTML = `${diasSemana[diaNumero]} ${diaLetra} de ${meses[mes]} del ${anio}`
    horaIndex.innerHTML = `${hora}`
    minutosIndex.innerHTML = `${minutos}`
    segundosIndex.innerHTML = `${segundos}`
    AmPmIndex.innerHTML=`${ampm}`
    
    console.log("hola")
}

setInterval(obtenerHorario, 1000);