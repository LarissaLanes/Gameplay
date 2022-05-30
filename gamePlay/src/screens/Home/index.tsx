import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, FlatList } from 'react-native';
import { Appointment } from "../../components/appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListsDivider";
import { Profile } from "../../components/Profile";
import { ScroolView } from "../../components/Scrool";
import { styles } from "./styles";

export function Home() {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();

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
        {
            id: '3',
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
        {
            id: '4',
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
        {
            id: '5',
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
        {
            id: '6',
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

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function HandleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    function HandleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={HandleAppointmentCreate} />
            </View>

            <View>
                <ScroolView
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <ListHeader
                title='Partidas agendadas'
                subtitle="Total 6"
            />

            <FlatList
                data={appoinments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment data={item}
                        onPress={HandleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 69}}
            />
        </Background>
    );
}
