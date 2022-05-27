import React, {useState} from "react";
import {View, FlatList, Text} from 'react-native';
import { Appointment } from "../../components/appointment";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListsDivider";
import { Profile } from "../../components/Profile";
import { ScroolView } from "../../components/Scrool";
import { styles } from "./styles";

export function Home(){
    const [category, setCategory] = useState('');

    const appoinments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },

    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category? setCategory('') : setCategory(categoryId);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>

            <View>
                <ScroolView
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <View style={styles.content}>
                <ListHeader
                title='Partidas agendadas'
                subtitle="Total 6"
                />
                
                <FlatList
                    data={appoinments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                    <Appointment data={item}/>
                    )}
                    ItemSeparatorComponent={() => <ListDivider/>}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}