const { override, addDecoratorsLegacy } = require("customize-cra");
const path = require("path");

module.exports = override(
  // Add decorators legacy
  addDecoratorsLegacy(),
  
  // Add aliases
  (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "src"),
    };
    if (config.output && config.output.path) {
      config.output.path = path.resolve(__dirname, 'build');
    }
    return config;
  }
);
