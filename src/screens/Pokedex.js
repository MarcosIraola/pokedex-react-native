import { SafeAreaView, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemons } from '../api/pokemon'

export default function Pokedex() {

    const [pokemons, setPokemons] = useState([])

    useEffect (() => {
        (async () => {
            await loadPokemons();
        })()
    }, [])

    const loadPokemons = async () => {
        try {
            const response = await getPokemons()
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <Text>Pokedex</Text>
        </SafeAreaView>
    )
}

