// import { useMediaPredicate } from 'react-media-hook'

export const ColorScheme = Object.freeze({
    DARK: 'dark',
    LIGHT: 'light'
})

export const colorDefs = {
    [ColorScheme.DARK]: {
        highlight: 'purple',
        className: 'dark-theme'
    },
    [ColorScheme.LIGHT]: {
        highlight: 'blue',
        className: 'light-theme'
    }
}

export const useColorScheme = () => {
    return ColorScheme.LIGHT
}

export const useScheme = () => colorDefs[useColorScheme()]
export const usePrimaryColor = () => useScheme().highlight
