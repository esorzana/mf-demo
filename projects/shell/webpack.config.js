const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  shared: {
    //"core": { singleton: true, requiredVersion: '0.0.1' },
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
