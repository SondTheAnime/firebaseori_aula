import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../services/firebaseConnections";

export function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('Cadastrado com sucesso! \n' + value.user.uid);
        })
        .catch(error => console.error(error));        
    };

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('Login com sucesso!');
        })
        .catch(error => console.error(error));        
    };

   return (
        <View style={styles.container}>
            <Text style={styles.title}>Firebase App</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Cadastrar" onPress={() => createUser()}/>
            <Button title="Entrar" onPress={() => login()}/>    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
});
