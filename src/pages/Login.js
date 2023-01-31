
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const baseUrl = "http://90.91.27.127:25565";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

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

  
  const handleLogin = async () => {
    try {
      const url = `${baseUrl}/userbyemail/${email}`
      const response = await axios.get(url);
      if (response.status === 200 && email!== "") {
        setUserId(response.data.id);
       try {
        const url2 = `${baseUrl}/userAuth/${response.data.id}`
        const response2 = await axios.put(url2, {"password": password});
        if (response2.status === 200) {
          try {
            const url = `${baseUrl}/users/${response.data.id}`
            const response3 = await axios.get(url);
            if (response3.status === 200) {
              
              const user = {
                id: response3.data.id,
                email: response3.data.email,
                username: response3.data.username
              };
              props.navigation.navigate('Home',{user : user});
              setEmail("");
              setPassword("");
            } else {
              console.log("Response Statut", response2.status);
              throw new Error("Mot de passe invalide");
             
            }
          } catch (error) {
            console.log("Response Statut", response2.status);
            alert("Mot de passe invalide");
          }
        } else {
          console.log("Response Statut", response2.status);
          throw new Error("Mot de passe invalide");
         
        }
      } catch (error) {
        console.log("Response Statut", response2.status);
        alert("Mot de passe invalide");
      }


      } else {
        console.log(response.status);
        throw new Error("email invalide");
       
      }
    } catch (error) {
      console.log(response.status);
      alert("email invalide");
    }

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