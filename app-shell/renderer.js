/**
 * This is the process that actually loads and renders the app module.
 * It needs to load node-specific polyfills.
 */
require('reflect-metadata');
/**
 * Set of core-js polyfills borrowed from Angular CLI
 */
require('reflect-metadata');
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
require('core-js/es6/symbol');
require('core-js/es6/object');
require('core-js/es6/function');
require('core-js/es6/parse-int');
require('core-js/es6/parse-float');
require('core-js/es6/number');
require('core-js/es6/math');
require('core-js/es6/string');
require('core-js/es6/date');
require('core-js/es6/array');
require('core-js/es6/regexp');
require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/reflect');
require('core-js/es7/reflect');
require('core-js/es7/array');

require('zone.js/dist/zone-node');
require('zone.js/dist/long-stack-trace-zone');

const preboot = require('preboot');
const mdkirp = require('mkdirp');
const path = require('path');

const { enableProdMode } = require('@angular/core');
const { renderModuleFactory } = require('@angular/platform-server');
const { readdirSync, readFileSync, writeFileSync } = require('fs');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');


enableProdMode();

const browserRoot = path.resolve(__dirname, '../dist/apps/fish-goco');
const serverRoot = path.resolve(__dirname, '../dist/apps/fish-goco-server')
const bundles = readdirSync(serverRoot).filter(f => /\.bundle\.js$/.test(f));
const [mainBundle, polyfills] = ['main', 'polyfills']
  .map(prefix => stripJs(path.join(serverRoot, bundles.find(findBundle(prefix)))));

function findBundle(prefix) {
  return f => new RegExp(`${prefix}\.[a-z0-9]+\.bundle\.js`, 'i').test(f);
}

function stripJs(fileName) {
  return fileName.replace(/\.js$/, '');
}
// Everything hard-coded because this is just a temporary script which CLI will provide later.
const moduleName = 'AppServerModule';
const templatePath = path.join(browserRoot, 'index.html');
const appModule = require(mainBundle).AppServerModuleNgFactory;

renderModuleFactory(appModule, {
  document: readFileSync(templatePath, 'utf-8'),
  url: '/shell'
})
  .then(body => {
    console.log('done rendering!');
    return body.replace('<!-- INSERT_PREBOOT_SCRIPT -->', ['<script>', preboot.getInlineCode({
      appRoot: ['app-root'],
      uglify: true
    }), '</script>'].join('\n'));
  })
  .then((body) => writeFileSync(templatePath, body));
