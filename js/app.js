window.addEventListener("load", function() {
	var boton = document.getElementById("convertir");
	boton.addEventListener("click", function() {
		var precio = parseFloat(document.getElementById("precio").value);
		var cantidad = parseFloat(document.getElementById("cantidad").value);
		var descuento = parseFloat(document.getElementById("descuento").value);
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>El monto a pagar  es " + total(precio,cantidad,descuento) + "</p>";
    });   
	function total(precio,cantidad,descuento) {
		var totalPagar = (precio*cantidad).toFixed(2);
			return totalPagar - (totalPagar * (descuento/100));
	}
});

//JS para Validar solo Letras
function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
        if(key == especiales[i]){
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla)==-1 && !tecla_especial){
        return false;
    }
}