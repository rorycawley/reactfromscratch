const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// by making this a function we get access to the env variables that we pass from our package.json file
module.exports = (envVars) => {
  console.log(JSON.stringify(envVars));
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
