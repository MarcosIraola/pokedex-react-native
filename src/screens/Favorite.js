import { Text } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from "@react-navigation/native"
import { getPokemonFavorites } from '../api/favorite'
import { getPokemonById } from '../api/pokemon'
import useAuth from '../hooks/useAuth';
import PokemonList from '../components/PokemonList';
import NoLogged from '../components/NoLogged'

export default function Favorite() {

    const [pokemons, setPokemons] = useState([]);
    const { auth } = useAuth();

    useFocusEffect(
        useCallback(() => {
            if(auth) {
                (async () => {
                    const response = await getPokemonFavorites();
                    const pokemonsArray = []
    
                    for await (const id of response) {
                        const pokemonDetails = await getPokemonById(id)
                        pokemonsArray.push({
                            id: pokemonDetails.id,
                            name: pokemonDetails.name,
                            type: pokemonDetails.types[0].type.name,
                            order: pokemonDetails.order,
                            imagen: pokemonDetails.sprites.other['official-artwork'].front_default
                        })
                    }
                    setPokemons(pokemonsArray)
                })()
            }
        }, [auth])
    )

    return (
        !auth ? (
            <NoLogged />
        ) : (
            <PokemonList pokemons={pokemons}/>
        )
    )
}