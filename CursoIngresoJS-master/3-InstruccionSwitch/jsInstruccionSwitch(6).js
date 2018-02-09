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
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			return "Es de tarde";
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
			return "Es de noche";
		default:
			return "La hora no existe";
	}
}