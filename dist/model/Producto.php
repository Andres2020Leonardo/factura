<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

class Producto {

    private $codigo;
    private $descripcion;
    private $precio;
    private $cantidad;
    private $productos = [];

    public function mostrarProductos() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("SELECT * FROM producto");

        if ($consult) {
            foreach ($consult as $row) {
                $pro = [ $row['codigo'], $row['descripcion'], $row['precio'], $row['cantidad']];
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


}

if ($datos['op'] == 'todos') {
    $producto = new Producto();
    
    if($producto->mostrarProductos()){
         $reps['vali']=true;
          $reps['productos']=$producto->getProductos();
          echo json_encode($reps);
    } else {
         $reps['vali']=false;
         echo json_encode($reps);
    }
}elseif ($datos['op'] == 'eliminar') {
    $producto = new Producto();
    $cod = $datos['cod'];
     
    if($producto->eliminar($cod)){
         $reps['vali']=true;
         
          echo json_encode($reps);
    } else {
         $reps['vali']=false;
         echo json_encode($reps);
    }
}

