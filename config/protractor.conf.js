/**
 * @author: tipe.io
 */

require('ts-node/register');
var helpers = require('./helpers');

exports.config = {
  baseUrl: 'http://localhost:3000/',

  /**
   * Use `npm run e2e`
   */
  specs: [
    helpers.root('src/**/**.e2e.ts'),
    helpers.root('src/**/*.e2e.ts')
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 11000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 40000
  },

  capabilities: {
  'directConnect': true,
  browserName: 'chrome',

  chromeOptions: {
    args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
   }
  },
  
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
   useAllAngular2AppRoots: true,

   SELENIUM_PROMISE_MANAGER: false,
};
