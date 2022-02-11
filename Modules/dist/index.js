"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myModule_1 = require("./myModule");
const myModule_2 = require("./myModule");
// import * as myCode from "./myModule";
const user = {
    id: 1,
    name: "JIMO"
};
// console.log(PI);
console.log(myModule_2.PI);
console.log(user);
console.log((0, myModule_1.generateRandomNumber)());
