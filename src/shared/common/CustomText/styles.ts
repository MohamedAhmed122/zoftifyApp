import { COLORS } from '@Shared/style'
import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    textStyle:{
        color: COLORS.textPrimary,
        fontFamily: 'Lato-Regular'
    },
    title:{
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
    },
    body:{
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
    },
    caption:{
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
    },
    subtitle:{
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.textSecondary
    },
    buttonText:{
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20,
        color: COLORS.white
    },
    badgeText:{
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 16,
    }
})