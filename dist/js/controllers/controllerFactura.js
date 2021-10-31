let campo_cliente = document.getElementById('campo_cliente_factura');

campo_cliente.addEventListener("keyup", function(event) {
  
  if (event.keyCode === 13) {
        alert(event.keyCode);
    event.preventDefault();   
  }
});