import { injectBabelPlugin } from "react-app-rewired";

module.exports = function override(config, env) {
  config = injectBabelPlugin('relay', config);
  return config;
}