import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorite(props) {


    const { id } = props;

    const addFavorite = () => {
        console.log("Anadir a fav", id);
    }

    return (
        <Icon 
            name="heart" 
            color="#fff" 
            size={20} 
            style={{ marginRight: 20, marginTop: 10}}
            onPress={addFavorite}
        />
    )
}