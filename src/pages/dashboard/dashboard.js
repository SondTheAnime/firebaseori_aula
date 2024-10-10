// src/pages/dashboard.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth'; 

import { auth } from '../../services/firebaseConnections'; 

export function Dashboard() {

    // const navigation = useNavigation(); 

    async function logout(){
        await signOut(auth)
        .then(() => {
            console.log('Usuário deslogado com sucesso!');
            // navigation.navigate('Home'); 
        })
        .catch(error => console.error(error));
        }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Dashboard!</Text>
      <Button title="Sair" onPress={logout} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize:   
 24,
    fontWeight: 'bold',   

    marginBottom: 20, // Adicionei uma margem inferior para separar o título do botão
  },
});