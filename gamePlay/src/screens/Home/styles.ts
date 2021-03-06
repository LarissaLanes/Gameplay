import {StyleSheet} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    header:{
        width: '100%',
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: getStatusBarHeight() + 26,
        marginBotom: 42,
    },
    matches:{
        marginTop: 24,
        marginLeft: 24,
    }
})