import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import NavigationBar from "../components/BottomTabNavigator";

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