import { View, Text, TextInput, StyleSheet, Button, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB'

export default function LoginForm() {

    const [error, setError] = useState();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            setError('')
            if(formValue.username !== user.username || formValue.password !== user.password) {
                setError('El usuario o la contraseña no coinciden')
            } else {
                console.log('Login Ok');
                console.log(userDetails);
            }
        }
    })

    function initialValues(){
        return {
            username: '',
            password: ''
        }
    }
    
    function validationSchema() {
        return {
            username: Yup.string().required("El usuario es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria"),
        }
    }

    return (
        <View>
            <Text style={styles.title}>Inciar Sesion</Text>
            <TextInput
                placeholder='Nombre de usuario'
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />
            <TextInput
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <Button 
                title="Entrar"
                onPress={formik.handleSubmit}
            />
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        color: '#f00',
        paddingLeft: 20,
        marginBottom: 10
    }
})