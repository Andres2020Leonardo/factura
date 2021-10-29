<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

class Cliente  {

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

        public function mostrarClientes() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("SELECT * FROM cliente");

        if ($consult) {
            foreach ($consult as $row) {
                $resp = [ $row['documento'], $row['nombres'], $row['direccion'], $row['telefono']];
                array_push($this->clientes, $resp);
            }
            return true;
        } else {
            return false;
        }
    }
  


}

if ($datos['op'] == 'todos') {
     $cliente = new Cliente();
    
    if($cliente->mostrarClientes()){
         $reps['vali']=true;
          $reps['clientes']=$cliente->getClientes();
          echo json_encode($reps);
    } else {
         $reps['vali']=false;
         echo json_encode($reps);
    }
}elseif ($datos['op'] == 'eliminar') {
    
}       

