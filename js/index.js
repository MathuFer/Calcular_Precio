// var cantidad = 0;

// function sumar(){
//     cantidad += 1;
//     actualizar();
//     calculartotal();
// }

// function restar(){
//     cantidad -= 1;
//     actualizar();
//     calculartotal();
// }

// function actualizar() {
//     document.getElementById("cantidad").textContent = cantidad;
// }

// var precio = 400000
// precioSpan = document.querySelector(".precio-inicial");
// precioSpan.innerHTML = formatNumber(precio)

// function calculartotal(){
//     var total = cantidad * precio;
//     document.getElementById("valor-total").textContent = formatNumber(total);
// }

// function formatNumber(number) {
//     return new Intl.NumberFormat('es-CL').format(number);
// }

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