function Mostrar(){
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor(Math.random() * 10) + 1 ;
	var mensaje = nota <= 4 ? "Vamos la proxima se puede" : mostrarMensajeNotaAprobada(nota);
	alert(mensaje);
}//FIN DE LA FUNCIÓN

function mostrarMensajeNotaAprobada(nota){
	if (nota >= 9 ){
		return "EXCELENTE";
	}
	return "APROBO";
}
