// Generics

interface Person {
    id: number;
    name: string;
}

interface Employee extends Person{
    role: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

// generics in interface
interface Data<T>{
    addItem(newItem: T) : void;
}

// <T> generics in class
class DataCollection <T extends {id: number, name: string}> implements Data<T>{
    private items: T[] = [];

    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items));
    }

    getName() : string[] {
        return this.items.map((item) => item.name);
    }

    getItemById(id: number): T | undefined {
        return this.items.find((item: T) => item.id === id);
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

const productCollection = new DataCollection<Product>();
const newData3 = {
    id: 2,
    name: "sweet",
    price: 3435
}

productCollection.addItem(newData3);
productCollection.getItems();

const personCollection = new DataCollection<Employee>();