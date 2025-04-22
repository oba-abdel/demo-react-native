



import About from './about';
import Contact from './contact';
import Home from './home';
import UserProfil from './user-profil';
import Categories from './categories';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from "@react-navigation/drawer";
import InputSearch from './components/input-search';
import Panier from './panier';
export default function App() {
  const Stack=createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // const Drawer = createDrawerNavigator();
  return ( 
    <NavigationContainer>
 
    <Tab.Navigator initialRouteName='Home'>
    
      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen name="Panier" component={Panier} />
      <Tab.Screen name="Compte" component={UserProfil} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


