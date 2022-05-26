import React from "react"
import {Text , ScrollView} from "react-native"
import { ListIcon } from "../ListIcons"
import { styles } from "./styles"
import { categories } from "../../utils/categories"


type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function ScroolView({categorySelected, setCategory}: Props){

    return(
        <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingRight: 40}}       
        >
        
        {
            categories.map(category => (
                <ListIcon
                key={category.id}
                title={category.title}
                icon={category.icon}
                checked={category.id === categorySelected}
                onPress={() => setCategory(category.id)}
                />
            ))

        }
           
        </ScrollView>

    )
}