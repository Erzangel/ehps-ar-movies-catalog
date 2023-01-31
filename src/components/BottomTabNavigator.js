import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

function NavigationBar ({}) {
const navigation = useNavigation(); 
const route = useRoute(); 

    return (
      <View style={styles.navigationBarContainer}>
        <TouchableOpacity 
            style={styles.navigationBarTab}
            onPress={() => {
              Orientation.lockToPortrait();
              navigation.navigate('Home')
            }}
            >
          <Text style={route.name === 'Home' ? styles.activeTabText : styles.inactiveTabText}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navigationBarTab}
            onPress={() => navigation.navigate('Profile')}
            >
          <Text style={route.name === 'Profile' ? styles.activeTabText : styles.inactiveTabText}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  navigationBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#080B0F',
    borderTopWidth:2,
    borderColor: '#3D6180',
  },
  navigationBarTab: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabText: {
    fontSize: 15,  
    fontWeight: 'bold',
    
    color: '#1A64A6',
    
  },
  inactiveTabText: {
    fontSize: 15,  
    fontWeight: 'bold',
    
    color: '#609BFA',
    textShadowColor: 'rgba(255, 255, 255, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default NavigationBar;


/*

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

//npm install @react-navigation/bottom-tabs

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Nos films" component={Home} />
        <Tab.Screen name="inscription" component={Registration} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


*/