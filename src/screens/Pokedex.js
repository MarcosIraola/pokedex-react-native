import { SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getAllPokemonsApi, getPokemonByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {

    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState(null);

    useEffect (() => {
        (async () => {
            await loadPokemons();
        })()
    }, [])

    const loadPokemons = async () => {
        try {
            const response = await getAllPokemonsApi(nextUrl);
            setNextUrl(response.next)
            const pokemonsArray = []

            for await (const pokemon of response.results) {
                const pokemonDetails = await getPokemonByUrlApi(pokemon.url)
                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    imagen: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }

            setPokemons([...pokemons, ...pokemonsArray]);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
        </SafeAreaView>
    )
}

