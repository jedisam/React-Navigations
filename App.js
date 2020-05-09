import React, { Component } from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Feed from "./Feed";
import Detail from "./detail";
import Screen1 from "./screens/drawer/screen1";
import Screen2 from "./screens/drawer/screen2";
import Screen3 from "./screens/drawer/screen3";

import Tab1 from "./screens/tabs/Tab1";
import Tab2 from "./screens/tabs/Tab2";
import Tab3 from "./screens/tabs/Tab3";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
       name="Feed"
       component={Feed}
       options={{
         title:"My Feed",
         headerStyle:{
           backgroundColor: "#444",
         },
         headerTintColor:"white"
        }} 
        />
       <Stack.Screen
       name="Detail"
       component={Detail}
       options={{
         title:"Details",
         headerStyle:{
           backgroundColor: "#444",
         },
         headerTintColor:"white"
        }} 
        />
      <Stack.Screen name="Top Tabs" children={this.createTopTabs} />
      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
    </Stack.Navigator>
  );

  createTopTabs = (props) => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
         name="Tab 1"
         component={Tab1}
         options={{title:props.route.params.name}}
         />
        <MaterialTopTabs.Screen
         name="Tab 2"
         component={Tab2}
         options={{title:'Fun'}}
         />
        <MaterialTopTabs.Screen
         name="Tab 3"
         component={Tab3}
         options={{title:'More'}}
         />
      </MaterialTopTabs.Navigator>
    );
  };

  createBottomTabs = (props) => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
         name="Tab 1" 
         component={Tab1} 
         options = {{title:props.route.params.name}}
         />
        <MaterialBottomTabs.Screen
         name="Tab 2" 
         component={Tab2}
         options = {{title:'Settings'}}
         />
        <MaterialBottomTabs.Screen
          name="Tab 3" 
          component={Tab3}
          options = {{title:'About Us'}}
          />
      </MaterialBottomTabs.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          options={{title:"Music List"}}
        >
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favorites" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
