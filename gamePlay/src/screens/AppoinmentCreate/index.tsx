import React, { useState } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
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



export function AppointmentCreate(){
    const [category, setCategory] = useState('');
    const [open, setOpen] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);


    function HandleOpen(){
        setOpen(true)
    }

    function HandleClose(){
        setOpen(false)
    }
    
    function HandleSelect(guildSelect: GuildProps){
        setGuild(guildSelect)
        setOpen(false)
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
                        setCategory={setCategory}
                        categorySelected={category}
                    />

                    <View style={styles.form}>


                        <RectButton onPress={HandleOpen}>
                            <View style={styles.select}>

                                {
                                    guild.icon ? <GuildIcon/> : <View style={styles.image}/>
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
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>/</Text>
                                    <SmallInput maxLength={2}/>
                                </View>
                            </View>
        
                            <View>
                                <Text style={[styles.label, {marginBottom: 10}]}>
                                        Horário
                                </Text>

                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}>:</Text>
                                    <SmallInput maxLength={2}/>
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
                        />

                        <View style={styles.footer}>
                            <ButtonInput title='Agendar'/>
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
