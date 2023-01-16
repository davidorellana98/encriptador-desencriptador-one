function encriptarTexto() {

	var frase = document.getElementById("texto-encriptado").value.toLowerCase();
	var textEncriptado = frase.replace(/e/img, "enter");
	var textEncriptado = textEncriptado.replace(/o/img, "ober");
	var textEncriptado = textEncriptado.replace(/i/img, "imes");
	var textEncriptado = textEncriptado.replace(/a/img, "ai");
	var textEncriptado = textEncriptado.replace(/u/img, "ufat");

	document.getElementById("texto-desencriptado").innerHTML = textEncriptado;
	document.getElementById("boton-copiar").style.display = "show";
	document.getElementById("boton-copiar").style.display = "inherit";

}

function desencriptarTexto() {

	var frase = document.getElementById("texto-encriptado").value.toLowerCase();
	var textEncriptado = frase.replace(/enter/img, "e");
	var textEncriptado = textEncriptado.replace(/ober/img, "o");
	var textEncriptado = textEncriptado.replace(/imes/img, "i");
	var textEncriptado = textEncriptado.replace(/ai/img, "a");
	var textEncriptado = textEncriptado.replace(/ufat/img, "u");

	document.getElementById("texto-desencriptado").innerHTML = textEncriptado;
	document.getElementById("boton-copiar").style.display = "show";
	document.getElementById("boton-copiar").style.display = "inherit";
}

function copiarTexto() {
	
	var contenido = document.querySelector("#texto-desencriptado");
	contenido.select();
	document.execCommand("copy");
}