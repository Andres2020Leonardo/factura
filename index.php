<?php
session_start();
?>
<!DOCTYPE html>
<html>
    <head>
        <title>FACTURA</title>
        <link rel="stylesheet" type="text/css" href="dist/css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="dist/css/estilos.css">
        <script type="text/javascript" src="dist/js/bootstrap.bundle.js"></script>
        <script type="text/javascript" src="dist/js/script_factura.js"></script>

    </head>
    <body>  
        <div class="" role="alert" id= "alertTablas" style="display: none">

        </div>

        <div class="container-fluid">
            <div id="contentRegistro" class="row m-0 mt-4 justify-content-center">
                <div class="col-4 border p-4 mt-4">
                    <h3 class="text-center">Información Empresa </h3>

                    <form id="formRegistroEmpresa" action="#" method="POST" accept-charset="utf-8">
                        <label class="d-block mt-3" for="campo_nombre">Nombre: </label>
                        <input class="form-control" id="campo_nombre" type="text" name="campo_nombre" required >

                        <label class="d-block mt-3" for="campo_nit">Nit: </label>
                        <input class="form-control" id="campo_nit" type="text" name="campo_nit" required >

                        <label class="d-block mt-3" for="campo_propietario">Propietario: </label>
                        <input class="form-control" id="campo_propietario" type="text" name="campo_propietario" required >

                        <label class="d-block mt-3" for="campo_direccion">Direccion: </label>
                        <input class="form-control" id="campo_direccion" type="text" name="campo_direccion" required >

                        <label class="d-block mt-3" for="campo_telefono">Telefono: </label>
                        <input class="form-control" id="campo_telefono" type="number" name="campo_telefono" required >

                        <div class="row justify-content-center">
                            <button type="submit" class="col-6 btn btn-primary mt-3">CONTINUAR</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="contentFactura" style="display:none;">
                <div class="row m-0 pt-4 justify-content-center">
                    <div class="col-5 border p-3">
                        <div class="row m-0">
                            <div class="col-7 p-0">
                                <h1 class="text-center text-dark" id="nombreEmpresa"><u>Mi Empresa</u></h1>
                                <h6 class="text-center m-0" id="propietario">Fulano de Tal</h6>
                                <p class="text-center m-0">NIT: <u id="nit" style="text-decoration: none">000000000-</u>1 Regimén Simplificado</p>
                            </div>
                            <div class="col-5 p-0">
                                <p class="text-small text-center">
                                    Distribuimos todo tipo de productos <br>
                                    Brindamos un sin fin de servicios <br>
                                    <b>Ventas al por mayor y al detal.</b>
                                </p>
                                <p class="text-small text-center mb-0">
                                    <b>
                                        Tel: <u style="text-decoration: none" id="telefono">0000000</u> <br>
                                        <u style="text-decoration: none" id="direccion">Calle 00 N° 00 - 00</u>
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div class="row m-0 mt-2 justify-content-center">
                            <div class="col-4 m-0 p-0">
                                <table class="table table-bordered m-0">
                                    <thead>
                                        <tr class="text-center">
                                            <th class="p-1">DIA</th>
                                            <th class="p-1">MES</th>
                                            <th class="p-1">AÑO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="text-center p-1">00</td>
                                            <td class="text-center p-1">00</td>
                                            <td class="text-center p-1">00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col ms-3 p-0">
                                <div class="row m-0">
                                    <div class="col-5 p-0 pe-2">
                                        <h4 class="text-end m-0">FACTURA VENTA</h4>
                                    </div>
                                    <div class="col m-0 ms-3 border p-2">
                                        <h3 class="text-danger text-center m-0">N° 0123</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 mt-2">
                            <div class="col-7 p-0">
                                <label class="label-cliente" for="campo_cliente">Señor(a): </label>
                                <input class="input-cliente" id="campo_cliente" type="text">
                            </div>
                            <div class="col-5 p-0">
                                <label  class="label-nit-cliente" for="campo_cliente_cc">NIT/CC.</label>
                                <input  class="input-nit-cliente" id="campo_cliente_cc" type="text">
                            </div>

                            <div class="col-7 p-0">
                                <label class="label-cliente direccion" for="campo_cliente_direccion">Dirección: </label>
                                <input class="input-cliente" id="campo_cliente_direccion" type="text">
                            </div>
                            <div class="col-5 p-0">
                                <label  class="label-nit-cliente" for="campo_cliente_cc">TEL/CEL.</label>
                                <input  class="input-nit-cliente" id="campo_cliente_cc" type="text">
                            </div>
                        </div>
                        <div class="m-0 mt-3 p-0">
                            <table class="table table-bordered m-0">
                                <thead>
                                    <tr>
                                        <th class="text-center p-1">CODIGO</th>
                                        <th class="text-center p-1">CANT.</th>
                                        <th class="text-center p-1">PRECIO</th>
                                        <th class="text-center p-1">DESCRIPCION</th>
                                        <th class="text-center p-1">TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                    <tr>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                        <td class="p-1 text-center">-</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="row m-0 mt-3 justify-content-end">
                                <div class="col-5 p-0">
                                    <div class="row m-0">
                                        <h5 class="col-4 p-0 pe-2 pt-2 text-end">TOTAL:</h5>
                                        <div class="col-8 p-0">
                                            <input class="form-control" type="number" name="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col ms-3 p-0">

                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Clientes</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Empleados</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Productos</button>
                            </li>
                        </ul>
                        <div class="tab-content borderCompleto h-95" id="myTabContent">
                            <div class="tab-pane fade show active p-3" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <table class="table table-bordered table-sm">
                                    <thead class="bg-primary text-light">
                                        <tr class="text-center">
                                            <th class="py-2">N°</th>
                                            <th class="py-2">DOCUMENTO</th>
                                            <th class="py-2">NOMBRES</th>
                                            <th class="py-2">DIRECCION</th>
                                            <th class="py-2">TELEFONO</th>
                                            <th class="py-2">OP.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contentUsuarios" class="text-center" >
                                        <tr>
                                            <td>1</td>
                                            <td>108800</td>
                                            <td>OSCAR ANDRES LOAIZA PABON</td>
                                            <td>CALLE 20</td>
                                            <td>3443329</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>108801</td>
                                            <td>DANIEL PEREZ</td>
                                            <td>CALLE 22</td>
                                            <td>3123122</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>108802</td>
                                            <td>MARIA LOPEZ</td>
                                            <td>CALLE 32</td>
                                            <td>323132123</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row justify-content-end m-0">
                                    <button class="btn btn-primary col-2"><b>AGREGAR</b></button>
                                </div>

                            </div>
                            <div class="tab-pane fade p-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                <table class="table table-bordered table-sm">
                                    <thead class="bg-success text-light">
                                        <tr class="text-center">
                                            <th class="py-2">N°</th>
                                            <th class="py-2">DOCUMENTO</th>
                                            <th class="py-2">NOMBRES</th>
                                            <th class="py-2">DIRECCION</th>
                                            <th class="py-2">TELEFONO</th>
                                            <th class="py-2">OP.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contentUsuarios" class="text-center" >
                                        <tr>
                                            <td>1</td>
                                            <td>108803</td>
                                            <td>ANA MARINA PEREZ CORREA</td>
                                            <td>CALLE 25</td>
                                            <td>3123339</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>108804</td>
                                            <td>JUAN CAMILO MOLINA GUARIN</td>
                                            <td>CALLE 26</td>
                                            <td>3282932</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>108805</td>
                                            <td>DANIEL ANDRES CARMONA LOPEZ</td>
                                            <td>CALLE 34</td>
                                            <td>3239238</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row justify-content-end m-0">
                                    <button class="btn btn-success col-2"><b>AGREGAR</b></button>
                                </div>

                            </div>
                            <div class="tab-pane fade p-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                                <table class="table table-bordered table-sm">
                                    <thead class="bg-secondary text-light">
                                        <tr class="text-center">
                                            <th class="py-2">N°</th>
                                            <th class="py-2">CODIGO</th>
                                            <th class="py-2">DESCRIPCION</th>
                                            <th class="py-2">PRECIO</th>
                                            <th class="py-2">CANTIDAD</th>
                                            <th class="py-2">OP.</th>
                                        </tr>
                                    </thead>
                                    <tbody id="contentUsuarios" class="text-center" >
                                        <tr>
                                            <td>1</td>
                                            <td>101010</td>
                                            <td>CUADERNO 50h</td>
                                            <td>2500</td>
                                            <td>1850</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>101011</td>
                                            <td>LAPIZ MIRADO 2</td>
                                            <td>1000</td>
                                            <td>740</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>101012</td>
                                            <td>TAJA LAPIZ</td>
                                            <td>1500</td>
                                            <td>211</td>
                                            <td>
                                                <button class="btn btn-info py-0 px-2" onclick="" ><b>i</b></button>
                                                <button class="btn btn-danger py-0 px-2" onclick="" > <b>X</b> </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row justify-content-end m-0">
                                    <button class="btn btn-secondary col-2"><b>AGREGAR</b></button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="dist/js/controllers/registrarEmpresa.js"></script>
<?php
if (isset($_SESSION['nit'])) {
    $nit = $_SESSION['nit'];
    echo "<script type='text/javascript' > buscarEmpresa($nit)</script>";
}
?>
    </body>
</html>
