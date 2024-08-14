//async await
const obtenerPokemones = async()=>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await response.json()
        const searchPokemon = data.results.filter(element=> element.name !== 'bulbasaur')//Distinto de bulbasaur, un nuevo array si bulbasaur
        console.log(searchPokemon)
    }catch(error){
        console.log(error)
    }
}

obtenerPokemones()