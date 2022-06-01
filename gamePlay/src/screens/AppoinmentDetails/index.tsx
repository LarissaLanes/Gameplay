import React from "react";
import {ImageBackground, Text, View, FlatList} from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto} from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png"
import { ListHeader } from "../../components/ListHeader";
import { Members } from "../../components/Members/index.";
import { ListDivider } from "../../components/ListsDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails(){
    const members = [
        {
            id: '1',
            username: 'Larissa',
            avatar_url: 'https://github.com/LarissaLanes.png',
            status: 'online',
        },
        {
            id: '2',
            username: 'Larissa',
            avatar_url: 'https://github.com/LarissaLanes.png',
            status: 'offline',
        },
        {
            id: '3',
            username: 'Larissa',
            avatar_url: 'https://github.com/LarissaLanes.png',
            status: 'offline',
        }
    ]

    return(
        <Background >
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color= {theme.colors.primary}                   
                            />
                    </BorderlessButton>
                }
                />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida de md10
                    </Text>
                </View>
            </ImageBackground>
           
           <ListHeader
                title="Jogadores"
                subtitle="Total 3"    
            />        

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Members data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider isCenter/>}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>
            
        </Background>
        
    );
}
