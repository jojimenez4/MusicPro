$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:5000/productos',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            var productos = data;

            for (var i = 0; i < productos.length; i++) {
                var producto = productos[i];
                var card = 
                    '<div class="card" style="max-width: 500px">' +
                        '<img src="' + producto.img +'" class="card-img-top" alt="' + producto.nombre_producto + '"> </img>' +
                        '<div class="card-body">' +
                            '<h5 class="card-title">' + producto.nombre_producto + '</h5>' +
                            '<p class="card-text" style="color:black"> Marca: ' + producto.marca + '</p>' +
                            '<p class="card-text" style="color:black"> Precio: ' + producto.precio + '</p>' +
                            '<a href="#" class="btn btn-primary"> Go Somewhere </a>' + 
                        '</div>' +
                    '</div>';

                $('#productos-lista').append(card);
            }
        },
        error: function() {
            console.log('Error al cargar los productos');
        }
    });
});