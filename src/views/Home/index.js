import React from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';


export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray', display: "flex", flexDirection: 'column'}}>
        <View name="div.topo"
        style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-around'
          }}>
          <View >
            <View 
              style={{ 
                display: 'flex', 
                flexDirection: 'row'}}>
                <Icon name='heart' size={30}/>
                <Text>4</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row'}}><Icon name='clipboard-check-multiple' size={30}/><Text>Tarefa</Text></View>
          </View>
          <View style={{width: 100, height: 100, backgroundColor: 'white'}}><Text>Imagem</Text></View>
        </View>

        <View name style={{margin: 40,width: "70%", height: "70%", backgroundColor: 'white'}}></View>
    </SafeAreaView>
  );
}