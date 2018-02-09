function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	debugger;
	var mensaje = obtenerMensaje(mesDelAño);
	document.write(mensaje);
	



}//FIN DE LA FUNCIÓN

//Uso return por que no me interesa seguir con el procesamiento de la funcion obtenerMensaje()
//Si la funcion tuviese mas comportamiento luego del switch, deberia usar break para que entre en ese procesamiento
//El return me ahorra manejar una variable adentro de la funcion.
function obtenerMensaje(mes){
	switch(mes){
		case "Enero":
			return "Que comiences bien el año.";
		case "Marzo":
			return "A clases";
		case "Julio":
			return "Se vienen las vacaciones";
		case "Diciembre":
			return "Felices fiestas";
	}
}