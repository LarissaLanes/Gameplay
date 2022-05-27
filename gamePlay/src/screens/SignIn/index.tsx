import React from "react";
import {View, Text, Image} from 'react-native';
import { styles } from "./styles";
import ilustrationImage from "../../assets/illustration.png"
import { useNavigation } from "@react-navigation/native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";



export function SignIn (){
    const navigation = useNavigation();

    function handleHome(){
        navigation.navigate('Home');
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

                    <ButtonIcon 
                        title="Entrar com o Discord"
                        onPress={handleHome}
                    />
                </View>
            </View>
        </Background>
    );
}
