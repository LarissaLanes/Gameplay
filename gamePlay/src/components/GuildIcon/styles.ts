import { theme } from './../../global/styles/theme';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    image:{
        width: 64,
        height: 64,
        borderRadius: 8,
        
    },
    container:{
        width: 64,
        height: 64,
        borderRadius: 8,
        backgroundColor: theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        overflow: 'hidden',

    }
})