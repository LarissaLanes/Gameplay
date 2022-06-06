import React, { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { View, FlatList } from 'react-native';
import { Appointment, AppointmentProps } from "../../components/appointment";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListsDivider";
import { Profile } from "../../components/Profile";
import { ScroolView } from "../../components/Scrool";
import { COLLECTION_APPOINTMENT } from "../../configs/dataBase";
import { styles } from "./styles";
import { Load } from "../../components/Loading";

export function Home() {
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
    const [category, setCategory] = useState('');
    const navigation = useNavigation<string|any>();
    const [loading, setLoading] = useState(true);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function HandleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', {guildSelected});
    }

    function HandleAppointmentCreate() {
        navigation.navigate('AppointmentCreate');
    }

    async function appointmentsAgender(){
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENT);
        const response: AppointmentProps[] = storage ? JSON.parse(storage) : [];

        if(category){
            setAppointments(response.filter(item => item.category === category));
        }else{
            setAppointments(response)
        }

        setLoading(false);
    }

    useFocusEffect(useCallback(() =>  {
        appointmentsAgender();

    }, [category]));

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

            {
                loading ? <Load/> :
                <>
                    <ListHeader
                        title='Partidas agendadas'
                        subtitle={`Total: ${appointments.length}`}
                    />

                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment 
                            data={item}
                            onPress={() => HandleAppointmentDetails(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 69}}
                    />

                </>
            }
      
        </Background>
    );
}
