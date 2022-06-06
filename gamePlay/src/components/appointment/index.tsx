import React from "react";
import {View, Text, NativeSegmentedControlIOSChangeEvent} from 'react-native';
import { styles } from "./styles";
import { RectButton, } from "react-native-gesture-handler"
import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";
import Players from "../../assets/player.svg"
import { theme } from "../../global/styles/theme";
import Calendar from "../../assets/calendar.svg"
import { GuildProps } from "../Guild";

export type Props =  RectButton & {
    data: AppointmentProps;
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: NativeSegmentedControlIOSChangeEvent;
}

export function Appointment({data, ...rest} : Props){
    const [categoryOwner] = categories.filter(item => item.id === data.category);
    const {owner} = data.guild;
    const {primary, on} = theme.colors

    return(
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon
                    guildId={data.guild.id}
                    iconId={data.guild.icon}
                />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title} >
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {/* {categoryOwner.title} */}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <Calendar/>
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
            
                        <View style={styles.playersInfo}>
                            <Players
                            fill={owner ? primary : on}
                            />

                            <Text style={[
                                styles.players, {color: owner? primary : on}
                                ]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}
