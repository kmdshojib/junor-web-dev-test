<?php

class Product
{
    private $conn;

    private $table = 'products';

    public $id;
    public $sku;
    public $name;
    public $price;
    public $size;
    public $height;
    public $width;
    public $length;
    public $weight;

    public function __construct($db)
    {
        $this->conn = $db;
    }


    public function getCategories()
    {
        $query = 'SELECT 
        p.id,
        p.dvd,
        p.book,
        p.price,
        p.furniture,
    
        FROM 
            ' . $this->table . ' p
            LEFT JOIN
            categories c ON p.id = c.id 
        ORDER BY p.id DESC';

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function getProducts()
    {
        $query = 'SELECT 
        p.id,
        p.sku,
        p.name,
        p.price,
        p.size,
        p.height,
        p.weight,
        p.length,
        p.weight

        FROM 
            ' . $this->table . ' p
            LEFT JOIN
            products c ON p.id = c.id 
        ORDER BY p.id DESC';

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }


    // public function postProducts()
    // {
    //     $query = 'INSERT INTO ' . $this->table . ' SET sku=:sku, name=:name, price=:price, size=:size, height=:height, width=:width, length=:length, weight=:weight';

    //     $stmt = $this->conn->prepare($query);

    //     $this->sku = htmlspecialchars(strip_tags($this->sku));
    //     $this->name = htmlspecialchars(strip_tags($this->name));
    //     $this->price = htmlspecialchars(strip_tags($this->price));
    //     $this->size = htmlspecialchars(strip_tags($this->size));
    //     $this->height = htmlspecialchars(strip_tags($this->height));
    //     $this->length = htmlspecialchars(strip_tags($this->length));
    //     $this->width = htmlspecialchars(strip_tags($this->width));
    //     $this->weight = htmlspecialchars(strip_tags($this->weight));

    //     $stmt->bindParam(':sku', $this->sku);
    //     $stmt->bindParam(':name', $this->name);
    //     $stmt->bindParam(':price', $this->price);
    //     $stmt->bindParam(':size', $this->size);
    //     $stmt->bindParam(':height', $this->height);
    //     $stmt->bindParam(':length', $this->length);
    //     $stmt->bindParam(':width', $this->width);
    //     $stmt->bindParam(':weight', $this->weight);

    //     if ($stmt->execute()) {
    //         return true;
    //     }
    //     printf("Error %s \n", $stmt->error);
    //     return false;
    // }

    public function postProducts()
    {
        $query = 'INSERT INTO ' . $this->table . ' SET sku=:sku, name=:name, price=:price';
        $queryParams = [
            ':sku' => $this->sku,
            ':name' => $this->name,
            ':price' => $this->price
        ];

        if (!empty($this->size)) {
            $query .= ', size=:size';
            $queryParams[':size'] = $this->size;
        }

        if (!empty($this->height)) {
            $query .= ', height=:height';
            $queryParams[':height'] = $this->height;
        }

        if (!empty($this->length)) {
            $query .= ', length=:length';
            $queryParams[':length'] = $this->length;
        }

        if (!empty($this->width)) {
            $query .= ', width=:width';
            $queryParams[':width'] = $this->width;
        }

        if (!empty($this->weight)) {
            $query .= ', weight=:weight';
            $queryParams[':weight'] = $this->weight;
        }

        $stmt = $this->conn->prepare($query);

        foreach ($queryParams as $param => &$value) {
            $stmt->bindParam($param, $value);
        }

        if ($stmt->execute()) {
            return true;
        }

        printf("Error %s \n", $stmt->error);
        return false;
    }


    public function deleteProducts(array $ids): bool
    {
        $placeholders = implode(',', array_fill(0, count($ids), '?'));

        $query = 'DELETE FROM ' . $this->table . ' WHERE id IN (' . $placeholders . ')';

        $stmt = $this->conn->prepare($query);

        foreach ($ids as $key => $id) {
            $ids[$key] = htmlspecialchars(strip_tags($id));
            $stmt->bindParam(($key + 1), $ids[$key]);
        }

        if ($stmt->execute()) {
            return true;
        }

        printf("Error %s. \n", $stmt->error);
        return false;
    }

}