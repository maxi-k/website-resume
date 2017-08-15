import _ from 'lodash';
import React from 'react';
import common from 'content/common';

var language = { default: 'en',
                 current: 'en',
                 available: ['en', 'de'],
                 cached: {}};

const getLangData = (lang) =>
      (language.cached[lang] ||
       (language.cached[lang] = require('content/' + lang + '.js').default))

const getContent = (key) =>  _.get(common, key);

const translate = (lang, key) => _.get(getLangData(lang), key, getContent(key));

const t = (key) => translate(language.current, key);

var components = [];
class T extends React.Component {
    constructor(props) {
        super(props)
        this.wrapperElem = props.as || 'div'
        this.state = { lang: language.current }
        components.push(this);
    }

    updateLanguage() {
        this.setState({lang: language.current});
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
    components.forEach((c) => c.updateLanguage());
}

export { getContent, language, translate, setLanguage, t , T }
