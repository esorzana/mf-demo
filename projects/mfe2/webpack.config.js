const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');


module.exports = withModuleFederationPlugin({

    name: "mfe2",

    exposes: {

        './web-components': './projects/mfe2/src/bootstrap.ts',

    },

    shared: {

        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),

    }

});