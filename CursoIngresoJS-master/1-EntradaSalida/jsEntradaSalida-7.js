/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function pedirNumeros(){
	var arrayNumeros = [];
	var numeroUno = document.getElementById("numeroUno").value;
	var numeroDos = document.getElementById("numeroDos").value;
	arrayNumeros.push(parseInt(numeroUno), parseInt(numeroDos));
	return arrayNumeros;
}

function sumar()
{	
	var numeros = pedirNumeros();
	var numerosSumados = numeros[0] + numeros[1];
	alert("La suma es " + numerosSumados);
}

function restar()
{
	var numeros = pedirNumeros();
	var numerosRestados = numeros[0] - numeros[1];
	alert("La resta es " + numerosRestados);
}

function multiplicar()
{ 
	var numeros = pedirNumeros();
	var numerosMultiplicados = numeros[0] * numeros[1];
	alert("La multiplicacion es " + numerosMultiplicados);
}

function dividir()
{
	var numeros = pedirNumeros();
	var numerosDivididos = numeros[0] / numeros[1];
	alert("La division es " + numerosDivididos);
}

