import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { getPokemonById } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';

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

    if (!pokemon) return null;
    return (
        <ScrollView>
            <Header 
                name={pokemon.name} 
                order={pokemon.order} 
                image={pokemon.sprites.other['official-artwork'].front_default} 
                type={pokemon.types[0].type.name}
            />
            <Type 
                types={pokemon.types}
            />
        </ScrollView>
    )
}