function Mostrar(){
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = obtenerMensaje(mesDelAño);

alert (mensaje);

}//FIN DE LA FUNCIÓN

function obtenerMensaje(mes){
	switch(mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			return "Falta para el invierno.";
		case "Julio":
		case "Agosto":
			return "Abrigate que hace frio.";
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			return "Ya pasamos el frio. Ahora Calor!";
	}
}