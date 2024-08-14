
fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response)=> response.json())
.then((data)=>{
    // console.log(data.results)
    data.results.forEach(element =>{
        console.log(element.name)
    })
})
.catch(error => console.log(error))

// Ejercicio 1: Obtener un Usuario
// Crea una función llamada obtenerUsuario que haga una solicitud a la API de JSONPlaceholder para obtener los datos 
// de un usuario específico y luego muestra los datos en la consola.

// Instrucciones:

// Usa fetch para hacer la solicitud GET.
// Convierte la respuesta en JSON.
// Muestra en la consola el nombre del usuario y su correo electrónico.

function obtenerUsuario(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((response) => {
        return response.json()
    })
    .then((data) =>{
        console.log(data)
        data.forEach(user =>{
            console.log(`Usuario: ${user.userId}`)
            console.log(`Titulo ${user.title}`)
        })
    })
    .catch(error=> console.log(error))
}

obtenerUsuario()

