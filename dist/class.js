"use strict";
// Class in TypeScript
class Person {
    constructor() {
        this.zone = "Air Ber";
        this.city = "Los Angeles";
        this.country = "USA";
    }
    greet() {
        console.log("Hello!!!!!");
    }
}
// en la clases tambien se puede extender otras clases
class Employee extends Person {
    constructor(id, name, dept) {
        super(); //por extends
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    showInfo() {
        console.log(`${this.name} esta en el deparmento de ${this.dept} en ${this.zone} en ${this.city}`);
    }
}
const emp = new Employee(12, "JIMITO", "TECH");
emp.greet();
// las propiedades privadas no se extienden a otras clases
// las protected solamente tienen acceso a las clases que sean heredadas
// La palabra reservada readonly significa que despues de inicializar la clase, no se puede reasignar porque es de solo lectura
