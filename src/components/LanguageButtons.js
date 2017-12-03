import React from 'react'
import { Button } from 'semantic-ui-react';
import { language, setLanguage }  from 'content'

const LanguageButtons = () => {
    const buttons = language.available.map((name) => {
        let active = name === language.current
        return <Button key={name}
        color={active ? 'blue' : null}
        active={active}
        onClick={() => setLanguage(name)}
        content={name} />})
    return (
        <Button.Group>
          {buttons}
        </Button.Group>
    );
};

export default LanguageButtons
