

let nota = window.prompt("Nota obtenida");

const blankSpaces = /\s/;


while(isNaN(nota) || nota===null || nota>=11 || nota.length==0 || blankSpaces.test(nota) || nota<=-1){
    alert("Debe ingresar un numero valido (1 al 10)");
    console.error("No se ingreso un numero valido");
    nota = window.prompt("Re-ingrese nota");
}
nota = parseInt(nota, 10);
switch(nota){
    case 0:
    case 1:
    case 2:{
        document.write("Muy deficiente");
        console.log("Su nota fue muy deficiente");
        break;
    }
    case 3:
    case 4:{
        document.write("Insuficiente");
        console.log("Su fue insuficiente");
        break;
    }
    case 5:{
        document.write("Suficiente");
        console.log("Su nota fue suficiente");
        break;
    }
    case 6:{
        document.write("Bien");
        console.log("Su nota esta bien");
        break;
    }
    case 7:
    case 8:{
        document.write("Notable");
        console.log("Su nota es notable");
        break;
    }
    case 9:
    case 10:{
        document.write("Sobresaliente");
        console.log("Su nota fue muy sobresaliente");
        break;
    }
}


