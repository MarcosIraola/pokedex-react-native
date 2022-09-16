import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonToFavorite, isPokemonFavorite } from '../../api/favorite'

export default function Favorite(props) {

    const { id } = props;

    const [isFavorite, setIsFavorite] = useState(undefined);

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavorite(id);
                setIsFavorite(response)
            } catch (error) {
                setIsFavorite(false)
            }
        })()
    }, [id])

    const addFavorite = async () => {
        await addPokemonToFavorite(id);
    }

    const removeFavorite = async () => {
        console.log('delete fav');
    }

    return (
        <Icon 
            name="heart" 
            color="#fff" 
            size={20} 
            solid={isFavorite}
            style={{ marginRight: 20, marginTop: 10}}
            onPress={isFavorite ? removeFavorite : addFavorite}
        />
    )
}