import _ from 'lodash';
import React from 'react';
import common from 'content/common';

const DEFAULT_LANGUAGE = 'en'

const browserLanguage = () => {
    let langString = navigator.languages ?
        navigator.languages[0] :
        (navigator.language || navigator.userLanguage);
    if (typeof langString === 'undefined') {
        return 'en';
    } else if (langString.indexOf('-') > 0) {
        return langString.split('-')[0]
    } else {
        return langString
    }
}

var language = { default: DEFAULT_LANGUAGE,
                 current: browserLanguage(),
                 available: ['en', 'de'],
                 cached: {} };

const getLangData = (lang) =>
      (language.cached[lang] ||
       (language.cached[lang] = require('content/' + lang + '.js').default))

const getContent = (key) =>  _.get(common, key);

const translate = (lang, key) => _.get(getLangData(lang), key, getContent(key));

const t = (key) => translate(language.current, key);

var components = new Set();
class T extends React.Component {

    constructor(props) {
        super(props)
        this.wrapperElem = props.as || 'div'
    }

    updateLanguage() {
        this.setState({lang: language.current});
    }

    componentWillMount() {
        this.state = { lang: language.current }
        components.add(this);
    }

    componentWillUnmount() {
        components.remove(this);
    }

    render() {
        let Wrapper = this.wrapperElem;
        return (<Wrapper>
                {this.props.id && translate(this.state.lang, this.props.id)}
                {this.props.children}
                </Wrapper>);
    }
}

const setLanguage = (lang) => {
    language.current = lang;
    components.forEach((c) => {
        if (typeof c !== 'undefined' && c.updateLanguage) {
            c.updateLanguage();
        }
    });
}

export { getContent, language, translate, setLanguage, t , T }
