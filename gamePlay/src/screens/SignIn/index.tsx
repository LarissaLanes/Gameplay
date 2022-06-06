import React from "react";
import {View, Text, Image, Alert, ActivityIndicator, Button} from 'react-native';
import { styles } from "./styles";
import ilustrationImage from "../../assets/illustration.png"
import { Background } from "../../components/Background";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../Hooks/auth"; 
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn (){
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
                    <Button 
                    title="Entrar com o Discord"
                    color= {theme.colors.primary}
                    onPress={handleHome}
                    />
                }
                </View>
            </View>
        </Background>
    );
}
