import React, { useEffect, useState } from "react";
import {ImageBackground, Text, View, FlatList, Alert, Share, Platform, Linking} from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto} from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import BannerImg from "../../assets/banner.png"
import { ListHeader } from "../../components/ListHeader";
import { MemberProps, Members } from "../../components/Members/index.";
import { ListDivider } from "../../components/ListsDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/appointment";
import { api } from "../../services/api";
import { Load } from "../../components/Loading";

type Params = {
    guildSelected : AppointmentProps
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppointmentDetails(){
    const [ widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const route = useRoute();
    const { guildSelected } = route.params as Params;
    const [ loading, setLoading] = useState(true)
    const navigation = useNavigation<string|any>();


    async function fatchGuildWidget() {
        try{
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
            setLoading(false)

        }catch(error){
            Alert.alert('Algo deu errado ao conectar com o servidor, verifique se o widget está abilitado ')
            setLoading(true)
            navigation.navigate('Home');
        }
    }

    function handleShareInvitation(){
        const message = Platform.OS === 'ios' ? 
        `Junte-se a ${guildSelected.guild.name}`
        : 
        widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleLinking(){
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fatchGuildWidget();
    }, []);

    return(
        <Background >
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner &&
                    <BorderlessButton onPress={handleShareInvitation}>
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
                        {guildSelected.guild.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>
        

            {
                loading ? <Load/> :
            
            <>
                <ListHeader
                title="Jogadores"
                subtitle={`Online: ${widget.members.length}`}    
                />

                <FlatList
                data={widget.members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Members data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider isCenter/>}
                style={styles.members}
                />
            </>
           
           }        

            {
                guildSelected.guild.owner &&
               <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                    onPress={handleLinking}
                />
                </View>
            }
             

           
            
        </Background>
        
    );
}
