import React from "react";
import {Text} from "react-native"
import { styles } from "./styles";
import { RectButton, RectButtonProps} from "react-native-gesture-handler";

type Props = RectButtonProps & {
    title: string;
}

export function ButtonInput({title, ...rest}: Props){
    return(
        <RectButton 
        style={styles.container}
        {...rest}
        >
          
            <Text style={styles.textButton}>
                {title}
            </Text>
        </RectButton>
    );
}