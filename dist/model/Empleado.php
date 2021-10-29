<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

class Empleado {

    private $documento;
    private $nombres;
    private $direccion;
    private $telefono;
    private $empleados = [];

    function getEmpleados() {
        return $this->empleados;
    }

    function setEmpleados($empleados): void {
        $this->empleados = $empleados;
    }

    public function setEmpleado($documento, $nombres, $direccion, $telefono) {
        $this->documento = $documento;
        $this->nombres = $nombres;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
    }

    public function mostrarEmpleados() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("SELECT * FROM empleado");

        if ($consult) {
            foreach ($consult as $row) {
                $resp = [$row['documento'], $row['nombres'], $row['direccion'], $row['telefono']];
                array_push($this->empleados, $resp);
            }
            return true;
        } else {
            return false;
        }
    }

    function eliminar($doc) {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("DELETE FROM  empleado WHERE (documento = '$doc')");

        if ($consult) {

            return true;
        } else {
            return false;
        }
    }

    public function agregar() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->prepare("INSERT INTO empleado (documento, nombres,direccion, telefono)
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

}

if ($datos['op'] == 'todos') {
    $empleado = new Empleado();

    if ($empleado->mostrarEmpleados()) {
        $reps['vali'] = true;
        $reps['empleados'] = $empleado->getEmpleados();
        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
} elseif ($datos['op'] == 'eliminar') {
    $empleado = new Empleado();
    $doc = $datos['doc'];
    if ($empleado->eliminar($doc)) {
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
    $empleado = new Empleado();
    $empleado->setEmpleado($doc, $nom, $dir, $tel);
    if ($empleado->agregar()) {
        $reps['vali'] = true;

        echo json_encode($reps);
    } else {
        $reps['vali'] = false;
        echo json_encode($reps);
    }
}              


