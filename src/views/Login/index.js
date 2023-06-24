import React from 'react';
import { Button, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Login({navigation}) {
  const entrar = ()=>{
    navigation.navigate('Tab');
  }
  return (
   <SafeAreaView>
    <Text>Login</Text>
    <Button title='Entrar' onPress={entrar}/>
   </SafeAreaView>
  );
}