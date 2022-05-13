const textoEntrada = document.querySelector(".txt-entrada");
const textoSalida = document.querySelector(".txt-salida");
document.querySelector(".btn-encriptar").onclick = function() {botonEncriptar()};
document.querySelector(".btn-desencriptar").onclick = function() {botonDesencriptar()};
document.querySelector(".btn-copiar").onclick = function() {botonCopiar()};
// encriptar.addEventListener( 'click', function() {botonEncriptar();} );

// FUNCIÓN VALIDAR ENTRADA
function validarEntrada(texto) {
  var e = true;
  var reg = /[^a-zA-Z,¡!¿?0-9 ]/g;
  if(texto <= 0) {
    alert("Ingrese algún texto antes de continuar");   
    e = false;
  } else if (!reg.test(texto)) {
    return true;
  } else {
    alert("Caracteres especiales no están permitidos");
    return false;
  }
  return e;
}

// FUNCIÓN BOTÓN ENCRIPTAR
function botonEncriptar() {
  if(validarEntrada(textoEntrada.value)) {
    const textoEncriptado = encriptar(textoEntrada.value);
      textoSalida.value = textoEncriptado; 
      textoEntrada.value = null;
      document.querySelector(".parrafo-munieco").style.display = "none";
      document.querySelector(".img-munieco").style.display = "none";
      document.querySelector(".btn-copiar").style.display = "revert";
  }
}

// FUNCIÓN ENCRIPTACIÓN
function encriptar(textoParaEncriptar) {
  let  encriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
  textoParaEncriptar = textoParaEncriptar.toLowerCase();
  for (let i= 0; i< encriptacion.length; i++){
    if(textoParaEncriptar.includes(encriptacion[i][0])){
      textoParaEncriptar = textoParaEncriptar.replaceAll(encriptacion[i][0], encriptacion[i][1])
    } 
  }
  return textoParaEncriptar;
}

// BOTÓN DESENCRIPTAR
function botonDesencriptar() {
  if(validarEntrada(textoEntrada.value)) {
    const textoDesencriptado = desencriptar(textoEntrada.value);
      textoSalida.value = textoDesencriptado; 
      textoEntrada.value = null;
      document.querySelector(".parrafo-munieco").style.display = "none";
      document.querySelector(".img-munieco").style.display = "none";
      document.querySelector(".btn-copiar").style.display = "revert";
  }
}

// FUNCIÓN DESENCRIPTACIÓN
function desencriptar(textoParaDesencriptar) {
  let  encriptacion = [["enter", "e"], ["imes", "i"], ["ai", "a"],["ober", "o"],["ufat", "u"]];
  textoParaDesencriptar = textoParaDesencriptar.toLowerCase();
  for (let i= 0; i< encriptacion.length; i++) {
      if(textoParaDesencriptar.includes(encriptacion[i][0])) {
        textoParaDesencriptar = textoParaDesencriptar.replaceAll(encriptacion[i][0], encriptacion[i][1])
      }
  }
  return textoParaDesencriptar; 
}

// BOTÓN COPIAR
const copiar = navigator.clipboard
function botonCopiar() {
  if (copiar) {
    copiar.writeText(textoSalida.value)
      .then(() => alert("Mensaje copiado"))
  }
}