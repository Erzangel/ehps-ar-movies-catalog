
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [underline, setUnderline] = useState(false);
 // console.log(props.getParam?.email)
  //console.log(props.route.params)
  useEffect(() => {
    const email = props.route.params?.email;
    const password = props.route.params?.password;
    if (email) setEmail(email);
    if (password) setPassword(password);
    
  }, [props.route.params]);

  useFocusEffect(
    React.useCallback(() => {
      setUnderline(false);
    }, [])
  );

  
  const handleLogin = () => {
    props.navigation.navigate('Home');
    setEmail("");
    setPassword("");
  }
  return (
    <View style={styles.container}>
    <Text style={styles.title}>S'identifier</Text>
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
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.registerContainer}>
  <Text style={styles.registerText}>Pas de compte ?</Text>
  <TouchableOpacity
  style={styles.registerLink}
  onPress={() => {
    setUnderline(!underline);
    props.navigation.navigate('Register');
   
  }}
  underlayColor="transparent"
>
<Text style={underline ? styles.underlineText : styles.normalText}>inscrivez-vous.</Text>
</TouchableOpacity>
</View>
</View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  },
  text: {
  fontSize: 20,
  marginBottom: 20,
  },
  input: {
  height: 40,
  width: '90%',
  borderColor: 'gray',
  borderWidth: 1,
  marginBottom: 20,
  padding: 10,
  },
  button: {
  height: 40,
  width: '90%',
  backgroundColor: '#007aff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  buttonText: {
  color: 'white',
  },
  registerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  },
  registerText: {
  color: 'black',
  },
  registerLink: {
  marginLeft: 5,
  },
  underlineText: {
  color: 'black',
  textDecorationLine: 'underline'
  },
  normalText: {
  color: 'black'
  },
  });



/*

import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import t from 'tcomb-form-native'
//npm install tcomb-form-native

var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  rememberMe: t.Boolean        // a boolean
});

const Registration = () => {
    return (
<View>
<Text>Inscritpion</Text>
<TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue=""
      />
</View>
    );
};

export default Registration;
*/