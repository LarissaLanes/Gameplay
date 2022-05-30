import React from "react";
import {View, FlatList} from 'react-native';
import { styles } from "./styles";
import { GuildComponents } from "../../components/Guild";
import { ListDivider } from "../../components/ListsDivider";
import { GuildProps } from "../../components/Guild";


type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guild({handleGuildSelected}: Props){
    const guild = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image-png',
            owner: true,
        },
        {
            id: '2',
            name: 'LOL',
            icon: 'image-png',
            owner: false,
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image-png',
            owner: true,
        },
        {
            id: '4',
            name: 'LOL',
            icon: 'image-png',
            owner: false,
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'image-png',
            owner: true,
        },
        {
            id: '6',
            name: 'LOL',
            icon: 'image-png',
            owner: false,
        },
        {
            id: '7',
            name: 'LOL',
            icon: 'image-png',
            owner: false,
        }
    ]

    return(
        <View style={styles.container}>
            <FlatList
                data={guild}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <GuildComponents data={item}
                    onPress={() => handleGuildSelected(item)}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider isCenter/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 68, paddingTop: 104}}
                ListHeaderComponent={() => <ListDivider isCenter/>}
                style={styles.guild}
            />

           
        </View>
    );
}
