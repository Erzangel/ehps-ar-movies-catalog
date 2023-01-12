import { StatusBar } from "react-native";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Home = () => {
    return (      
<View>
<Text style = {styles.welcome}>Mirage</Text>
<StatusBar style = "auto"/>
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
  });

