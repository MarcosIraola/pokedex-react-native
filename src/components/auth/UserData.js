import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth';

export default function UserData() {

    const { logout } = useAuth();

    return (
        <View>
            <Text>UserData</Text>
            <Button 
                title="Cerrar sesión"
                onPress={logout}
            />
        </View>
    )
}