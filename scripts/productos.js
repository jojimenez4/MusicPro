var dailyIndicators = '';
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
let CLPeso = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'CLP',
});

$(document).ready(function () {
    $.ajax({
        url: 'http://localhost:5000/productos',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var productos = data;

            for (var i = 0; i < productos.length; i++) {
                var producto = productos[i];
                var card =
                    '<div class="card" style="max-width: 500px">' +
                    '<img src="' + producto.img + '" class="card-img-top" alt="' + producto.nombre_producto + '"> </img>' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + producto.nombre_producto + '</h5>' +
                    '<p class="card-text" style="color:black"> Marca: ' + producto.marca + '</p>' +
                    '<p class="card-text myDIV" style="color:black"> Precio: $' + CLPeso.format(producto.precio) + '</p>' +
                    '<p class="card-text myDIV" style="color:black"> Precio: ' + USDollar.format(Math.trunc(producto.precio / dailyIndicators.dolar_intercambio.valor)) + ' USD</p>' +
                    '<button class="agregar-carro btn btn-primary" data-nombre="' + producto.nombre_producto + '" data-precio="' + producto.precio + '">Agregar al Carro</button>' +
                    '</div>' +
                    '</div>';

                $('#productos-lista').append(card);

                
            }
        },
        error: function () {
            console.log('Error al cargar los productos');
        }
    });

    // Función para agregar un producto al carro de compras
    function agregarAlCarro(nombre, precio) {
        var carroProductos = JSON.parse(localStorage.getItem('carroProductos')) || [];

        var productoExistente = carroProductos.find(function (producto) {
            return producto.nombre === nombre;
        });

        if (productoExistente) {
            productoExistente.cantidad++;
        } else {
            var nuevoProducto = {
                nombre: nombre,
                precio: precio,
                cantidad: 1
            };
            carroProductos.push(nuevoProducto);
        }

        localStorage.setItem('carroProductos', JSON.stringify(carroProductos));
        alert('El producto se agregó al carro de compras.');
    }

    // Evento clic en el botón "Agregar al Carro"
    $(document).on('click', '.agregar-carro', function (e) {
        e.preventDefault();
        var nombre = $(this).data('nombre');
        var precio = $(this).data('precio');
        agregarAlCarro(nombre, precio);
    });
});

$.getJSON('https://mindicador.cl/api', function (data) {
    dailyIndicators = data;
    $("<option>", {
        html: 'D贸lar: ' + dailyIndicators.dolar_intercambio.valor
    }).appendTo("select");
});