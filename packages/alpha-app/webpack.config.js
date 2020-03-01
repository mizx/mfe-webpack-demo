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
      },
      {
        test: /\.md$/,
        loader: "raw-loader"
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "alpha_app",
      library: { type: "var", name: "alpha_app" },
      filename: "remoteEntry.js",
      remotes: {
        bravo_app: "bravo_app",
        charlie_app: "charlie_app"
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
