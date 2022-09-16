import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';
import { capitalize, size } from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getPokemonFavorites } from '../../api/favorite';

export default function UserData() {

    const { auth, logout } = useAuth();
    const user = { ...auth }

    const [total, setTotal] = useState(0);

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const response = await getPokemonFavorites();
                    setTotal(size(response))
                } catch (error) {
                    setTotal(0)
                }
            })()
        }, [])
    )

    return (
        <View style={styles.content}>
            <View style={styles.titleBlock}>
                <Text style={styles.title}>Bienvenido, {capitalize(user.firstName)}.</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title="Username" text={`${user.username}`}/>
                <ItemMenu title="Nombre" text={`${user.firstName} ${user.lastName}`}/>
                <ItemMenu title="Email" text={`${user.email}`}/>
                <ItemMenu title="Favoritos" text={`${total} Pokemons`}/>
            </View>
            <Button
                title="Cerrar sesión"
                onPress={logout}
            />
        </View>
    )
}

function ItemMenu (props) {
    const {title, text} = props;
    const [value, setValue] = useState('read')

    return (
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}: </Text>
            <Text style={styles.itemMenuValue}>{text}</Text>
            <Icon style={styles.icon} name="edit" color='gray' size={20} />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20
    },
    titleBlock: {
        marginBottom: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22
    },
    dataContent: {
        marginBottom: 20
    },
    itemMenu: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#CFCFCF'
    },
    itemMenuTitle: {
        fontWeight: 'bold',
        paddingRight: 10,
        width: 120
    },
    itemMenuValue: {
        width: 170
    },
    icon: {
        right: 0
    }
})