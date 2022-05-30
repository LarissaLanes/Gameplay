import { TextInputProps, TextInput  } from "react-native"
import React from "react"
import {styles} from "./styles"


export function LargeInput({...rest}: TextInputProps){
    return(
        <TextInput
            style={styles.container}
            {...rest}
        />

    )
}