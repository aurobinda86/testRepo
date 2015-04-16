/**
 * Created by aaga36 on 4/15/2015.
 */

require.config({

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': ['angular']
    },
    paths: {
        'angular': 'lib/angular.min',
        'angularMap': 'lib/angular.min.js.map',
        'angular-ui-router': 'lib/angular-ui-router.js',
        'app': 'app'
    },

    modules: [{
        name: 'todo/main',
        exclude: ['angular']
    }],

    deps: ['angular', 'app', 'states']
});
