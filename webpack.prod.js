const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
module.exports = merge(commonConfig, {
  mode: "production",
  performance: {
    // this object disables different hints coming from webpack in form of warnings. webpack itself gives some hints to make ur app performance better
    hints: false,
  },
});
