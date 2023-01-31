
import { ImageBackground, StatusBar } from "react-native";
import { Text, View, FlatList, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";
import NavigationBar from "../components/BottomTabNavigator";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { BackHandler } from 'react-native';
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




const Home = () => {
  const [nb, setNb] = useState(5);
  
  const handleImagePress = (image) => {
  // Do something with the image
  }
  const imageBackground = require("./testFondApp.jpg");
  const imageFilmZetT = require("./Affiche-Film-ZetTASSE.jpg");
  const imageLogo = require("./Mirage_Font_logo.png");
  const imageAFH1 = require("./affiche-film-dhorreur-1.png");
  const imageAFH2 = require("./affiche-film-dhorreur-2.png");
  const imageAFH3 = require("./affiche-film-dhorreur-3.png");
  const imageAFH4 = require("./affiche-film-dhorreur-4.png");
  const imageAFH5 = require("./affiche-film-dhorreur-5.png");
  const imageAFH6 = require("./affiche-film-dhorreur-6.png");
  const imageAFH7 = require("./affiche-film-dhorreur-7.png");
  const imageAFH8 = require("./affiche-film-dhorreur-8.png");
  const imageAFH9 = require("./affiche-film-dhorreur-9.png");
  const imagesNew = [imageFilmZetT, imageAFH1, imageAFH2, imageAFH3, imageAFH4]
  const imagesPop = [imageAFH5,imageAFH6,imageAFH7,imageAFH8,imageAFH9]

  
  const ItemSeparator = () => <View style={styles.separator} />;
  
  return (
  <View style={styles.container}>
  <View style={styles.scrollContainer}>
    
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
    <View style={styles.welcomeContainer}>
      <ImageBackground source={imageLogo} style={styles.imageWelcome} />
    </View>
    <View style={styles.bigSquare}>
      <ImageBackground source={imageFilmZetT} style={styles.imagePresentoir} />
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
                  <Image source={imagesNew[index]} style={styles.image} />
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
              <TouchableOpacity style={styles.imageTouchable} onPress={() => alert('Image ' + (index + 1) + ' pressed!')}>
                <View style={styles.imageContainer}>
                  <Image source={imagesPop[index]} style={styles.image} />
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
    backgroundColor: '#0D151C',
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
    borderColor: '#324F69',
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
    backgroundColor: '#324F69',
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
    marginBottom: 15,
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
    width: 100,
    height: 100,
    margin: 3,
    borderRadius: 10,
    borderColor: '#324F69',
    borderWidth: 1,
    //Shadowbox
    elevation: 8,
    shadowColor: 'white',
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


