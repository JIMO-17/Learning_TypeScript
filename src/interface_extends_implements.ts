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

// mejor de la siguiente manera: 
interface Person {
    id: number;
    name: string;
}
interface Employee extends Person {
    dept: string;
}
interface Customer extends Person {
    country: string;
}

/*Necesita de todas las propiedases incluso las heredadas */
// const emp: Employee = {}
const emp: Employee = {
    dept: "",
    id: 0,
    name: ""
}
/* emp.id = 100
emp.name = "John"
emp.dept = "San Francisco" */


/* --------------------------------------------------------------------------- */
// SE peude combinar interfaces con clases
interface Animal {
    name: string;
    getDogs: () => void;
    getCats?: () => void;
}

class Zoo implements Animal {

    name = "Ally";

    getCats(): void {
        // 
    };

    getDogs(): void {
        // 
    }
}
