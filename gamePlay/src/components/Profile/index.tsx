import {View, Text, Alert} from 'react-native';
import { styles } from "./styles";
import React from 'react';
import { Avatar } from '../Avatar';
import { useAuth } from '../../Hooks/auth';
import { RectButton } from 'react-native-gesture-handler';

export function Profile(){
    const {user, logout} = useAuth();

    function handleLogout(){
        Alert.alert('Logout', 'Tem certeza que deseja sair de Gameplay?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => logout()
            }
        ] )
    }

    return(
        <View style={styles.container}>

        <RectButton onPress={handleLogout}>
            <Avatar
            urlImage={user.avatar}
            />
        </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.username}
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
        </View>
    );
}