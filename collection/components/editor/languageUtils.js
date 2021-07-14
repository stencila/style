const languageAliases = {
  Bash: ['bash', 'shell', 'sh'],
  Dockerfile: ['dockerfile'],
  HTML: ['html'],
  JavaScript: ['javascript', 'js'],
  JSON: ['json'],
  LaTeX: ['latex', 'stex', 'tex'],
  Markdown: ['markdown', 'md'],
  'Plain Text': ['txt'],
  Python: ['python', 'py'],
  R: ['r'],
  RMD: ['rmd'],
  TOML: ['toml'],
  XML: ['xml'],
  YAML: ['yaml'],
};
export const defaultLanguageCapabilities = Object.keys(languageAliases);
// Attempts to look up a language based on file extension aliases,
// falling back to `Plain Text` if none can be found.
export const languageByAlias = (languageName) => {
  var _a;
  // Standardize names to lowercase to simplify matches
  const lowerCaseName = languageName.toLowerCase();
  const [resolvedName] = (_a = Object.entries(languageAliases).find(([_name, aliases]) => aliases.includes(lowerCaseName))) !== null && _a !== void 0 ? _a : [];
  return resolvedName !== null && resolvedName !== void 0 ? resolvedName : 'Plain Text';
};
