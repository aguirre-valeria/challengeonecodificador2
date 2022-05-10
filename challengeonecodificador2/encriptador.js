const textoEntrada = document.querySelector(".txt-entrada");
const textoSalida = document.querySelector(".txt-salida");
document.querySelector(".btn-encriptar").onclick = function() {botonEncriptar()};
document.querySelector(".btn-desencriptar").onclick = function() {botonDesencriptar()};
document.querySelector(".btn-copiar").onclick = function() {botonCopiar()};
// encriptar.addEventListener( 'click', function() {botonEncriptar();} );


// FUNCIÓN VALIDACIÓN
function esValido(c) {
  c = c.charCodeAt(0);
  return (c >= 97 && c <= 122) || (c == 32); // [a-z ]
}

function validarEntrada(cadena) {
  for (var i = 0; i < cadena.length; i++) {
    if (!esValido(cadena[i])) {
      break;
    }
  }
  return i == cadena.length;
}
// BOTÓN ENCRIPTAR
function botonEncriptar() {
    const textoEncriptado = encriptar(textoEntrada.value);
    textoSalida.value = textoEncriptado;
}

function encriptar(textoParaEncriptar){
  let  encriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]]
  textoParaEncriptar = textoParaEncriptar.toLowerCase();
  for (let i= 0; i< encriptacion.length; i++){
    if(validarEntrada(encriptacion[i])){
      alert("Solo ingresar mun");
      return;  
    } else if(textoParaEncriptar.includes(encriptacion[i][0])){
      textoParaEncriptar = textoParaEncriptar.replaceAll(encriptacion[i][0],
        encriptacion[i][1])
    } return textoParaEncriptar;
  }
   
}

// BOTÓN DESENCRIPTAR
function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textoEntrada.value);
    textoSalida.value = textoDesencriptado;
}

function desencriptar(textoParaDesencriptar){
  let  encriptacion = [["enter", "e"], ["imes", "i"], ["ai", "a"],["ober", "o"],["ufat", "u"]]
  textoParaDesencriptar = textoParaDesencriptar.toLowerCase();
  for (let i= 0; i< encriptacion.length; i++){
      if(textoParaDesencriptar.includes(encriptacion[i][0])){
        textoParaDesencriptar = textoParaDesencriptar.replaceAll(encriptacion[i][0],
          encriptacion[i][1])
      }
  }
  return textoParaDesencriptar; 
}

// BOTÓN COPIAR
const copiar = navigator.clipboard
function botonCopiar() {
  if (copiar) {
    copiar.writeText(textoSalida.value)
      .then(() => alert('copiado'))
  }
}


/* // VALIDAR ENTRADA
function esValido(c) {
    c = c.charCodeAt(0);
    return (c >= 97 && c <= 122) || (c == 32); // [a-z ]
  }
  

  function validarEntrada(cadena) {
    for (var i = 0; i < cadena.length; i++) {
      if (!esValido(cadena[i])) {
        break;
      }
    }
    return i == cadena.length;
  } */

  /* function textoInvalido(evento) {
    let textoEntrada = cadena;
    const cadena = evento.cadena;
    
    for(var i = 0; i < cadena.length; i++) {
        if (i < 97 || i > 122 || i == 32) {
            evento.preventDefault();
            alert("Solo letras minúsculas y sin acentos." + "\n"
                + "codigo: " + codigo + "\n");
                break;
        }
    }
} */

/*       if (codigo != 0) {
        if (codigo < 97 || codigo > 122 || codigo == 32) {
          evento.preventDefault();
          alert("Solo letras minúsculas y sin acentos." + "\n"
                + "codigo: " + codigo + "\n"
          );
        }
      }
    }

function textoInvalido(evento) {
    const codigo = evento.codigo;
    
    }
      if (codigo != 0) {
        if (codigo < 97 || codigo > 122 || codigo == 32) {
          evento.preventDefault();
          alert("Solo letras minúsculas y sin acentos." + "\n"
                + "codigo: " + codigo + "\n"
          );
        }
      }
    }
 */