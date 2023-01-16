
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // console.log(props.getParam?.email)
  //console.log(props.route.params)
  useEffect(() => {
    const email = props.route.params?.email;
    const password = props.route.params?.password;
    if (email) setEmail(email);
    if (password) setPassword(password);
  }, [props.route.params]);

  
  const handleLogin = () => {
    props.navigation.navigate('Home');
    setEmail("");
    setPassword("");
  }
  const [underline, setUnderline] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>S'identifier</Text>
      <TextInput
        style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={{ height: 40, width: '90%', borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholder="Mot de passe"
        secureTextEntry={true}
      />
      <TouchableOpacity style={{ height: 40, width: '90%', backgroundColor: '#007aff', alignItems: 'center', justifyContent: 'center' }} onPress={handleLogin}>
        <Text style={{ color: 'white' }}>Se connecter</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
  <Text style={{ color: 'black' }}>Pas de compte ?</Text>
  <TouchableOpacity
  style={{ marginLeft: 5 }}
  onPress={() => {
    setUnderline(!underline);
    props.navigation.navigate('Register');
  }}
  underlayColor="transparent"
>
  <Text style={{ color: 'black', textDecorationLine: underline ? 'underline' : 'none' }}>inscrivez-vous.</Text>
</TouchableOpacity>
</View>

    </View>
  );
};

export default LoginScreen;

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