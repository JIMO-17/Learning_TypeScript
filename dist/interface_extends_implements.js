"use strict";
// Interfaces
// para evitar repeticion, se puede realizar extends(que es como una herencia en Java) par ano tener que escribir y repetir tantas interfaces asi:
/* interface Person {
    id: number;
    name: string;
}
interface Employee {
    id: number;
    name: string;
    dept: string;
}
interface Customer {
    id: number;
    name: string;
    country: string;
} */
/*Necesita de todas las propiedases incluso las heredadas */
// const emp: Employee = {}
const emp = {
    dept: "",
    id: 0,
    name: ""
};
class Zoo {
    constructor() {
        this.name = "Ally";
    }
    getCats() {
        // 
    }
    ;
    getDogs() {
        // 
    }
}
