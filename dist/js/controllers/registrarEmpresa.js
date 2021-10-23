let formRegistroEmpresa;
window.onload = function () {
    formRegistroEmpresa = document.getElementById('formRegistroEmpresa');
    formRegistroEmpresa.addEventListener('submit', function (event) {
        event.preventDefault();
        insertEmpresa();
    });

}
function insertEmpresa() {
    const datos = new FormData(formRegistroEmpresa);
    var nit = datos.get('campo_nit');
    var nombre = datos.get('campo_nombre');
    var propietario = datos.get('campo_propietario');
    var direccion = datos.get('campo_direccion');
    var telefono = datos.get('campo_telefono');
    var body = JSON.stringify({nit: nit, nombre: nombre, propie: propietario, direc: direccion, tel: telefono, op: 'registro'});

    const init = {method: 'POST', body: body};
    fetch("http://localhost/factura/dist/model/Empresa.php", init)
            .then(respuesta => respuesta.json())
            .then(data => {
           
                if (data['reps']) {
                    console.log('registro exitoso');
                    document.getElementById('alertTablas').innerHTML = "Empresa ingresada exitosamente";
                    document.getElementById('alertTablas').className = "alert alert-info w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    document.getElementById('contentRegistro').style="display:none";
                    document.getElementById('contentFactura').style="display:block";
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none";
                    }, 3000);
                    buscarEmpresa(nit)
                } else {
                    document.getElementById('alertTablas').innerHTML = "Error al ingresar empresa";
                    document.getElementById('alertTablas').className = "alert alert-danger w-25 fixed-bottom";
                    document.getElementById('alertTablas').style = "display:block; float: bottom;float: left;position: fixed";
                    setTimeout(function () {
                        document.getElementById('alertTablas').style = "display:none";
                    }, 3000);
                }

            });


}

function buscarEmpresa(nit) {
    
    var body = JSON.stringify({nit: nit,  op: 'buscar'});

    const init = {method: 'POST', body: body};
    fetch("http://localhost/factura/dist/model/Empresa.php", init)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data['vali']);
                if (data['vali']) {
                    document.getElementById('nit').innerHTML = data['nit'];
                    document.getElementById('nombreEmpresa').innerHTML = data['nom'];
                    document.getElementById('propietario').innerHTML = data['pro'];
                    document.getElementById('direccion').innerHTML = data['dir'];
                    document.getElementById('telefono').innerHTML = data['tel'];
                    document.getElementById('contentRegistro').style="display:none";
                    document.getElementById('contentFactura').style="display:block";
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
