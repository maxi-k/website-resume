import React from 'react'
import { Button } from 'semantic-ui-react';
import { AVAILABLE_LANGUAGES, language, setLanguage }  from 'content'

const LanguageButtons = () => {
    const buttons = AVAILABLE_LANGUAGES.map((name) => {
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
