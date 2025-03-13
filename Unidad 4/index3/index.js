$(document).ready(function () {
    $(".operacion").click(function () {
        // Obtener valores de los campos de entrada
        var num1 = parseFloat($(".num1").val());
        var num2 = parseFloat($(".num2").val());
        var operacion = $(this).data("op");
        var resultado;

        // Validación de entradas
        if (isNaN(num1) || isNaN(num2)) {
            $("#resultado").html("<span style='color: red;'>Por favor, ingrese números válidos.</span>");
            return;
        }

        // Realiza la operación seleccionada
        switch (operacion) {
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                if (num2 === 0) {
                    $("#resultado").html("<span style='color: red;'>No se puede dividir entre 0.</span>");
                    return;
                }
