(function (global) {
  var config = {
    "meta": {
      "npm:@angular/*": {
        format: "cjs",
        build: false
      },
      "npm:*": {
        build: false
      },
      "app/*.html": {
        loader: 'text'
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'vendor/',
    },
    // map tells the System loader where to look for things
    map: {
      "main": "main.js",
      "polyfills": "polyfills.js",
      "app": 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
      'core-js': 'npm:core-js',
      'microui-contracts': 'npm:microui-contracts/dist',
      'lodash': 'npm:lodash',
      'primeng':'npm:primeng',
      'text': 'npm:systemjs-plugin-text/text.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: 'cjs',
      rxjs: 'cjs',
      'core-js': 'cjs',
      'lodash': '',
      'app/shared': 'cjs',
      'microui-contracts': 'cjs',
      environments: '',
      primeng: {
          defaultExtension: 'js'
      }
    }
  };
  for (var key in config.packages) {
    var val = config.packages[key];
    if (typeof (val) === 'string') {
      config.packages[key] = {
        main: "index.js",
        defaultExtension: 'js'
      }
      if (val) {
        config.packages[key].format = val;
      }
    }
  }
  System.config(config);
})(this);
