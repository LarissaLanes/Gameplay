import React from "react";
import {View, Text, Image, Alert, ActivityIndicator, Button} from 'react-native';
import { styles } from "./styles";
import ilustrationImage from "../../assets/illustration.png"
// import { useNavigation } from "@react-navigation/native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";

import { useAuth } from "../../Hooks/auth"; 
import { ButtonAdd } from "../../components/ButtonAdd";


export function SignIn (){
    // const navigation = useNavigation();
    const {loading, signIn} = useAuth();


   async function handleHome(){
        try{
            await signIn();
        }catch(error: any){
            Alert.alert(error)
        }
    }


    return(
    <Background>
            <View style ={styles.container}>
                <Image 
                source={ilustrationImage}
                style={styles.image}
                resizeMode='stretch'
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se{'\n'}
                        e organize suas{'\n'}
                        jogatinas
                    </Text>
                    
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games{'\n'}
                        favoritos com seus amigos
                    </Text>

                {
                    loading ? <ActivityIndicator color={theme.colors.primary}/> 
                    :
                    // <ButtonIcon 
                    // title="Entrar com o Discord"
                    // onPress={handleHome}/>

                    <Button
                    title={"entrar"}
                    onPress={handleHome}
                    />   
              
                }

               
             
           

                   
                </View>
            </View>
        </Background>
    );
}
