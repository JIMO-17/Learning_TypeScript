"use strict";
// Generics
// <T> generics in class
class DataCollection {
    constructor() {
        this.items = [];
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getName() {
        return this.items.map((item) => item.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
/* const personCollection = new DataCollection();
const newData = {
    id: 23,
    name: "ISAI"
}
const newData2 = {
    id: 23,
    name: "ISAI"
}
personCollection.addItem(newData);
personCollection.addItem(newData2);
personCollection.getItems(); */
const productCollection = new DataCollection();
const newData3 = {
    id: 2,
    name: "sweet",
    price: 3435
};
productCollection.addItem(newData3);
productCollection.getItems();
const personCollection = new DataCollection();
