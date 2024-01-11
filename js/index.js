var precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = formatNumber(precio)

var cantidad = 0

function sumar() {
    cantidad += 1;
    actualizarCantidad();
    calcularTotal();
}

function restar() {
    if (cantidad > 0) {
        cantidad -= 1;
        actualizarCantidad();
        calcularTotal();
    }
}

function actualizarCantidad() {
    document.querySelector('#cantidad').innerHTML = cantidad;
}

function calcularTotal() {
    var total = cantidad * precio;
    document.querySelector('#valor-total').innerHTML = formatNumber(total);
}

function formatNumber(number) {
    return new Intl.NumberFormat('es-CL').format(number);
}
