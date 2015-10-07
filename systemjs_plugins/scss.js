//
// Custom css plugin here
//

import {CSSLoader, Plugins} from 'jspm-loader-css'
// import inlineComment from 'postcss-inline-comment';
import nested from 'postcss-nested';
import calc from 'postcss-calc';
import cssvariables from 'postcss-css-variables';

const cssGlobalVariables = {
  gColorPersianRed: '#ca352f',
  gColorAtlantis: 'hsl(98, 62%, 49%)'
};

const {fetch, bundle} = new CSSLoader([
  // inlineComment(), // NOT WORKING WHO KNOWS WHY...
  nested(),
  cssvariables({
    variables: cssGlobalVariables
  }),
  calc(),
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  Plugins.autoprefixer()
], __moduleName);

export {fetch, bundle};
