import React, { Component, useEffect, useState } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

function NavigationBar (props) {
const navigation = useNavigation(); 
const route = useRoute(); 
const [user, setUser] = useState(props.user);

useEffect(() => {
  setUser(props.user);
  
}, [props]);


    return (
      <View style={styles.navigationBarContainer}>
        <TouchableOpacity 
            style={styles.navigationBarTab}
            onPress={() => navigation.navigate('Home',{user : user})}
            >
          <Text style={route.name === 'Home' ? styles.activeTabText : styles.inactiveTabText}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navigationBarTab}
            onPress={() => navigation.navigate('Profile',{user : user})}
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
    backgroundColor: '#f5f5f5',
  },
  navigationBarTab: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabText: {
    color: 'black',
  },
  inactiveTabText: {
    color: 'gray',
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