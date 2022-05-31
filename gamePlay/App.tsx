import React from 'react';
import { StatusBar } from 'react-native';
import { Routes } from './src/router';
import AppLoading from 'expo-app-loading';
// import { Rajdhani_500Medium, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
// import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { useFonts } from 'expo-font';
import { Background } from './src/components/Background';
import { AuthProvider } from './src/Hooks/auth';



export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Rajdhani_500Medium,
  //   Rajdhani_700Bold,
  //   Inter_400Regular,
  //   Inter_500Medium
  // });

//   if(!fontsLoaded){
//     return <AppLoading/>
// }

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </Background>
  );
}


