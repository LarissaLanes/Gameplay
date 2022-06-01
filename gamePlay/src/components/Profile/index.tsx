import {View, Text} from 'react-native';
import { styles } from "./styles";
import React from 'react';
import { Avatar } from '../Avatar';
import { useAuth } from '../../Hooks/auth';

export function Profile(){
    const {user} = useAuth();
    console.log(user)
    return(
        <View style={styles.container}>

            <Avatar
            urlImage={user.avatar}
            />

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