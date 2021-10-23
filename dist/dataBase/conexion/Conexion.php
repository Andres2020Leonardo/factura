<?php 
class Conexion{
    private $host = "localhost:3305";
    private $db = "ventas";
    private $user = "root";
    private $pass = "";

    function getConexion(){
        return new PDO("mysql:host=$this->host;dbname=$this->db",$this->user, $this->pass);
    }
}
