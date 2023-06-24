import {SafeAreaView, Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar></StatusBar>
      <Routes/>
    </>
  );
}

