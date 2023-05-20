$(document).ready(function() {
    // Obtener productos del almacenamiento local (carro de compras)
    var carroProductos = JSON.parse(localStorage.getItem('carroProductos')) || [];
  
    // Mostrar productos en el carro
    function mostrarProductosEnCarro() {
      $('#carro-lista').empty();
      var total = 0;
  
      carroProductos.forEach(function(producto) {
        var item = '<li class="list-group-item">' +
          '<span>' + producto.nombre + '</span>' +
          '<span class="badge badge-primary badge-pill">' + producto.cantidad + '</span>' +
          '<span class="badge badge-secondary">$' + producto.precio + '</span>' +
          '<a href="#" class="eliminar" data-nombre="' + producto.nombre + '">&#10006;</a>' +
          '</li>';
  
        $('#carro-lista').append(item);
        total += producto.precio * producto.cantidad;
      });
  
      $('#total').text('$' + total.toFixed(2));
    }
  
    // Eliminar producto del carro
    function eliminarDelCarro(nombre) {
      carroProductos = carroProductos.filter(function(producto) {
        return producto.nombre !== nombre;
      });
  
      // Guardar productos en el almacenamiento local
      localStorage.setItem('carroProductos', JSON.stringify(carroProductos));
  
      // Actualizar la vista del carro de compras
      mostrarProductosEnCarro();
    }
  
    // Evento clic en el enlace "Eliminar"
    $(document).on('click', '.eliminar', function(e) {
      e.preventDefault();
      var nombre = $(this).data('nombre');
      eliminarDelCarro(nombre);
    });
  
    // Mostrar productos en el carro al cargar la página
    mostrarProductosEnCarro();
  });
  