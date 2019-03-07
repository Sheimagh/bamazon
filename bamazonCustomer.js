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
    connection.end();
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
    //start of no 7 & 8
    .then(function (value) {
      // select id products
      console.log(value)
      //call the database to check the quantity
      //compare, available quantity to customers request
      //complete purchase if right there is enough quantity, total cost of purchase and update the database
      //include not having enough quantity
  