
 mostrarProductos();
 mostrarClientes();
 mostrarEmpleado();
function  mostrarProductos() {
    var body = JSON.stringify({op: 'todos'});

    const init = {method: 'POST', body: body};
    fetch("../factura/dist/model/Producto.php", init)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data['vali']);
                var tabla = "";
                let datos = data['productos'];
                if (data['vali']) {
                    for (var i = 0, max = datos.length; i < max; i++) {
                        let valores = datos[i];
                       
                      tabla= tabla+"<tr>\n\
                                <td>"+(i+1)+"</td>\n\
                                <td>"+valores[0]+"</td>\n\
                                <td>"+valores[1]+"</td>\n\
                                <td>"+valores[2]+"</td>\n\
                                <td>"+valores[3]+"</td>\n\
                                <td>\n\
                                    <button class='btn btn-info py-0 px-2' onclick='actualizar("+valores[0]+",1)' ><b>i</b></button>\n\
                                    <button class='btn btn-danger py-0 px-2' onclick='eliminar("+valores[0]+",1)' > <b>X</b> </button>\n\
                                </td>\n\
                            </tr>";
                    }
                 document.getElementById('contentProducto').innerHTML = tabla;

                } else {
                    document.getElementById('alertTablas').innerHTML = "Error en la app";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablasError').style = "display:none";
                    }, 3000);
                }

            });
}

function  mostrarClientes() {
    var body = JSON.stringify({op: 'todos'});

    const init = {method: 'POST', body: body};
    fetch("../factura/dist/model/Cliente.php", init)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data['vali']);
                var tabla = "";
                let datos = data['clientes'];
                if (data['vali']) {
                    for (var i = 0, max = datos.length; i < max; i++) {
                        let valores = datos[i];
                       
                      tabla= tabla+"<tr>\n\
                                <td>"+(i+1)+"</td>\n\
                                <td>"+valores[0]+"</td>\n\
                                <td>"+valores[1]+"</td>\n\
                                <td>"+valores[2]+"</td>\n\
                                <td>"+valores[3]+"</td>\n\
                                <td>\n\
                                    <button class='btn btn-info py-0 px-2' onclick='actualizar("+valores[0]+",2)' ><b>i</b></button>\n\
                                    <button class='btn btn-danger py-0 px-2' onclick='eliminar("+valores[0]+",2)' > <b>X</b> </button>\n\
                                </td>\n\
                            </tr>";
                    }
                 document.getElementById('contentCliente').innerHTML = tabla;

                } else {
                    document.getElementById('alertTablas').innerHTML = "Error en la app";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablasError').style = "display:none";
                    }, 3000);
                }

            });
}

function  mostrarEmpleado() {
    var body = JSON.stringify({op: 'todos'});

    const init = {method: 'POST', body: body};
    fetch("../factura/dist/model/Empleado.php", init)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data['vali']);
                var tabla = "";
                let datos = data['empleados'];
                if (data['vali']) {
                    for (var i = 0, max = datos.length; i < max; i++) {
                        let valores = datos[i];
                       
                      tabla= tabla+"<tr>\n\
                                <td>"+(i+1)+"</td>\n\
                                <td>"+valores[0]+"</td>\n\
                                <td>"+valores[1]+"</td>\n\
                                <td>"+valores[2]+"</td>\n\
                                <td>"+valores[3]+"</td>\n\
                                <td>\n\
                                    <button class='btn btn-info py-0 px-2' onclick='actualizar("+valores[0]+",3)' ><b>i</b></button>\n\
                                    <button class='btn btn-danger py-0 px-2' onclick='eliminar("+valores[0]+",3)' > <b>X</b> </button>\n\
                                </td>\n\
                            </tr>";
                    }
                 document.getElementById('contentEmpleados').innerHTML = tabla;

                } else {
                    document.getElementById('alertTablas').innerHTML = "Error en la app";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablasError').style = "display:none";
                    }, 3000);
                }

            });
}

function eliminar(dato,op){
    if(op == 1){
        alert(op);
        elimnarProducto(dato);
    }else if (op == 2) {
        alert(op);
    }else if (op == 3) {
        alert(op);
    }

}

function elimnarProducto(cod){
    if(confirm("Eliminar producto")){
    var body = JSON.stringify({cod: cod ,op: 'eliminar'});

    const init = {method: 'POST', body: body};
    fetch("../factura/dist/model/Producto.php", init)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data['vali']);
                
                if (data['vali']) {
                    document.getElementById('alertTablas').innerHTML = "Producto eliminado exitosamente";
                    document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none";
                    }, 3000);
                    mostrarProductos();
                } else {
                    document.getElementById('alertTablas').innerHTML = "Error al elimnar producto";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablasError').style = "display:none";
                    }, 3000);
                }

            });}
}