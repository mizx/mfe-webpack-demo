const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false
  },

  output: {
    publicPath: "http://localhost:3001/"
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")]
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host_app",
      library: { type: "var", name: "host_app" },
      filename: "remoteEntry.js",
      remotes: {
        app_mui: "app_mui",
        app_sc: "app_sc"
      },
      exposes: {
        SideNav: "./src/SideNav",
        Page: "./src/Page"
      },
      shared: ["react", "react-dom", "@material-ui/core"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
