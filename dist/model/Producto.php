<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

class Producto {

    private $codigo;
    private $descripcion;
    private $precio;
    private $cantidad;
    private $productos = [];

    public function setProducto($codigo, $descripcion, $precio, $cantidad) {
        $this->codigo = $codigo;
        $this->descripcion = $descripcion;
        $this->precio = $precio;
        $this->cantidad = $cantidad;
    }

    public function agregar() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->prepare("INSERT INTO producto (codigo, descripcion, precio, cantidad)
                 VALUES (?, ?, ?, ?);");
        $consult->bindParam(1, $this->codigo,PDO::PARAM_INT);
        $consult->bindParam(2, $this->descripcion,PDO::PARAM_STR);
        $consult->bindParam(3, $this->precio,PDO::PARAM_INT);
        $consult->bindParam(4, $this->cantidad,PDO::PARAM_INT);
         if ($consult->execute()) {
            
            return true;
        } else {
            return false;
        }
    }


    public function mostrarProductos() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("SELECT * FROM producto");

        if ($consult) {
            foreach ($consult as $row) {
                $pro = [$row['codigo'], $row['descripcion'], $row['precio'], $row['cantidad']];
                array_push($this->productos, $pro);
            }
            return true;
        } else {
            return false;
        }
    }

    function eliminar($cod) {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("DELETE FROM producto WHERE (codigo = '$cod')");

        if ($consult) {

            return true;
        } else {
            return false;
        }
    }

    function getProductos() {
        return $this->productos;
    }

    function setProductos($productos): void {
        $this->productos = $productos;
    }
    function getCodigo() {
        return $this->codigo;
    }

    function getDescripcion() {
        return $this->descripcion;
    }

    function getPrecio() {
        return $this->precio;
    }

    function getCantidad() {
        return $this->cantidad;
    }

    function setCodigo($codigo): void {
        $this->codigo = $codigo;
    }

    function setDescripcion($descripcion): void {
        $this->descripcion = $descripcion;
    }

    function setPrecio($precio): void {
        $this->precio = $precio;
    }

    function setCantidad($cantidad): void {
        $this->cantidad = $cantidad;
    }



}

if ($datos['op'] == 'todos') {
    $producto = new Producto();

    if ($producto->mostrarProductos()) {
        $reps['vali'] = true;
        $reps['productos'] = $producto->getProductos();
        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
} elseif ($datos['op'] == 'eliminar') {
    $producto = new Producto();
    $cod = $datos['cod'];

    if ($producto->eliminar($cod)) {
        $reps['vali'] = true;

        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
} elseif ($datos['op'] == 'agregar') {

    $cod = $datos['cod'];
    $des = $datos['des'];
    $pre = $datos['pre'];
    $can = $datos['can'];
    $producto = new Producto();
    $producto->setProducto($cod, $des, $pre, $can);
   
    if ($producto->agregar()) {
        $reps['vali'] = true;

        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
}

