<?php
session_start();
header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

class Empresa {
    
    private $nit;
    private $nombre;
    private $propietario;
    private $direccion;
    private $telefono;

    public function InsertEmpresa($nit, $nombre, $propietario, $direccion, $telefono) {
        include_once '../dataBase/conexion/Conexion.php';

        $conexion = new Conexion();
        $insert = $conexion->getConexion()->prepare("INSERT INTO empresa (nit, nombre, propietario,direccion,telefono)
                 values (?,?,?,?,?)");
        $insert->bindParam(1, $nit, PDO::PARAM_INT);
        $insert->bindParam(2, $nombre, PDO::PARAM_STR);
        $insert->bindParam(3, $propietario, PDO::PARAM_STR);
        $insert->bindParam(4, $direccion, PDO::PARAM_STR);
        $insert->bindParam(5, $telefono, PDO::PARAM_STR);

        if ($insert->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function buscarEmpresa($nit) {
        include_once '../dataBase/conexion/Conexion.php';

        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("SELECT * FROM empresa where nit = $nit");
   
        if ($consult) {
            foreach ($consult as $row) {
                $this->setNit($row['nit']);
                $this->setNombre($row['nombre']);
                $this->setPropietario($row['propietario']);
                $this->setDireccion($row['direccion']);
                $this->setTelefono($row['telefono']);
            }
        if(($this->getNit()) == null){
            return false;
        } else {
            return true;
        }
            
        } else {
            return false;
        }
    }
    
    function getNit() {
        return $this->nit;
    }
    function getNombre() {
        return $this->nombre;
    }
    function getPropietario() {
        return $this->propietario;
    }
    function getDireccion() {
        return $this->direccion;
    }
    function getTelefono() {
        return $this->telefono;
    }
    function setNit($nit): void {
        $this->nit = $nit;
    }
    function setNombre($nombre): void {
        $this->nombre = $nombre;
    }
    function setPropietario($propietario): void {
        $this->propietario = $propietario;
    }
    function setDireccion($direccion): void {
        $this->direccion = $direccion;
    }
    function setTelefono($telefono): void {
        $this->telefono = $telefono;
    }



}

if ($datos['op'] == 'registro') {

    $empresa = new Empresa();
    $reps['reps'] = $empresa->InsertEmpresa($datos['nit'], $datos['nombre'], $datos['propie'], $datos['direc'], $datos['tel']);
    echo json_encode($reps);
} else {
    if ($datos['op'] == 'buscar') {
        $nit = $datos['nit'];
        $empresa = new Empresa();
        $result = $empresa->buscarEmpresa($nit);
        if($result){
            
            $_SESSION['nit']=$empresa->getNit();
            $reps['vali']=true;
            $reps['nit']=$empresa->getNit();
            $reps['nom']=$empresa->getNombre();
            $reps['pro']=$empresa->getPropietario();
            $reps['dir']=$empresa->getDireccion();
            $reps['tel']=$empresa->getTelefono();
        } else {
            $reps['vali']=false;
        }
        echo json_encode($reps);
    }
}



