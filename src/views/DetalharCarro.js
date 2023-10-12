import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, Linking } from 'react-native';


export default props => {

    const [carro, setCarro] = useState({})
    const { id } = props.route.params

    fetch('https://apoloc43.pythonanywhere.com/api/amigos/${id}')
        .then(data => data.json())
        .then(json => setCarro(json))
        .catch(error => console.warn(error))


    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.modelo}
                    source={{ uri: carro.modelo }}
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Marca</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Marca"
                    value={carro.marca}
                />
                <Text style={styles.label}>Modelo</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Modelo"
                    value={carro.modelo}
                />
                <Text style={styles.label}>Bio</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Bio"
                    value={carro.info}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '80%',
    },
    label: {
        marginTop: 20,
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    avatarContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    changeAvatarButton: {
        marginTop: 10,
    },
    changeAvatarButtonText: {
        color: '#1E90FF',
        fontSize: 18,
    },
    socialIcons: {
        flexDirection: 'row'
    }
});