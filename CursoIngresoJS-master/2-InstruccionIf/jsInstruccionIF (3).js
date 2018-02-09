function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById("edad").value;
	var mensaje = '';

	if (edad >= 18) {
		mensaje = "Usted es mayor de edad";
	} else {
		mensaje = "Usted es menor de edad";
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN