function Mostrar(){
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	alert(mostrarMensaje(mesDelAño));
}//FIN DE LA FUNCIÓN

function mostrarMensaje(mes){
	switch(mes){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			return "Este mes tiene 31 dias.";
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Septiembre":
		case "Noviembre"
			return "Este mes tiene 30 dias";
		case "Febrero":
			return "Este mes tiene 28 dias.";
	}
}