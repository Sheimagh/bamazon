DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM products;
-- database with 10 different products

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Spinach", "produce", 1.50, 100);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Carrots", "produce", 3.20, 1000);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Broccoli", "produce", 1.25, 500);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Brussels Sprouts", "produce", 3.55, 2000);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Kale", "produce", 2.50, 0);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Green Peas", "produce", 4.30, 300);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Ginger", "produce", 4.00, 200);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Asparagus", "produce", 3.20, 600);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Cabbage", "produce", 2.80, 400);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Beets", "produce", 5.50, 330);