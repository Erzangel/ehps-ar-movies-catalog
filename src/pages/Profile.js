import React, { useEffect, useState } from 'react';
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import NavigationBar from "../components/BottomTabNavigator";
import { View, Text, Image } from 'react-native';
import axios from 'axios';


const baseUrl = "http://90.91.27.127:25565";

const Profile = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [userId, setUserId] = useState(props.route.params?.userId)


  useEffect(() => {
    setUserId(props.route.params?.userId);
   // setUser(getUser());
   
   
    //console.log("user : ",user)
  }, [props.route.params]);

  const getUser = async () => {
    try {
      const url = `${baseUrl}/users/${userId}`
      const response = await axios.get(url);
      if (response.status === 200) {
        console.log("good");
        setEmail(response.data.email);
        setName(response.data.username)
      } else {
        console.log(response.status);
        throw new Error("Erreur");
      }
    } catch (error) {
      alert("Erreur");
    }
  }


 getUser();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image}/>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>{email}</Text>
      </View>
      <View style={styles.navigationBarContainer}>
        <NavigationBar userId = {userId}/>
      </View>
    </View>
  );
};

export default Profile;


const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#0D151C',
  },
  headerContainer: {
  width: '100%',
  height: 80,
  paddingTop: 40,
  backgroundColor: '#0D151C',
  borderBottomWidth: 2,
  borderColor: 'lightgrey',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  },
  name: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
  marginRight: 'auto',
  marginLeft: '5',
  },
  editButton: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 5,
  marginLeft: 10,
  },
  editText: {
  color: '#007aff',
  fontWeight: 'bold',
  },
  imageContainer: {
  width: '100%',
  height: 200,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  },
  image: {
  width: 150,
  height: 150,
  borderRadius: 75,
  },
  infoContainer: {
  width: '100%',
  padding: 20,
  marginTop: 20,
  backgroundColor: 'white',
  alignItems: 'flex-start',
  },
  infoLabel: {
  color: 'gray',
  fontWeight: 'bold',
  marginBottom: 10,
  },
  infoText: {
  fontSize: 18,
  },
  navigationBarContainer: {
  width: '100%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  },
  });


/*
const Profile = () => {
    return (      
<View style={styles.container}>
      <Text style={styles.welcome}>Profile</Text>
      <StatusBar style="auto"/>
      <View style={styles.navigationBarContainer}>
        <NavigationBar/>
      </View>
    </View>

    );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {  
    fontSize: 20,  
    textAlign: 'center',  
    margin: 10,  
  },
  navigationBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

*/