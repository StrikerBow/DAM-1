let pyramid = window.prompt("En que numero deberia empezar la piramide invertida?");
const blankSpaces = /\s/;

while(isNaN(pyramid) || pyramid===null || pyramid.length==0 || blankSpaces.test(pyramid) || pyramid<=0){
    console.error("No se ingreso un numero valido");
    alert("Debe ingresar un numero");
    pyramid = window.prompt("Re-ingrese numero");
}

for(i = pyramid; i>=1 ;i--){

    for(let x = 0; x < i; x++){

        document.write(i);        
    }
    document.write("<br>");
}