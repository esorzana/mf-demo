const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

console.log("boot: "+ __filename);

module.exports = {
    output: {
        publicPath: "auto",
        uniqueName: "mfe1",
        scriptType: 'text/javascript'
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },

    plugins: [
        new ModuleFederationPlugin({

            // For remotes (please adjust)
            name: "mfe1",
            //library: { type: "var", name: "angularf" },
            filename: "remoteEntry.js",
            exposes: {
                './web-components': './projects/mfe1/src/bootstrap.ts',
            },

            // For hosts (please adjust)

            shared: {
                "projects/core/src/public-api": { singleton: true, requiredVersion: '0.0.1' },
                ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
            }
        }

        )
    ],
};