alert("Script para sumar numeros");

let numeros = window.prompt("Primer numero");
let condicion = true;
let sumatoria = 0;
const blankSpaces = /\s/;

if(isNaN(numeros) || numeros===null || numeros.length==0 || blankSpaces.test(numeros))
{
    while(isNaN(numeros) || numeros===null || numeros.length==0 || blankSpaces.test(numeros))
    {
        alert("Debe ingresar un numero.");
        numeros = window.prompt("Numero;");
        console.log("Se solicito primer numero devuelta");
        if(Number(numeros) == numeros){
            numeros = parseInt(numeros, 10);
            sumatoria = sumatoria + numeros;
            console.log("Numero sumado");
        }
    }
}
else
{
    numeros = parseInt(numeros, 10);
    sumatoria = numeros;
    console.log("Numero sumado");
}

while(condicion)
{
    numeros = window.prompt("number");

    if(numeros===null)
    {
        condicion = false;
    }
    else if(isNaN(numeros) || numeros.length==0 || blankSpaces.test(numeros)){
        alert("Debe ingresar un numero o cancelar");
    }
    else{
        numeros = parseInt(numeros, 10);
        sumatoria = sumatoria + numeros;
        console.log("Numero sumado");
    }
}

document.write(sumatoria);