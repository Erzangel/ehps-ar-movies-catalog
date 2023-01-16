
import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import NavigationBar from "../components/BottomTabNavigator";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';


const Home = () => {
  /*
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
*/


  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Mirage</Text>
      <StatusBar style="auto"/>
      <View style={styles.navigationBarContainer}>
        <NavigationBar/>
      </View>
    </View>
  );
};

export default Home;



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

