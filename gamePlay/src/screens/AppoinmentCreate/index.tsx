import React, { useState } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { ScroolView } from "../../components/Scrool";
import {Feather} from '@expo/vector-icons'
import { SmallInput } from "../../components/SmallInput";
import { LargeInput } from "../../components/LargeInput";
import { ButtonInput } from "../../components/ButtonInput";
import { ModalGuild } from "../../components/ModalGuild";
import { Guild } from "../Guild";
import { GuildProps } from "../../components/Guild";
import { GuildIcon } from "../../components/GuildIcon";
import DiscordSVG from "../../assets/discord.svg";
import uuid from  'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENT } from "../../configs/dataBase";
import { useNavigation } from "@react-navigation/native";

export function AppointmentCreate(){
    const [category, setCategory] = useState('');
    const [open, setOpen] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hours, setHours] = useState('');
    const [minute, setMinute] = useState('');
    const [decription, setDescription] = useState('');

    const navigation = useNavigation();

    function HandleOpen(){
        setOpen(true);
    }

    function HandleClose(){
        setOpen(false);
    }
    
    function HandleSelect(guildSelect: GuildProps){
        setGuild(guildSelect)
        setOpen(false);
    }

    function HandleCategorySelect(categoryId: string){
        setCategory(categoryId);

    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hours}:${minute}h`,
            decription
        };


        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
        const appointments = storage ?  JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENT,
            JSON.stringify([...appointments, newAppointment])
        );

        // if(!newAppointment.decription){
        //     Alert.alert("Preencha todos os campos")
        // }else {


        // }

        navigation.navigate('Home');


    }
    
    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
            >
         <ScrollView>
            <Background >
                    <Header title="Agendar Partida"/>

                    <Text style={[styles.label, {marginLeft: 30, marginTop: 20}]}>
                        Categoria
                    </Text>

                    <ScroolView
                        hasCheckBox
                        setCategory={HandleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>


                        <RectButton onPress={HandleOpen}>
                            <View style={styles.select}>

                                {
                                    guild.icon ? <GuildIcon guildId={guild.id} iconId={guild.icon}/> : <DiscordSVG style={styles.image}/>
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {
                                            guild.name ? guild.name: 'Selecione um servidor'
                                        }
                                    </Text>  
                                </View>

                                <Feather
                                    name='chevron-right'
                                    color={theme.colors.heading}
                                    size={18}
                                />

                            </View>
                        </RectButton>


                        <View style={styles.field}>

                            <View>
                                <Text style={[styles.label, {marginBottom: 10}]}>
                                    Dia e mês
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2}
                                    onChangeText={setDay}
                                    />
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2}
                                    onChangeText={setMonth}
                                    />
                                </View>
                            </View>
        
                            <View>
                                <Text style={[styles.label, {marginBottom: 10}]}>
                                        Horário
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2}
                                    onChangeText={setHours}
                                    />
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2}
                                    onChangeText={setMinute}
                                    />
                                </View>
                            </View>
                        </View>


                        <View style={styles.field}>

                            <Text style={[styles.label, {marginBottom: 10}]}>
                                Descrição
                            </Text>
                            <Text style={styles.labelCaracteres}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <LargeInput
                                multiline
                                maxLength={100}
                                numberOfLines={5}
                                autoCorrect={false}
                                onChangeText={setDescription}
                        />

                        <View style={styles.footer}>
                            <ButtonInput 
                            title='Agendar'
                            onPress={handleSave}
                            />

                            {/* <Button title="oi"
                            onPress={handleSave} */}
                            {/* /> */}
                        </View>
                    </View>
                </Background>
            </ScrollView>

            <ModalGuild
                visible={open}
                closeModal={HandleClose}
            >
                <Guild handleGuildSelected={HandleSelect}/>
            </ModalGuild>

        </KeyboardAvoidingView>
        
    );
}
