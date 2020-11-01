const path = require("path");

module.exports = {
  entry: "./src/CartApp.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "source-map",
  watch: true,
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", 
                        {
                          "targets": {"esmodules": true, "node": "current"}}]],
          },
        },
      },
    ],
  },
};