import { useMediaPredicate } from 'react-media-hook'

export const usePrimaryColor = () => {
    const prefersDark = useMediaPredicate('(prefers-color-scheme: dark)')
    return prefersDark ? 'purple' : 'blue'
}
