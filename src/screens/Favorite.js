import { SafeAreaView, Text, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemonFavorites } from '../api/favorite'

export default function Favorite() {

    const [favorites, setFavorites] = useState(null)

    const checkFavorites = async() => {
        const response = await getPokemonFavorites()
        console.log(response);
    }

    return (
        <SafeAreaView>
            <Text>Favorite</Text>
            <Button title='get favorites' onPress={checkFavorites}/>
        </SafeAreaView>
    )
}