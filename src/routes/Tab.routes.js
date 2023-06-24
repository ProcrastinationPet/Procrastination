import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Home from '../views/Home';
import Pet from '../views/Pet';
import Shop from '../views/Shop';
import Tasks from '../views/Tasks';
import User from '../views/User';

export default function Tab() {
    const {Screen, Navigator} = createBottomTabNavigator();
    const size = 40;
    const color = "#FA7814";
  return (
    <Navigator screenOptions={{headerShown:false}}>
        <Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ()=>(
            <Icon name='home' size={size} color={color}/>
          )
        }}
        />
        <Screen 
        name="Pet" 
        component={Pet}
        options={{
          tabBarIcon: ()=>(
            <Icon name='paw' size={size} color={color}/>
          )
        }}
        />
        <Screen 
        name="Tasks" 
        component={Tasks}
        options={{
          tabBarIcon: ()=>(
            <Icon name='clipboard-list' size={size} color={color}/>
          )
        }}
        />
        <Screen 
        name="Shop" 
        component={Shop}
        options={{
          tabBarIcon: ()=>(
            <Icon name='cart' size={size} color={color}/>
          )
        }}
        />
        <Screen 
        name="User" 
        component={User}
        options={{
          tabBarIcon: ()=>(
            <Icon name='account' size={size} color={color}/>
          )
        }}
        />
    </Navigator>
  );
}