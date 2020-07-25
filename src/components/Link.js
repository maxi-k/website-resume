import React from 'react'
import { useScheme } from 'style';

export const Link = ({ children, extern = false, nohighlight = true, className, ...props }) => {
    const schemeClass = useScheme().className
    const markerClass = nohighlight ? 'nohighlight' : ''
    const joinedClass = !!className ? `${schemeClass} ${markerClass} ${className}` : schemeClass;
    return extern
        ? <a className={joinedClass} target="_new" {...props}>{children}</a>
        : <a className={joinedClass} {...props}>{children}</a>;
}

export default Link
