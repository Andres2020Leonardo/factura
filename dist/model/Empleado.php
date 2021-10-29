<?php

header("Content-type: application/json; charset=utf-8");
$datos = json_decode(file_get_contents("php://input"), true);

class Empleado  {

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

    
        public function mostrarEmpleados() {
        include_once '../dataBase/conexion/Conexion.php';
        $conexion = new Conexion();
        $consult = $conexion->getConexion()->query("SELECT * FROM empleado");

        if ($consult) {
            foreach ($consult as $row) {
                $resp = [ $row['documento'], $row['nombres'], $row['direccion'], $row['telefono']];
                array_push($this->empleados, $resp);
            }
            return true;
        } else {
            return false;
        }
    }
  


}

if ($datos['op'] == 'todos') {
     $empleado = new Empleado();
    
    if($empleado->mostrarEmpleados()){
         $reps['vali']=true;
          $reps['empleados']=$empleado->getEmpleados();
          echo json_encode($reps);
    } else {
         $reps['vali']=false;
         echo json_encode($reps);
    }
}elseif ($datos['op'] == 'eliminar') {
    
}


