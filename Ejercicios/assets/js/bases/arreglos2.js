let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length );

let primero = juegos[ 2 - 2 ];
let ultimo  = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos });


let metroidIndex = juegos.indexOf('Metroid');
console.log({ metroidIndex });


/* ARRAYS */
let juegos= ['mario', 'gta', 'nfs'];

juegos.push('agregaAlFinal');
juegos.unshift('agregaEnPrimerPosicion');
juegos.pop() // elimina el ultimo;
juegos.splice(1,1) // borra desde la posicion 1 , 1 elemento
juegos.indexOf('nfs') // devuelve la posicion de nfs -1 si no lo encuentra

/* OBJETOS */
let personaje ={
    nombre: 'Tony',
    apellido: 'El barbaro',
    vivo: false,
    edad: 40
};
console.log ('Nombre ', personaje.nombre);
delete personaje.edad;
const entriesPares = Object.entries( personaje ); // con esto consigo verlo como un array 
Object.freeze( personaje ) // es como el const para objetos no me lo permite modificar, ya que solo const lo unico que hace es no poder reasignar personaje = 1
