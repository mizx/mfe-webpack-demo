const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = () => ({
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  target: 'web',

  output: {
    publicPath: "auto"
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"]
        },
        exclude: [/node_modules/],
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_02",
      library: { type: "var", name: "app_02" },
      filename: "remoteEntry.js",
      remotes: {
        app_01: "app_01",
        app_03: "app_03"
      },
      exposes: {
        './Dialog': "./src/Dialog",
        './Tabs': "./src/Tabs"
      },
      shared: {
        react: {
          import: 'react',
          shareKey: 'react',
          shareScope: 'default',
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        "@material-ui/core": {
          singleton: true,
        },
        "react-router-dom": {
          singleton: true,
        },
        'regenerator-runtime': {
          singleton: true,
        },
        'fm-loader': {
          singleton: true,
        },
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"]
    })
  ]
});
