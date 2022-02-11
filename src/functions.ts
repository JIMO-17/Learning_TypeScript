// tambien puede tener valores por default
function greet (name: string = 'user') : void {
    console.log(`Hello, ${name.toUpperCase()}` !!);
}
greet("josue");
// greet(true); /* error */
// greet(24); /* error */
greet();


// en las funciones tambien puede haber inferencia, pero es mejor indicarlo
// el tipo que retornara getNumber(): number 
function getNumber() : number {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());


// con el signo de pregunta en los argumentos, significa que es opcional y tambien puede haber unions
function printPosition(position: {lat: number, long?: number | string}) : void {
    console.log(`Latitude & Longitude are: LAT: ${position.lat} LONG: ${position.long}`);
}
printPosition({lat: 7, long: 23});
printPosition({lat: 45});
printPosition({lat: 7, long: "242"});