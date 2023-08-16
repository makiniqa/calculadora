let submit = document.getElementById('boton').onclick = function() {
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;
    let op = document.getElementById('operacion').value;
    let resultado;
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    
    if (op == "mas") {
        if (isNaN(numero1) == true || isNaN(numero2) == true) {
            resultado = "Alguno de los valores ingresados no es un número"
        } else {
            resultado = Number(numero1) + Number(numero2);
        };
    } else if (op == "menos") {
        console.log(numero1);
        if (isNaN(numero1) == true || isNaN(numero2) == true) {
            resultado = "Alguno de los valores ingresados no es un número"
        } else {
            resultado = numero1 - numero2;
        };
    } else if (op == "producto") {
        if (isNaN(numero1) == true || isNaN(numero2) == true) {
            resultado = "Alguno de los valores ingresados no es un número"
        } else {
            resultado = Number(numero1) * Number(numero2);
        };
    } else if (op == "division") {
        if (isNaN(numero1) == true || isNaN(numero2) == true) {
            resultado = "Alguno de los valores ingresados no es un número"
        } else {
            if (Number(numero2) != 0) {
                resultado = Number(numero1) / Number(numero2);
            } else {
                resultado = "No se divide por cero <3"
            };
        };
    };
    
    let franja_resultado = document.getElementById("resultado");
    franja_resultado.innerHTML = '<p class="texto-resultado">' + resultado + '</p>';
};

