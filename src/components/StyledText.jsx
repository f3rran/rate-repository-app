import {Text, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    blue: {
        color: 'blue'
    },
    small: {
        fontSize: 10
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

export default function StyledText({align, color, bold, children, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        align == 'center' && styles.textAlignCenter,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subheading' && styles.subheading,
        fontWeight == 'bold' && styles.bold,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}