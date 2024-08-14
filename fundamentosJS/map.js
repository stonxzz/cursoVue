//async await
const obtenerPokemones = async()=>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        const namePokemons = data.results.map(element=> element.name)
        console.log(namePokemons)
    }catch(error){
        console.log(error)
    }
}

obtenerPokemones()