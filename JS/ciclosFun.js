//Ejemplo 1 con while

let respuesta = prompt("Adivina la respuesta: Canta sin tener voz, puede volar sin tener alas, sin tener dientes muerde y sin boca habla.");

while(respuesta != "viento"){
alert("La respuesta que ingresaste es: "+ respuesta);

respuesta = prompt("Ups, no es correcto! Por favor volvé a intentar.");

}


//Ejemplo 2- Función para calcular promedio en form

 function Calcular() { 
    let notaUNO = document.getElementById('n1').value; 
    let notaDos = document.getElementById('n2').value; 
    let notaTres = document.getElementById('n3').value; 
    let promedio = (parseFloat(notaUNO) + parseFloat(notaDos) + parseFloat(notaTres)) /3; document.getElementById('promedio').innerHTML = promedio; 
    }
