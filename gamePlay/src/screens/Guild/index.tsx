import React, { useState, useEffect} from "react";
import {View, FlatList, Button} from 'react-native';
import { styles } from "./styles";
import { GuildComponents, GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListsDivider";
import {Load} from "../../components/Loading"
import { api } from "../../services/api";

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guild({handleGuildSelected}: Props){
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);
       
    async function fetchGuilds (){
        const response = await api.get('/users/@me/guilds')

        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, []);


    return(
        <View style={styles.container}>
            {
                loading ? <Load/> :
                <FlatList
                data={guilds}
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
            }
            
        </View>
    );
}
