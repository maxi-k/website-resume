import { useMediaQuery } from 'react-responsive'

export const usePrimaryColor = () => {
    const prefersDark = useMediaQuery({ query: '(perfers-color-theme: dark)' })
    return prefersDark ? 'purple' : 'blue'
}
