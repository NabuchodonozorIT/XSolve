// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress'
    ],

    files: [
      // Grab all files in the app folder that contain .spec.
      'src/tests.bundle.js',
      '**/*.html'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/tests.bundle.js': ['webpack', 'sourcemap'],
      '**/*.html': ['ng-html2js']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    webpack: require('./config/webpack.test'),

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'jsonplaceholder.htmlTemplates'
    },

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};
