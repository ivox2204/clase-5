   function promedioEdad(){
       numero= parseInt(prompt("ingresa el numero de participantes"))
    let suma = 0;

    for (let i = 0; i < numero; i++){
        let otronumero = parseInt(prompt('ingresa la edad de cada uno '));
        suma += otronumero;
    }
    let promedio = suma / numero 
    confirm('el promedio de edad de los participantes es : ' + promedio); 

    }
    promedioEdad()