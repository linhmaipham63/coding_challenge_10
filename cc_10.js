// Task 1: Creating a Product Class

// Create class Product
class Product {
    constructor(name, id, price, stock) {
        this.name = name; // Assign property name (string)
        this.id = id; // Assign property id (number)
        this.price = price; // Assign property price (number)
        this.stock = stock; // Assign property stock (number)
    }

    // Add method getDetails() that returns a formatted string of product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`; 
    }

    // Add method updateStock(quantity) that modifies the stock level when an order is placed
    updateStock(quantity) {
        return this.stock = this.stock - quantity; 
    }
}

// Test Cases:
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 

prod1.updateStock(3);
console.log(prod1.getDetails()); 


// Task 2: Creating an Order Class

// Create Order class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId; // Assign property orderId (number)
        this.product = product; // Assign property product (instance of Product)
        this.quantity = quantity; // Assign property quantity (number)

        this.product.updateStock(quantity); // Reduce stock when order is created
    }

    // Add method getOrderDetails() that returns order details
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`
    }
}

// Test Cases:
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 

console.log(prod1.getDetails()); 


// Task 3: Creating an Inventory Class

// Create Inventory class
class Inventory {
    constructor(products, orders) {
        this.products = []; // Add property products (array of Product instances)
        this.orders = []; // Task 4: Add a orders array in the Inventory class
    }

    addProduct(product) { // Add method addProduct(product) that adds a new product to inventory
        this.products.push(product); 
    }

    listProducts() { // Add method listProducts() that logs all products' details
        return this.products.forEach(product => product.getDetails()); 
    }

    // Task 4: Add method placeOrder that creates a new order and adds it to orders if stock is available
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) { // Check if stock is available 
            let order = new Order(orderId, product, quantity); // Create a new order
            this.orders.push(order); // Add the new order to orders
        }
        else return `Insufficient stock to create a new order`; 
        
    }

    // Task 4: Add method listOrders() that logs all placed orders
    listOrders() {
        return this.orders.forEach(order => console.log(order.getOrderDetails())); 
    }

    // Task 5: Add method restockProduct(productId, quantity) that increases the stock of the product
    restockProduct(productId, quantity) {
        this.products.map(product => {
            if (product.id === productId) {
                return product.stock += quantity; 
            }
        }); 
    }
}

// Test Cases:
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();


// Task 4: Implementing Order Management

// Test Cases:
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());


// Task 5: Implementing Product Restocking

// Test Cases:
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 