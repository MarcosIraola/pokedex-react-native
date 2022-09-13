import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemonById } from '../api/pokemon';


export default function Pokemon(props) {

    const { navigation, route: {params} } = props;

    const [pokemon, setPokemon] = useState()

    useEffect (() => {
        (async () => {
            try {
                const response = await getPokemonById(params.id);
                setPokemon(response);
            } catch (error) {
                navigation.goBack()
            }
        })()
    }, [params])

    if (!pokemon) return null

    return (
        <View>
            <Text>Esto es un POKEMON</Text>
            <Text>{pokemon.name}</Text>
        </View>
    )
}