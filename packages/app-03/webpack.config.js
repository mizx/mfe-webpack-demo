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
        exclude: [/node_modules/],
        options: {
          presets: ["@babel/preset-react"]
        },
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_03",
      library: { type: "var", name: "app_03" },
      filename: "remoteEntry.js",
      remotes: {
        app_01: 'app_01',
      },
      exposes: {
        './Button': "./src/Button",
        './MyButton': './src/MyButton',
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
        'regenerator-runtime': {
          singleton: true,
        },
        'fm-loader': {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
});
