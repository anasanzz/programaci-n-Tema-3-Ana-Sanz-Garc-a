function Factorial() {
    let resultado = 1;
    let numero = parseInt(document.getElementById("caja").value);
    for (let interacion = 1; interacion<= numero; interacion++){
      resultado = resultado * interacion
    }
    document.getElementById("resultado").innerHTML = "El factorial de " + numero + "es " + resultado
    }