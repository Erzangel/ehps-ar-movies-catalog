import React, { useState } from 'react';
import { ImageBackground, StatusBar } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


const SignupScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const imageLogo = require("./Mirage_Font_logo.png");

  const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  const validatePassword = (password) => {
    const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    return passwordRegex.test(password);
  }

  const handleSignup = () => {
    if (!validateEmail(email)) {
      alert("Veuillez entrer un email valide");
      return;
    }
    if (!validatePassword(password)) {
        alert("Le mot de passe doit contenir au moins 1 majuscule, 1 minuscule, 1 chiffre et 8 caractères au total")
        return;
      }
    // Code pour effectuer l'inscription
    props.navigation.navigate('Login' ,{ email: email, password: password });
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
      <ImageBackground source={imageLogo} style={styles.imageWelcome} />
      </View>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Mot de passe"
       
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C5DDF1',
  },
  imageWelcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  welcomeContainer: {
    textAlign: 'center',
    alignSelf: 'center',
    height: 100,
    width: 200,
  },
  text: {
  fontSize: 20,
  marginBottom: 20,
  },
  title: {
    color: '#4094DC',
    fontWeight: 'bold',
  },
  input: {
  height: 40,
  width: '90%',
  borderColor: 'gray',
  borderBottomWidth: 1,
  marginBottom: 20,
  padding: 10,
  fontWeight: 'bold',
  },
  button: {
  height: 40,
  width: '90%',
  backgroundColor: '#0069C6',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  },
  buttonText: {
  fontWeight: 'bold',
  color: '#C5E4FF',
  },
});
    