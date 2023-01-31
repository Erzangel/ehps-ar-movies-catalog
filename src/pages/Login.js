
import React, { useEffect, useState } from 'react';
import { ImageBackground, StatusBar } from "react-native";
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

  const imageLogo = require("./Mirage_Font_logo.png");

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
      console.log("yo")
      const url = `${baseUrl}/userbyemail/${email}`
      const response = await axios.get(url);
      console.log("response: " + response)
      console.log("response data id: " + response.data.id)
      if (response.status === 200 && email!== "") {
        setUserId(response.data.id);
       try {
        const url2 = `${baseUrl}/userAuth/${userId}`
        console.log("avant + url2: " + url2)
        console.log("password: " + password)
        const response2 = await axios.put(url2, {"password": password});
        console.log("après")
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
              console.log("Response Statut", response3.status);
              throw new Error("Mot de passe invalide");
             
            }
          } catch (error) {
            console.log("Response Statut", response3.status);
            alert("ERREUR 404");
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
    /*try { 
      console.log("aaaaa");
      setIsLoading(true);
      const response = await axios.get(url, { cancelToken: source.token });
      if (response.status === 200) {
        setUser(response.data.data);
        console.log("good");
        setIsLoading(false);
        return;
      } else {
        console.log("erreur");
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      if(axios.isCancel(error)){
        console.log('Data fetching cancelled');
      }else{
        setErrorFlag(true);
        setIsLoading(false);
      }
    }
*/
  }

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <ImageBackground source={imageLogo} style={styles.imageWelcome} />
      </View>
      <Text style={styles.title}>Connexion</Text>
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
          <Text style={underline ? styles.underlineText : styles.normalText}>Inscrivez-vous.</Text>
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
  registerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
  },
  registerText: {
  color: '#4094DC',
  fontWeight: 'bold',
  },
  registerLink: {
  marginLeft: 5,
  },
  underlineText: {
  color: 'black',
  textDecorationLine: 'underline'
  },
  normalText: {
    color: '#1A64A6',
    fontWeight: 'bold',
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