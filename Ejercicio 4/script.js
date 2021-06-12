alert("Este script sirve para saber que letra se le asocia a su DNI");
let dni;
let arrayLetras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
const blankSpaces = /\s/;
let posicion;

//do while para que se ejecute una vez minimamente.
do{
    dni = window.prompt("Typee su numero de DNI (0 a 99999999): ");
    if (isNaN(dni) || dni===null || dni.length==0 || blankSpaces.test(dni))
    {
        alert("Debe ser un numero de DNI valido");
        while(isNaN(dni) || dni.length==0 || blankSpaces.test(dni) || dni<0 || dni>99999999)
        {
            alert("Ingrese DNI nuevamente");
            console.error("No se ingreso un DNI valido");
            dni = window.prompt("DNI (0 a 99999999):");
        }
        posicion = dni % 23;
        document.write("Al DNI "+dni+" le corresponde la letra: "+arrayLetras[posicion]+"<br>");
    }
    else if (dni<0 || dni>99999999)
    {
        alert("El DNI tiene que ser del 0 Al 99999999");
        console.error("Se ingreso un DNI fuera de los parametros")
        while(isNaN(dni) || dni.length==0 || blankSpaces.test(dni) || dni<0 || dni>99999999)
        {
            alert("Ingrese DNI nuevamente");
            console.error("No se ingreso un numero de DNI valido");
            dni = window.prompt("DNI (0 a 99999999):");
        }
        posicion = dni % 23;
        document.write("Al DNI "+dni+" le corresponde la letra: "+arrayLetras[posicion]+"<br>");
    }
    else
    {
        posicion = dni % 23;
        document.write("Al DNI "+dni+" le corresponde la letra: "+arrayLetras[posicion]+"<br>");

    }
}while(confirm("Quiere comprobar otro DNI?"));