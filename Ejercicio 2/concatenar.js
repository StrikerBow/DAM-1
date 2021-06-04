const separador = '-';
const blankSpaces = /\s/;
let cadena = window.prompt("ingresar texto yep");
let beststringever;
let condicion = true;

function trimIt(){
    if(cadena!=null){
        cadena = cadena.trim();
        console.log(cadena);
    }
}

trimIt();

while(cadena===null || cadena.length==0){
    alert("No puede no escribir un valor la primera vez, dejarlo en blanco o usar espacios");
    cadena = window.prompt("Ingrese su texto :D");
    console.log("String guardado");
    trimIt();
}
beststringever = cadena;
while(condicion)
{
    cadena = window.prompt("Ingrese su texto :D");
    trimIt();
    if(cadena===null)
    {
        condicion = false;
    }
    else if(cadena.length!=0){
        beststringever = beststringever + separador + cadena;
        console.log("String guardado");
    }
}
document.write(beststringever);