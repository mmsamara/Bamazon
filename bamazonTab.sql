CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE bamazon (
	item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INT,
    stock_quantity INT
);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Bronze Watch", "Noob", 10, 100);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Iron Watch", "Noob", 20, 50);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Steel Watch", "Medium", 40, 25);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Mithril Watch", "Medium", 80, 20);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Adamant Watch", "Advanced", 160, 15);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Rune Watch", "Advanced", 320, 10);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Dragon Watch", "Expert", 640, 5);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Saphire", "Jewelry", 100, 15);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Ruby", "Jewelry", 1000, 10);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity) VALUES ("Emerald", "Jewelry", 10000, 5);

SELECT * FROM bamazon;