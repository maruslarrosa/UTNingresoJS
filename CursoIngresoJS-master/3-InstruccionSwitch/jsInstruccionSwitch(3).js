function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
alert(mostrarMensaje(mesDelAño));
//alert (mesDelAño);
}//FIN DE LA FUNCIÓN

function mostrarMensaje(mes){
	switch(mes){
		case "Febrero":
			return "Este mes no tiene mas de 29 dias";
		default:
			return "Este mes tiene 30 o mas dias";
	}
}