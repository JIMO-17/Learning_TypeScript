"use strict";
// Class in TypeScript
//class Employee {
// atributes
// id!: number;  /* para evitar que salga el error de "Property "name" has no initializer and is not definitely assigned in the constructor se coloca el sino de exclamacion como se ve en el ejemplo, o la otra opcion es ir al tsconfig */
/*     private id: number;
    private name: string;
    private dept: string; */
// el siguiente method es el primer que se ejecuta cuando se instacia la clase
/*     constructor(id: number, name: string, dept: string){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    } */
// methods
// no se usa la palabra function, se indica que retorna y para usar los atributos se debe usar el this
/*     private showInfo() : void {
        console.log(`${this.name} esta en el deparmento de ${this.dept}`);
    }
}  */
// Instancia de la clase
//const emp = new Employee(12, "JIMITO", "TECH");
// por decfecto el access control keywords es public, pero se puede especificar por public, private, protected
