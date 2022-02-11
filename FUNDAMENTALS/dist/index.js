"use strict";
//Basic Types
let myTypeString = "Hello World";
let myTypeNumber = 17;
let myTypeboolean = true;
//al ser tipado no se puede reemplazar por otro tipo de dato because mostrara error
// myTypeString = 17;
// myTypeString = true;
// Array
//se declara el tipo de datos que tendra el array junto a los corchetes para indicar que es array de las siguientes manera como ejemplo
// tambien muetsra error si se añade un dato que no corresponda al tipo de que se declaro
let arrNumber = [2, 3, 5];
let arrNumber2 = [4, 6, 7];
let arrstring = ["red", "blue", "black"];
// array de cualquier tipo se hace uso del Any ( sirve tambien para las variables), no es muy recomendable, solo para excepciones
let arrAny = ["hello", 23, true];
// Tuple
let tuplePlayers = ["Josue", 17, true];
// Tupple array
let players;
players = [
    [1, "Lebron"],
    [2, "jordan"],
    [3, "Kevin"]
];
//INFERENCIA DE TIPOS EN TYPESCRIPT
//Es cuando typescrip asigna el tipo de dato segun el valor inicial de dicha variable
let myVariable;
let myVariable1;
let myVariable2 = "Hello World";
let myVariable3 = 898;
let myVariable4 = false;
// Composicion de Tipos - indicar que puede una variable ser de varios tipos segun se declare
// Unions
let myVar1;
myVar1 = "test";
myVar1 = 98349;
myVar1 = null;
// myVar1 = true;  /* esto muestra error */
