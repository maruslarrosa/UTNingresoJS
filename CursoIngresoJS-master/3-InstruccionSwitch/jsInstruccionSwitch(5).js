function Mostrar(){
//tomo la edad  
	var hora = document.getElementById('hora').value;
	alert(mostrarMensaje(hora));
}//FIN DE LA FUNCIÓN

function mostrarMensaje(hora){
	switch(hora){
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			return "Es de mañara";
		default:
			return '';
	}
}