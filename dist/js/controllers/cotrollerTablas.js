
mostrarProductos();
mostrarClientes();
mostrarEmpleado();
let formModal = document.getElementById('formModal');
formModal.addEventListener('submit', function (event) {
    event.preventDefault();
    var datos = document.forms['formModal'];
    console.log(datos);
    let doc;
    let nom;
    let dir;
    let tel;
    switch (document.getElementById('botonModal').value) {
        case 'cliente':

            doc = datos['inputModal1'].value;
            nom = datos['inputModal2'].value;
            dir = datos['inputModal3'].value;
            tel = datos['inputModal4'].value;
            agregarCliente(doc, nom, dir, tel);
            break;
        case 'Empleado':

            doc = datos['inputModal1'].value;
            nom = datos['inputModal2'].value;
            dir = datos['inputModal3'].value;
            tel = datos['inputModal4'].value;
            agregarEmpleado(doc, nom, dir, tel)
            break;
        case 'producto':

            let cod = datos['inputModal1'].value;
            let des = datos['inputModal2'].value;
            let pre = datos['inputModal3'].value;
            let can = datos['inputModal4'].value;
            agregarProducto(cod, des, pre, can);

            break;
        default:
            alert('error');
            break;
    }
});




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

                        tabla = tabla + "<tr>\n\
                                <td>" + (i + 1) + "</td>\n\
                                <td class='datosPro'>" + valores[0] + "</td>\n\
                                <td class='datosPro'>" + valores[1] + "</td>\n\
                                <td class='datosPro'>" + valores[2] + "</td>\n\
                                <td class='datosPro'>" + valores[3] + "</td>\n\
                                <td class='datosPro'>\n\
                                    <button data-bs-toggle='modal' data-bs-target='#modalglobal'  class='btn btn-info py-0 px-2' onclick='actualizar(" + valores[0] + ",1)' ><b>i</b></button>\n\
                                    <button class='btn btn-danger py-0 px-2' onclick='eliminar(" + valores[0] + ",1)' > <b>X</b> </button>\n\
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

                        tabla = tabla + "<tr>\n\
                                <td>" + (i + 1) + "</td>\n\
                                <td>" + valores[0] + "</td>\n\
                                <td>" + valores[1] + "</td>\n\
                                <td>" + valores[2] + "</td>\n\
                                <td>" + valores[3] + "</td>\n\
                                <td>\n\
                                    <button data-bs-toggle='modal' data-bs-target='#modalglobal' class='btn btn-info py-0 px-2' onclick='actualizar(" + valores[0] + ",2)' ><b>i</b></button>\n\
                                    <button class='btn btn-danger py-0 px-2' onclick='eliminar(" + valores[0] + ",2)' > <b>X</b> </button>\n\
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
0
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

                        tabla = tabla + "<tr>\n\
                                <td>" + (i + 1) + "</td>\n\
                                <td>" + valores[0] + "</td>\n\
                                <td>" + valores[1] + "</td>\n\
                                <td>" + valores[2] + "</td>\n\
                                <td>" + valores[3] + "</td>\n\
                                <td>\n\
                                    <button data-bs-toggle='modal' data-bs-target='#modalglobal' class='btn btn-info py-0 px-2' onclick='actualizar(" + valores[0] + ",3)' ><b>i</b></button>\n\
                                    <button class='btn btn-danger py-0 px-2' onclick='eliminar(" + valores[0] + ",3)' > <b>X</b> </button>\n\
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

function eliminar(dato, op) {
    if (op == 1) {

        elimnarProducto(dato);
    } else if (op == 2) {

        elimnarCliente(dato);
    } else if (op == 3) {

        elimnarEmpleado(dato);
    }

}

function elimnarProducto(cod) {
    if (confirm("Eliminar producto")) {
        var body = JSON.stringify({cod: cod, op: 'eliminar'});

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

                });
    }
}

function elimnarCliente(doc) {

    if (confirm("Eliminar Cliente")) {
        var body = JSON.stringify({doc: doc, op: 'eliminar'});

        const init = {method: 'POST', body: body};
        fetch("../factura/dist/model/Cliente.php", init)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data['vali']);

                    if (data['vali']) {
                        document.getElementById('alertTablas').innerHTML = "Cliente eliminado exitosamente";
                        document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";

                        setTimeout(function () {
                            document.getElementById('alertTablas').style = "display:none";
                        }, 3000);
                        mostrarClientes();
                    } else {
                        document.getElementById('alertTablas').innerHTML = "Error al elimnar Cliente";
                        document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                        setTimeout(function () {
                            document.getElementById('alertTablasError').style = "display:none";
                        }, 3000);
                    }

                });
    }
}

function elimnarEmpleado(doc) {

    if (confirm("Eliminar Empleado")) {
        var body = JSON.stringify({doc: doc, op: 'eliminar'});

        const init = {method: 'POST', body: body};
        fetch("../factura/dist/model/Empleado.php", init)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data['vali']);

                    if (data['vali']) {
                        document.getElementById('alertTablas').innerHTML = "Empleado eliminado exitosamente";
                        document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";

                        setTimeout(function () {
                            document.getElementById('alertTablas').style = "display:none";
                        }, 3000);
                        mostrarEmpleado();
                    } else {
                        document.getElementById('alertTablas').innerHTML = "Error al elimnar Empleado";
                        document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                        setTimeout(function () {
                            document.getElementById('alertTablasError').style = "display:none";
                        }, 3000);
                    }

                });
    }
}

function editarEmpleado(doc) {

    if (confirm("Eliminar Empleado")) {
        var body = JSON.stringify({doc: doc, op: 'editar'});

        const init = {method: 'POST', body: body};
        fetch("../factura/dist/model/Empleado.php", init)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data['vali']);

                    if (data['vali']) {
                        document.getElementById('alertTablas').innerHTML = "Empleado editado exitosamente";
                        document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";

                        setTimeout(function () {
                            document.getElementById('alertTablas').style = "display:none";
                        }, 3000);
                        mostrarEmpleado();
                    } else {
                        document.getElementById('alertTablas').innerHTML = "Error al editar Empleado";
                        document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                        setTimeout(function () {
                            document.getElementById('alertTablasError').style = "display:none";
                        }, 3000);
                    }

                });
    }
}

function agregar(op) {
    if (op == "cliente") {

        document.getElementById('ModalLabel').innerHTML = "Agregar Cliente";
        document.getElementById('contentModal').innerHTML = "<div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Documento</span>\n\
                                <input required name='inputModal1' type='number' class='form-control' placeholder='0000000' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Nombres</span>\n\
                                <input required name='inputModal2' type='text' class='form-control' placeholder='Nombre' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Direccion</span>\n\
                                <input  required name='inputModal3' type='text' class='form-control' placeholder='Calle 28 # 13-14' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Telefono</span>\n\
                                <input required name='inputModal4' type='number' class='form-control' placeholder='8706060' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>";
        document.getElementById('botonModal').innerHTML = "Agregar";
        document.getElementById('botonModal').value = op;
    } else if (op == "Empleado") {

        document.getElementById('ModalLabel').innerHTML = "Agregar Empleado";
        document.getElementById('contentModal').innerHTML = "<div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Documento</span>\n\
                                <input required name='inputModal1' type='number' class='form-control' placeholder='0000000' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Nombres</span>\n\
                                <input required name='inputModal2' type='text' class='form-control' placeholder='Nombre' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Direccion</span>\n\
                                <input required name='inputModal3' type='text' class='form-control' placeholder='Calle 28 # 13-14' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Telefono</span>\n\
                                <input required name='inputModal4' type='number' class='form-control' placeholder='8706060' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>";
        document.getElementById('botonModal').innerHTML = "Agregar";
        document.getElementById('botonModal').value = op;
    } else if (op == "producto") {

        document.getElementById('ModalLabel').innerHTML = "Agregar Prodcuto";
        document.getElementById('contentModal').innerHTML = "<div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Codigo</span>\n\
                                <input required name='inputModal1' type='number' class='form-control' placeholder='0000000' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Descripción</span>\n\
                                <input required name='inputModal2' type='text' class='form-control' placeholder='prodcuto' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Precio</span>\n\
                                <input required name='inputModal3' type='number' class='form-control' step='0.01' placeholder='0.0' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Cantidad</span>\n\
                                <input required name='inputModal4' type='number' class='form-control' placeholder='20' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>";
        document.getElementById('botonModal').innerHTML = "Agregar";
        document.getElementById('botonModal').value = op;

    }
}

function agregarProducto(cod, des, pre, can) {
    if (confirm("Agregar producto:" + cod + "," + des + "," + pre + "," + can)) {
        var body = JSON.stringify({cod: cod, des: des, pre: pre, can: can, op: 'agregar'});

        const init = {method: 'POST', body: body};
        fetch("../factura/dist/model/Producto.php", init)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data['valid']);

                    if (data['vali']) {
                        document.getElementById('alertTablas').innerHTML = "Producto agregado exitosamente";
                        document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";

                        setTimeout(function () {
                            document.getElementById('alertTablas').style = "display:none";
                        }, 3000);
                        document.getElementById('close').click();
                        mostrarProductos();

                    } else {
                        document.getElementById('alertTablas').innerHTML = "Error al agregar producto";
                        document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                        setTimeout(function () {
                            document.getElementById('alertTablasError').style = "display:none";
                        }, 3000);
                    }

                });
    }
}

function agregarCliente(doc, nom, dir, tel) {
    if (confirm("Agregar producto:" + doc + "," + nom + "," + dir + "," + tel)) {
        var body = JSON.stringify({doc: doc, nom: nom, dir: dir, tel: tel, op: 'agregar'});

        const init = {method: 'POST', body: body};
        fetch("../factura/dist/model/Cliente.php", init)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data['valid']);

                    if (data['vali']) {
                        document.getElementById('alertTablas').innerHTML = "Cliente agregado exitosamente";
                        document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";

                        setTimeout(function () {
                            document.getElementById('alertTablas').style = "display:none";
                        }, 3000);
                        document.getElementById('close').click();
                        mostrarClientes();

                    } else {
                        document.getElementById('alertTablas').innerHTML = "Error al agregar Cliente";
                        document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                        setTimeout(function () {
                            document.getElementById('alertTablasError').style = "display:none";
                        }, 3000);
                    }

                });
    }
}

function agregarEmpleado(doc, nom, dir, tel) {
    if (confirm("Agregar producto:" + doc + "," + nom + "," + dir + "," + tel)) {
        var body = JSON.stringify({doc: doc, nom: nom, dir: dir, tel: tel, op: 'agregar'});

        const init = {method: 'POST', body: body};
        fetch("../factura/dist/model/Empleado.php", init)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data['valid']);

                    if (data['vali']) {
                        document.getElementById('alertTablas').innerHTML = "Cliente agregado exitosamente";
                        document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";

                        setTimeout(function () {
                            document.getElementById('alertTablas').style = "display:none";
                        }, 3000);
                        document.getElementById('close').click();
                        mostrarEmpleado();

                    } else {
                        document.getElementById('alertTablas').innerHTML = "Error al agregar Cliente";
                        document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                        document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                        setTimeout(function () {
                            document.getElementById('alertTablasError').style = "display:none";
                        }, 3000);
                    }

                });
    }
}

function actualizar(op) {
    if (op == 2) {

        document.getElementById('ModalLabel').innerHTML = "Agregar Cliente";
        document.getElementById('contentModal').innerHTML = "<div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Documento</span>\n\
                                <input required name='inputModal1' type='number' class='form-control' placeholder='0000000' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Nombres</span>\n\
                                <input required name='inputModal2' type='text' class='form-control' placeholder='Nombre' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Direccion</span>\n\
                                <input  required name='inputModal3' type='text' class='form-control' placeholder='Calle 28 # 13-14' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Telefono</span>\n\
                                <input required name='inputModal4' type='number' class='form-control' placeholder='8706060' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>";
        document.getElementById('botonModal').innerHTML = "Agregar";
        document.getElementById('botonModal').value = op;
    } else if (op == 3) {

        document.getElementById('ModalLabel').innerHTML = "Agregar Empleado";
        document.getElementById('contentModal').innerHTML = "<div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Documento</span>\n\
                                <input required name='inputModal1' type='number' class='form-control' placeholder='0000000' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Nombres</span>\n\
                                <input required name='inputModal2' type='text' class='form-control' placeholder='Nombre' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Direccion</span>\n\
                                <input required name='inputModal3' type='text' class='form-control' placeholder='Calle 28 # 13-14' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Telefono</span>\n\
                                <input required name='inputModal4' type='number' class='form-control' placeholder='8706060' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>";
        document.getElementById('botonModal').innerHTML = "Agregar";
        document.getElementById('botonModal').value = op;
    } else if (op == 1) {

        document.getElementById('ModalLabel').innerHTML = "Agregar Prodcuto";
        document.getElementById('contentModal').innerHTML = "<div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Codigo</span>\n\
                                <input required readonly value='"+op+"' name='inputModal1' type='number' class='form-control' placeholder='0000000' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Descripción</span>\n\
                                <input required name='inputModal2' type='text' class='form-control' placeholder='prodcuto' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Precio</span>\n\
                                <input required name='inputModal3' type='number' class='form-control' step='0.01' placeholder='0.0' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>\n\
                            <div class='input-group mb-3'>\n\
                                <span class='input-group-text bg-white' id='basic-addon1' style='width: 30%'>Cantidad</span>\n\
                                <input required name='inputModal4' type='number' class='form-control' placeholder='20' aria-label='Username' aria-describedby='basic-addon1'>\n\
                            </div>";
        document.getElementById('botonModal').innerHTML = "Agregar";
        document.getElementById('botonModal').value = op;

    }
}