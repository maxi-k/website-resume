import _ from 'lodash';
import React from 'react';
import common from 'content/common';
import URLSearchParams from 'url-search-params'

const AVAILABLE_LANGUAGES = ['en', 'de']
const DEFAULT_LANGUAGE = 'en'

const checkLanguageAvailable = (lang) => AVAILABLE_LANGUAGES.includes(lang)
const getAvailableLanguage = (lang) => checkLanguageAvailable(lang) ? lang : DEFAULT_LANGUAGE

const userDefinedBrowserLanguage = () => {
    let searchParamLang = new URLSearchParams(document.location.search).get("lang")
    let browserLang = navigator.languages ?
        navigator.languages[0] :
        (navigator.language || navigator.userLanguage);
    return searchParamLang || browserLang
}

const browserLanguage = () => {
    let userLang = userDefinedBrowserLanguage()
    if (typeof userLang === 'undefined') {
        return DEFAULT_LANGUAGE;
    } else if (userLang.indexOf('-') > 0) {
        return userLang.split('-')[0]
    } else {
        return userLang
    }
}


var language = { default: DEFAULT_LANGUAGE,
                 current: getAvailableLanguage(browserLanguage()),
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
        this.setState({lang: language.current})
    }

    componentDidMount() {
        this.setState({ lang: language.current })
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

// const updateURLLanguage = () => {
//     let params = new URLSearchParams(document.location.search)
//     params.set("lang", language.current)
//     window.location.search = params.toString()
// }

const setLanguage = (lang) => {
    language.current = getAvailableLanguage(lang);
    components.forEach((c) => {
        if (typeof c !== 'undefined' && c.updateLanguage) {
            c.updateLanguage();
        }
    });
}

export { AVAILABLE_LANGUAGES, getContent, language, translate, setLanguage, t , T }
