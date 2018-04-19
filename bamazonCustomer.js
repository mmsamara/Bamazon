require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as ID " + connection.threadId + "\n");
    start();
});

function start() {
    listItems();
    connection.query("SELECT * FROM bamazon", function(err, res) {
        if (err) throw err;

        inquirer
            .prompt([
                {
                    name: "productId",
                    type: "input",
                    message: "Please enter the ID of the product you would like to buy",
                },
                {
                    name: "numberOfUnits",
                    type: "input",
                    message: "How many units would you like to buy?"
                }
            ])
            .then(function(answer){
                var selectedItem;

                //Loop through the mySQL query result to check which item the customer chose
                for (var i=0; i<res.length; i++) {
                    if (res[i].item_id == answer.productId) {
                        
                        //Save the selected item into a variable
                        selectedItem = res[i];

                        if (parseInt(answer.numberOfUnits) > selectedItem.stock_quantity) {
                            console.log("*******************************");
                            console.log("Not enough items in stock to fulfill order :/");
                            console.log("*******************************");
                            start();
                        } else {
                            console.log("*******************************");
                            if (answer.numberOfUnits < 2) {
                                console.log("Thank you for purchasing a " + selectedItem.product_name);
                            } else {
                                console.log("Thank you for purchasing " + answer.numberOfUnits + " " + selectedItem.product_name + "es");
                            }
                            console.log("*******************************");
                        }
                    }
                }


            }) 
        })
    };

function listItems() {
    connection.query("SELECT * FROM bamazon", function(err, res) {
        if (err) throw err;

        console.log("Current Inventory: \n");

        for(var i=0; i<res.length; i++) {
            console.log("ID: " + res[i].item_id + " -- " + res[i].product_name + " -- $" + res[i].price + " -- " + res[i].stock_quantity + " in stock");
        }
    });
};