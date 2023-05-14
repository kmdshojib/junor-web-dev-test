<?php
class Database
{
    private $db;

    public function __construct($dbHost, $dbName, $dbUser, $dbPassword)
    {
        $this->db = new PDO('mysql:host=' . $dbHost . ';dbname=' . $dbName . ';charset=utf8', $dbUser, $dbPassword);

        $this->db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);

        $this->db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    public function getConnection()
    {
        return $this->db;
    }
}

$dbHost = 'localhost';
$dbName = 'testtask';
$dbUser = 'root';
$dbPassword = '';

$database = new Database($dbHost, $dbName, $dbUser, $dbPassword);

$db = $database->getConnection();

define('App_Name', 'testtask');