<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

class Cliente {

    private $documento;
    private $nombres;
    private $direccion;
    private $telefono;
    private $clientes = [];

    function getClientes() {
        return $this->clientes;
    }

    function setClientes($clientes): void {
        $this->clientes = $clientes;
    }

    public function setCliente($documento, $nombres, $direccion, $telefono) {
        $this->documento = $documento;
        $this->nombres = $nombres;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
    }

    public function mostrarClientes() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("SELECT * FROM cliente");

        if ($consult) {
            foreach ($consult as $row) {
                $resp = [$row['documento'], $row['nombres'], $row['direccion'], $row['telefono']];
                array_push($this->clientes, $resp);
            }
            return true;
        } else {
            return false;
        }
    }

    function eliminar($doc) {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("DELETE FROM     cliente WHERE (documento = '$doc')");

        if ($consult) {

            return true;
        } else {
            return false;
        }
    }

    public function agregar(){
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->prepare("INSERT INTO cliente (documento, nombres,direccion, telefono)
                 VALUES (?, ?, ?, ?);");
        $consult->bindParam(1, $this->documento, PDO::PARAM_INT);
        $consult->bindParam(2, $this->nombres, PDO::PARAM_STR);
        $consult->bindParam(3, $this->direccion, PDO::PARAM_STR);
        $consult->bindParam(4, $this->telefono, PDO::PARAM_STR);
        if ($consult->execute()) {

            return true;
        } else {
            return false;
        }
    }

    public function editar(){
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("UPDATE cliente SET nombres = '$this->nombres', direccion = '$this->direccion', telefono = '$this->telefono' WHERE (documento = '$this->documento')");

        if ($consult) {

            return true;
        } else {
            return false;
        }
    }

}

if ($datos['op'] == 'todos') {
    $cliente = new Cliente();

    if ($cliente->mostrarClientes()) {
        $reps['vali'] = true;
        $reps['clientes'] = $cliente->getClientes();
        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
} elseif ($datos['op'] == 'eliminar') {
    $cliente = new Cliente();
    $doc = $datos['doc'];
    if ($cliente->eliminar($doc)) {
        $reps['vali'] = true;

        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
} elseif ($datos['op'] == 'agregar') {

    $doc = $datos['doc'];
    $nom = $datos['nom'];
    $dir = $datos['dir'];
    $tel = $datos['tel'];
    $cliente = new Cliente();
    $cliente->setCliente($doc, $nom, $dir, $tel);
    if ($cliente->agregar()) {
        $reps['vali'] = true;

        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
} elseif ($datos['op'] == 'editar') {

    $doc = $datos['doc'];
    $nom = $datos['nom'];
    $dir = $datos['dir'];
    $tel = $datos['tel'];
    $cliente = new Cliente();
    $cliente->setCliente($doc, $nom, $dir, $tel);
    if ($cliente->editar()) {
        $reps['vali'] = true;

        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
}       

