import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { getPokemonById } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth'

export default function Pokemon(props) {

    const { navigation, route: {params} } = props;

    const [pokemon, setPokemon] = useState()
    const { auth } = useAuth();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => auth ? <Favorite id={pokemon?.id}/> : undefined,
            headerLeft: () => 
                <Icon 
                    name="arrow-left" 
                    color="#fff" 
                    size={20} 
                    style={{ marginLeft: 20, marginTop: 10}}
                    onPress={navigation.goBack}
                />
        })
    }, [navigation, params, auth, pokemon])

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
            <Stats 
                stats={pokemon.stats}
            />
        </ScrollView>
    )
}