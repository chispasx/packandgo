
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  document.querySelectorAll('.add-to-cart').forEach(boton => {
    boton.addEventListener('click', () => {
      const id = boton.getAttribute('data-id');
      const nombre = boton.getAttribute('data-nombre');
      const precio = parseFloat(boton.getAttribute('data-precio'));

      const itemExistente = carrito.find(item => item.id === id);
      if (itemExistente) {
        itemExistente.cantidad += 1;
      } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      alert(`${nombre} fue agregado al carrito.`);
    });
  });

