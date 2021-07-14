const vegaMediaTypes = [
  // Custom and generic Vega mimetype used by Stencila during encoding
  'application/vnd.vega+json',
  // Altair MIME bundle types
  // @see https://iliatimofeev.github.io/altair-viz.github.io/user_guide/display_frontends.html#renderer-api
  'application/vnd.vegalite.v1+json',
  'application/vnd.vega.v3+json',
  'application/vnd.vega.v2+json',
];
export const vegaMediaType = 'application/vnd.vega+json';
export const isVegaMediaType = (mimeType) => vegaMediaTypes.includes(mimeType);
/**
 * RegEx to parse a Vega Spec `$schema` url and find the library and version number used
 * Group 1: library used `vega` or `vega-lite | vegalite`
 * Group 2: version number used
 */
const VegaVersionRegEx = /(vega|vega-?lite)[/.]v([0-9]+(?:\.[0-9]){0,2})/;
const vegaLibraryGuard = (library) => {
  return library === 'vega' || library === 'vega-lite' ? library : 'vega';
};
/**
 * Given a string, attempts to find the Vega library (`vega` vs `vega-lite`)
 * and the version being used.
 * Falls back to `vega` and `latest`.
 */
export const getVegaVersion = (input = '') => {
  var _a;
  const [, lib = 'vega', version = 'latest'] = (_a = VegaVersionRegEx.exec(input)) !== null && _a !== void 0 ? _a : [];
  const libStandardized = lib.replace('vegalite', 'vega-lite');
  const library = vegaLibraryGuard(libStandardized);
  return {
    library,
    version,
  };
};
export const getVegaLibSrc = ({ library, version }) => {
  return `https://unpkg.com/${library}@${version}`;
};
export const isVegaObject = (node) => {
  return (typeof node === 'object' &&
    node !== null &&
    'mediaType' in node &&
    isVegaMediaType(node.mediaType) &&
    Object.prototype.hasOwnProperty.call(node, 'spec') &&
    node.spec !== null);
};
