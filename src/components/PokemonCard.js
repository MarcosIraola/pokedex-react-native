import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function PokemonCard(props) {

    const { pokemon } = props;

    const goToPokemon = () => {
        console.log(`Vamos a: ${pokemon.name}`)
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        {/* <Text style={styles.order}>#{pokemon.order}</Text> */}
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
        backgroundColor: "grey",
    },
    image: {
        position:"absolute",
        bottom: 10,
        right: 0,
        width: 90,
        height: 90
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
        padding: 8,
        textTransform: 'capitalize'
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        fontSize: 12,
        paddingLeft: 8,
        paddingTop: 5,
        color: '#fff'
    }
})