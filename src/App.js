import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListarCarros from "./views/ListarCarros";
import DetalharCarro from "./views/DetalharCarro";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListarCarros" screenOptions={screenOptions} >
                <Stack.Screen name="ListarCarros" component={ListarCarros}
                    options={() => {
                        return {
                            title: "Meus Carros"
                        }
                    }}
                />
                <Stack.Screen name="DetalharCarro" component={DetalharCarro}
                    options={() => {
                        return {
                            title: "Perfil do Carro"
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#0dcaf0'
    },
    headerTintColor: 'white',
    headerTintStyle: {
        fontWeight: 'bold'
    }

}