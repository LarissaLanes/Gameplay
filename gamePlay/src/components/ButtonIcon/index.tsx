import React from "react";
import {View, Text, Image, Button} from "react-native"
import discord from "../../assets/GroupdiscordLogo.png";
import { styles } from "./styles";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";

type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({title, ...rest}: Props){
    return(
        <RectButton 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image 
                source={discord} 
                style={styles.icon}
                />
            </View>
            
            <Text style={styles.textButton}>
                {title}
            </Text>
        </RectButton>
    );
}