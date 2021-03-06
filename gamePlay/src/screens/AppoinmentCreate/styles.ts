import { theme } from './../../global/styles/theme';
import {StyleSheet} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },
    label:{
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.highlight,

    },
    form:{
        paddingHorizontal: 24,
        marginTop: 32,
    },
    select:{
        width: '100%',
        flexDirection: 'row',
        height: 68 ,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },
    image:{
        width: 68,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
        marginLeft: 20,

    },
    selectBody:{
        flex: 1,
        alignItems: 'center',
    },
    field:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column:{
        flexDirection: 'row',
        alignItems: 'center',

    },
    divider:{
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.title500,
        color: theme.colors.highlight
    },
    labelCaracteres:{
        fontSize: 13,
        // fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
    footer:{
        marginVertical: 20,
        marginBottom: 56,

    }
})