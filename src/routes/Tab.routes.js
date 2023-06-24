import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import style from './Style';
import Home from '../views/Home';
import Pet from '../views/Pet';
import Shop from '../views/Shop';
import Tasks from '../views/Tasks';
import User from '../views/User';

export default function Tab() {
    const {Screen, Navigator} = createBottomTabNavigator();
    const size = 40;
  return (
    <Navigator 
    screenOptions={({route})=>({
      tabBarIcon:(({color})=>{
        let name = '';
        switch(route.name){
          case 'Home':
            name = 'home';
          break;
          case 'Pet':
            name = 'paw';
          break;
          case 'Tasks':
            name = 'clipboard-list';
          break;
          case 'Shop':
            name = 'cart';
          break;
          case 'User':
            name = 'account';
          break;
        }
        return <Icon name={name} size={size} color={color} />
      }),
      tabBarStyle: style.tabBottom,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#FA7814",
      headerShown: false,
      
    })}
    >
        <Screen name="Home" component={Home}/>
        <Screen name="Pet" component={Pet}/>
        <Screen name="Tasks" component={Tasks}/>
        <Screen name="Shop" component={Shop}/>
        <Screen name="User" component={User}/>
    </Navigator>
  );
}