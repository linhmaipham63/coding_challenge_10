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

