const mascota = {
    nombre: 'Firulais',
    edad: 99,
    vivo: true,
    raza: ['chihuahua','tamal']
}

// console.log(mascota)
// console.log(mascota.raza)
// console.log(mascota.raza[1])
// console.log(mascota.nombre)
// console.log(mascota.vivo)

// //Agregar otra propiedad
// mascota.id = 1//Ahora si se usa el igual como operador de asignacion por que estamos fuera del objeto
// console.log(mascota)

// mascota.ropa = ['Blusa', 'Pantalón', 'Chamarra']
// console.log(mascota)

//Destructuring objects

// const nombre = mascota.nombre

const {edad, nombre} = mascota //asi se puede acceder a la propiedad y guardarla en esa variable sin tener que acceder a la propiedad
console.log(edad)
console.log(nombre)