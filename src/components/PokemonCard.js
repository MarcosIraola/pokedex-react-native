import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import React from 'react'
import getColorByPokemonType from '../../utils/colors';

export default function PokemonCard(props) {

    const { pokemon } = props;

    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    const goToPokemon = () => {
        console.log(`Vamos a: ${pokemon.name}`)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <ImageBackground style={styles.bgImage} source={require('../assets/background-test.png')}/>
                        <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Image source={{uri: pokemon.imagen}} style={styles.image}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex:1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    image: {
        position:"absolute",
        bottom: 10,
        right: 10,
        width: 90,
        height: 90
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        padding: 0,
        textTransform: 'capitalize'
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 8,
        fontSize: 14,
        paddingLeft: 8,
        paddingTop: 5,
        color: '#fff'
    },
    bgImage: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        opacity: 0.1,
        resizeMode: 'contain'
    }
})