var tabla = [

];

window.onload = cargarEventos;

/**Metodos de carga de informacion y envio de datos */
function cargarEventos() {
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("nuevo-registro").addEventListener("submit", nuevoRegistro, false);
}


/** Metodo para mostrar los datos ingresados en el arreglo JSON "Nombre, Apellido y Telefono"
 * Se usa un ciclo for para recorrer el arreglo las veces que 
 * sean necesarias acorde a la cantidad de datos almacenados en el mismo
 * liego con innerHTML se escribe dentro del elemento html los datos almacenados en el arreglo
 */
function mostrarTabla() {

    var cuerpoTabla = document.getElementById("registros-tabla");
    var tablaLlena = " ";

    for (var i = 0; i < tabla.length; i++) {

        tablaLlena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].apellido + "</td><td>" + tabla[i].telefono + "</td></tr>";
    }

    cuerpoTabla.innerHTML = tablaLlena;
}

/** Con el metodo "nuevoRegistro" se realiza la gestion de nuevos registros como propiamente
 *  lo dice su nombre trayendo los id de los campos disponibles para llenar con un push y
 *  posteriormente llenando la tabla "arreglo" */

function nuevoRegistro() {
    event.preventDefault();

    var nombreUsuario =document.getElementById("nombre").value;
    var apellidoUsuario =document.getElementById("apellido").value;
    var telefonoUsuario =document.getElementById("telefono").value;

/**Validacion telefonica: solo se permiten telefonos de tipo int, en caso contrario al tener 
 * alguna letra no se permitira el registro en el arreglo y se mostrara al usuario una alerta*/

    var num = document.getElementById("telefono").value;
    if(isNaN(num)){
        alert("Error-1: "+"El numero"+" "+num+" "+ "es erroneo, verifique sus datos y vuelva a intentarlo de nuevo.");
        document.getElementById("telefono").value;
        }else{
    var nuevoRegistro = { nombre:nombreUsuario, apellido: apellidoUsuario , telefono: telefonoUsuario}
    tabla.push(nuevoRegistro);
}


}