const HtmlWebpackPlugin = require("html-webpack-plugin");

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
          // rootMode: "upward",
          presets: [require.resolve("@babel/preset-react")]
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
      // chunks: ["main"]
    })
  ]
};
