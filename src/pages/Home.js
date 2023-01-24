
import { StatusBar } from "react-native";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import NavigationBar from "../components/BottomTabNavigator";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

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

const Home = () => {
  const [nb, setNb] = useState(5);


const whiteSquare = () => <View style={styles.square} />
const ItemSeparator = () => <View style={styles.separator} />;

return (
  
  <View style={styles.container}>
    <View style={styles.scrollContainer}>
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcome}>Mirage</Text>
    </View>
    <View style={styles.bigSquare} />

    <View style={styles.list}>
      <Text style={styles.new}> Nouveautées </Text>
<SafeAreaView>
    <FlatList
      data={Array(nb)}
      renderItem={() => whiteSquare()}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      ItemSeparatorComponent={ItemSeparator}
      showsHorizontalScrollIndicator={false}
    />
    </SafeAreaView>
    </View>

    <View style={styles.list}>
      <Text style={styles.new}> Tendances actuelles </Text>
<SafeAreaView>
    <FlatList
      data={Array(nb)}
      renderItem={() => whiteSquare()}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      ItemSeparatorComponent={ItemSeparator}
      showsHorizontalScrollIndicator={false}
    />
    </SafeAreaView>
    </View>



    <StatusBar style="auto"/>
   
    </ScrollView>
    </View>
 
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
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  welcomeContainer: {
    textAlign: 'center',
    alignSelf: 'center',

  },
  welcome: {  
    fontSize: 30,  
    textAlign: 'center',  
    margin: 10,  
    color: 'white',
  },
  navigationBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  bigSquare: {
    alignSelf:'center',
    width: 350,
    height: 400,
    marginBottom: 30,
    backgroundColor: 'grey',
    borderRadius:10,
    //Shadowbox
    elevation: 20,
    shadowColor: 'white',
  },
  new: {
    fontSize: 15,  
    height : 20, 
    color: 'white',
  },
  square: {
    width: 110, 
    height: 150, 
    marginLeft: 5,
    backgroundColor: 'grey',
    borderRadius:10,
    marginBottom:15,
    //Shadowbox
    elevation: 8,
    shadowColor: 'white',
  },
  separator: {
    width: 5,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 50, //taille de la barre de navigation
  },
  list: {
    marginBottom: 30,
  }
});


