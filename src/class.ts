// Class in TypeScript

class Person {

    public zone = "Air Ber"
    protected city = "Los Angeles";
    private country = "USA";

    constructor(){}

    greet() : void { 
        console.log("Hello!!!!!");
    }
}

// en la clases tambien se puede extender otras clases
class Employee extends Person {

    constructor(private readonly id: number, private readonly name: string, private dept: string){        /* Si se colocae el private en esta parte y no antes, se refactoriza codigo yt el resultado es el mismo, a esto se le conoce como automatic properties en TS */
        super(); //por extends
        this.showInfo();
    }

    private showInfo() : void {
        console.log(`${this.name} esta en el deparmento de ${this.dept} en ${this.zone} en ${this.city}`);
    }
}   

const emp = new Employee(12, "JIMITO", "TECH");
emp.greet();


// las propiedades privadas no se extienden a otras clases
// las protected solamente tienen acceso a las clases que sean heredadas
// La palabra reservada readonly significa que despues de inicializar la clase, no se puede reasignar porque es de solo lectura