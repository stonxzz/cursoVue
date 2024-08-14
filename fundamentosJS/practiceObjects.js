const web = {
    //se pueden crear objetos dentro de objetos, dentro de objetos
    nombre: 'bluuweb',
    links: {
        enlace: 'www.bluuweb.cl'
    },
    redesSociales: {
        youtube :{
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'
        }, 
        facebook: {
            enlace: 'facebook.com',
            nombre: 'stonxz'
        }
    }
}
//Imprimir el enlace a yt
console.log(web.redesSociales.youtube.enlace)

const enlaceYT = web.redesSociales.youtube.enlace
console.log(enlaceYT)

//Ahora usando destructuracion
const {enlace, nombre} = web.redesSociales.youtube
console.log(enlace)
console.log(nombre)
