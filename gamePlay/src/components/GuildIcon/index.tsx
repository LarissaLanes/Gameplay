import React from "react";
import {Image} from 'react-native';
import { styles } from "./styles";
import { RectButton, RectButtonProps} from "react-native-gesture-handler"


export function GuildIcon(){
    const uri = 'https://github.com/LarissaLanes.png'

    return(
        <Image
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
        />
    );
}
