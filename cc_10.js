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
    constructor(products) {
        this.products = []; // Add property products (array of Product instances)
    }

    addProduct(product) { // Add method addProduct(product) that adds a new product to inventory
        this.products.push(product); 
    }

    listProducts() { // Add method listProducts() that logs all products' details
        return this.products.forEach(product => product.getDetails()); 
    }
}

// Test Cases:
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

