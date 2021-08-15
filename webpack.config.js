module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./js/script.ts",
  resolve: {
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: { loader: "ts-loader" },
      },
    ],
  },
};
