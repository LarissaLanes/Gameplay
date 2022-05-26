import React, {useState} from "react";
import {View, Text} from 'react-native';
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { ScroolView } from "../../components/Scrool";
import { styles } from "./styles";

export function Home(){
    const [category, setCategory] = useState('');

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

            </View>
        </View>
    );
}