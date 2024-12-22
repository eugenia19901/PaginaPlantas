
let carrito = [];
let total = 0;

// Función  agregar al carrito
function agregarAlCarrito(producto) {
    
    const productoExistente = carrito.find(item => item.id === producto);
    
    if (productoExistente) {
        // Si ya existe, incrementamos la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no, lo agregamos al carrito
        carrito.push({ id: producto, cantidad: 1 });
    }
alert('Producto agregado al carrito');
    // Actualizamos el carrito 
    actualizarCarrito();
}

// eliminar un producto del carrito
function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);

    
    actualizarCarrito();
}

// actualizar la vista del carrito
function actualizarCarrito() {
    // limpieza de lista
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    total = 0;

    // mostrar los productos
    carrito.forEach(item => {
        const li = document.createElement('li');
        const nombreProducto = obtenerNombreProducto(item.id);
        const precioProducto = obtenerPrecioProducto(item.id);
        const precioTotalProducto = precioProducto * item.cantidad;
        total += precioTotalProducto;

        // Añadimos el contenido al item del carrito
        li.innerHTML = `
            <span>${nombreProducto} - $${precioProducto} x ${item.cantidad}</span>
            <span>$${precioTotalProducto}</span>
            <button onclick="eliminarDelCarrito('${item.id}')">Eliminar</button>
        `;

        listaCarrito.appendChild(li);
    });

    document.getElementById('total').textContent = total;
}

function obtenerNombreProducto(productoId) {
    const productos = {
        'curso-fitomedicina': 'Curso Fitomedicina',
        'curso-cannabis-medicinal': 'Curso Cannabis Medicinal',
        'curso-medicina-indigena-americana': 'Curso Medicina Indígena Americana',
        'curso-hongos-medicinales': 'Curso Hongos Medicinales'
    };
    
    return productos[productoId] || 'Producto desconocido';
}

function obtenerPrecioProducto(productoId) {
    const precios = {
        'curso-fitomedicina': 10000,
        'curso-cannabis-medicinal': 12000,
        'curso-medicina-indigena-americana': 9000,
        'curso-hongos-medicinales': 11000
    };
    
    return precios[productoId] || 0;
}


function realizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega productos antes de comprar.');
        return;
    }

    alert('¡Gracias por tu compra!');

    carrito = [];

    // Actualizar carrito
    actualizarCarrito();
}


function mostrarCorreo() {
    const email = document.getElementById('email').value;
  
    // Validación correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      alert('Este mail no es válido, reintenta por favor');
      return;
    }
  
    // mensaje de exito
    alert('¡Gracias por tu mensaje!');
  }