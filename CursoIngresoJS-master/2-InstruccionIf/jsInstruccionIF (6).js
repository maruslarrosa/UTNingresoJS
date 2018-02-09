function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById("edad").value;
	var mensaje = "Usted es un adolescente";
	if (edad < 13 || edad >= 18) {
		mensaje = edad < 13 ? "Usted es un niño" : "Usted es mayor de edad";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN