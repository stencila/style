import { h } from '@stencil/core';
import { languageByAlias } from '../languageUtils';
export const LanguagePicker = (props) => {
  const activeLanguageByAlias = languageByAlias(props.activeLanguage);
  return (h("label", { "aria-label": "Programming Language" },
    h("stencila-icon", { icon: "terminal" }),
    h("select", { onChange: props.onSetLanguage }, props.languageCapabilities.map((language) => (h("option", { value: language.toLowerCase(), selected: languageByAlias(language) === activeLanguageByAlias }, language))))));
};
