
import { ImageBackground, StatusBar } from "react-native";
import { Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import NavigationBar from "../components/BottomTabNavigator";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useEffect, useCallback, useState } from 'react';
import { BackHandler } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";

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




const Home = ({navigation}) => {
  Orientation.lockToPortrait();
  const [nb, setNb] = useState(5);
  
  const handleImagePress = (image) => {
  // Do something with the image
  }
  const imageBackground = require("./testFondApp.jpg");
  const imageFilmZetT = require("./Affiche-Film-ZetTASSE.jpg");
  const imageLogo = require("./Mirage_Font_logo.png");
  const imagesNew = ['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png']
  const imagesPop = ['https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png', 'https://reactnative.dev/img/tiny_logo.png']

  
  const ItemSeparator = () => <View style={styles.separator} />;
  
  // Force portrait on back button press
  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
    }, [])
  );

  return (
  <View style={styles.container}>
  <View style={styles.scrollContainer}>
    <ImageBackground source={imageBackground} style={styles.imageFond}>
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
    <View style={styles.welcomeContainer}>
      <ImageBackground source={imageLogo} style={styles.imageWelcome} />
    </View>
    <View style={styles.bigSquare}>
      <ImageBackground source={imageFilmZetT} style={styles.imagePresentoir} >
        <TouchableOpacity style={styles.imageTouchable} onPress={() => navigation.navigate('Unity')}></TouchableOpacity>
      </ImageBackground>
    </View>
  <View style={styles.list}>
        <Text style={styles.new}> Nouveautées </Text>
        <SafeAreaView>
          <FlatList
            data={Array(nb)}
            renderItem={({ item, index }) => (
              <View style={styles.square}>
              <TouchableOpacity style={styles.imageTouchable} onPress={() => alert('Image ' + (index + 1) + ' pressed!')}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: imagesNew[index] }} style={styles.image} />
                  </View>
              </TouchableOpacity>
            </View>
            )}
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
            renderItem={({ item, index }) => (
              <View style={styles.square}>
              <TouchableOpacity style={styles.imageTouchable} onPress={() => navigation.navigate('Unity')}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: imagesPop[index] }} style={styles.image} />
                  </View>
              </TouchableOpacity>
            </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            ItemSeparatorComponent={ItemSeparator}
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
        
      </View>

      <StatusBar style="auto"/>
    </ScrollView>
    </ImageBackground>
  </View>
  <View style={styles.navigationBarContainer}>
    <NavigationBar/>
</View>
</View>
);
};

export default Home;
//<Image source={{uri: eval(`image${index + 1}`)}} style={styles.image} />
/*
const Home = () => {
  const [nb, setNb] = useState(5);


const whiteSquare = () => <View style={styles.square} />
const ItemSeparator = () => <View style={styles.separator} />;
const imageBackground = require("./testFondApp.jpg");
const imageFilmZetT = require("./Affiche-Film-ZetTASSE.jpg");
const imageLogo = require("./Mirage_Font_logo.png");

return (
  
  <View style={styles.container}>
    <ImageBackground source={imageBackground} style={styles.imageFond}>
    <View style={styles.scrollContainer}>
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
    <View style={styles.welcomeContainer}>
    <ImageBackground source={imageLogo} style={styles.imageWelcome} />
    </View>

    <View style={styles.bigSquare}>
      <ImageBackground source={imageFilmZetT} style={styles.imagePresentoir} />
    </View>

    <View style={styles.list}>
      <Text style={styles.new}> Ajouts récents </Text>
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
      <Text style={styles.new}> Tendances </Text>
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
    </ImageBackground>
  </View>
 

);
};

export default Home;
*/

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  imageFond: {
    flex: 1,
    justifyContent: 'center',
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
  imagePresentoir: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 3,
    borderRadius: 5,
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
    padding: 1,
    //Shadowbox
    elevation: 20,
    shadowColor: 'white',
  },
  new: {
    fontSize: 15,  
    fontWeight: 'bold',
    height: 20, 
    color: '#609BFA',
    marginLeft: 10,
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
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 4,
    overflow: 'hidden',
  },
  imageTouchable: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


