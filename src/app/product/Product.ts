export class Product {
    uid: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    stock: number;
    constructor(uid, name, brand, description, price, stock) {
        this.uid = uid;
        this.name = name; this.brand = brand; this.description = description; this.price = price; this.stock = stock;
    }
};