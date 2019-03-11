//For this HW I used 12.2-10-GreatBay as reference

//Packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  // my username
  user: "root",

  // my password
  password: "password",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the readProducts function after the connection is made to prompt the customer/in another word to read list of products before the funtion starts
  readProducts();
});

// function let the customer to see the products list before input the value
function readProducts() {
  console.log("Selecting all products...\n");
  //call back
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // print the result
    console.log(res);
    // This is more like global scope, "start" will prompt the customers with two messages, call start after readProducts function ends
    start();
    //  connection.end(); ONCE A QUERY IS MADE, DONT END CONNECTION UNTIL YOU'RE FINISHED ACCESSING THE DB THROUGH THE ENTIRE QUERY CYCLE (END OF PAGE)
  });
}
//this function will prompt users with two messages
function start() {
  inquirer
    .prompt([{
      name: "products",
      type: "value",
      message: "What is the ID of the product that works best for you [Changed your mind? Press Y]?"
    },
    {
      name: "quantity",
      type: "value",
      message: "How many units of the product you would like to buy?"

    }])
    .then(function (value) {
      var newQuery = "SELECT * FROM products WHERE id =" + value.products; //requesting specific product data using the return from "products" prompt
      connection.query(newQuery, function (err, res) {
        //if (value.quantity <= res) {

        //looping through the specific product data returned

        for (var i = 0; i < res.length; i++) {

          //first checking whether there is any inventory and console logging if not

          if (res[i].stock_quantity === 0) {
            console.log("Sorry, but not enough of this product in stock.");
          }

          //Second, checking whether the requested amount is above what is currently in stock

          else if (value.quantity > res[i].stock_quantity) {
            console.log("We currently only have " + res[i].stock_quantity + " " + res[i].product_name + ".");
          }

          //third, checking for whether the requested amount is below or equal to current inventory, creating a successful order- this should also include final price as well
          else if (value.quantity <= res[i].stock_quantity) {
            console.log("Thank you for your order! Your order of " + value.quantity + " " + res[i].product_name + " is now being processed.");
          }
        }

      })
      connection.end();
    })
};
