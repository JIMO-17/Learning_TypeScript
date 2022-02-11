// Type Assertion
let channel : any = "JIMO";

// pasar a un tipo de dato 1ra manera
let channelStr = <string>channel;
// segunda manera
let channelStr2 = channel as string;

/* aqui hay una inferencia de tipos, por lo que dice que recibe un elemento HTML o un Null, pero para ello se usa el as para definir el tipo de dato */
const myCanvas = document.getElementById('main') as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main');