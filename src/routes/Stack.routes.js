import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../views/Login';
import  Tab  from './Tab.routes';

export default function Stack() {
const {Screen, Navigator} = createNativeStackNavigator();
  return (
    <Navigator>
        <Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Screen name="Tab" component={Tab} options={{headerShown: false}}/>
    </Navigator>
  );
}