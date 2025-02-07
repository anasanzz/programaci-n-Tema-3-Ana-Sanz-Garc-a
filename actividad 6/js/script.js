function Comprobar() {
    let paroimpar;
    paroimpar = parseInt(document.getElementById("caja").value);

    //El if se ejecuta si el resto del número sí es 0
    if (paroimpar % 2 == 0) {
      document.getElementById("resultado").innerHTML = "El número es par"
    }

    //El else solo se ejecuta si el resto del número no es 0
    else{
        document.getElementById("resultado").innerHTML = "El número es impar"
    }
}
