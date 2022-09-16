import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { addPokemonToFavorite, isPokemonFavorite,removePokemonFromFavorite } from '../../api/favorite'

export default function Favorite(props) {

    const { id } = props;

    const [isFavorite, setIsFavorite] = useState(undefined);
    const [reloadIcon, setReloadIcon] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavorite(id);
                setIsFavorite(response)
            } catch (error) {
                setIsFavorite(false)
            }
        })()
    }, [id, reloadIcon])

    const onReloadCheckFavorite = () => {
        setReloadIcon(!reloadIcon);
    }

    const addFavorite = async () => {
        try {
            await addPokemonToFavorite(id);
            onReloadCheckFavorite()
        } catch (error) {
            console.log(error);
        }
    }

    const removeFavorite = async () => {
        try {
            await removePokemonFromFavorite(id);
            onReloadCheckFavorite()
        } catch (error) {
            console.log(error);
        }
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