import React, { useState } from "react";
import { Text, View, FlatList} from 'react-native';
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto} from '@expo/vector-icons';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";
import { ListHeader } from "../../components/ListHeader";
import { Members } from "../../components/Members/index.";
import { ListDivider } from "../../components/ListsDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ScroolView } from "../../components/Scrool";
import {Feather} from '@expo/vector-icons'
export function AppointmentCreate(){
    const [category, setCategory] = useState('');


    return(
        <Background >
            <Header title="Agendar Partida"/>

            <Text style={styles.label}>Categoria</Text>

            <ScroolView
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />

            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image}/>
                        <View style={styles.selectBody}>
                              <Text style={styles.label}>
                                  Selecione um servidor
                            </Text>  

                        </View>

                        <Feather
                            name='chevron-right'
                            color={theme.colors.heading}
                            size={18}
                        />

                    </View>
                </RectButton>
            </View>
        </Background>
        
    );
}
