const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config,
  );
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color" : "#4ABFAB",
      "@font-family" : "Nunito",
      "@layout-body-background" : "#f0f2f5",
      "@layout-header-background" : "#2B2F37",
      "@layout-footer-background" : "#2B2F37",
      "@layout-header-height" : "72px",
      "@menu-highlight-color" : "#4ABFAB",
      "@menu-bg" : "@layout-header-background",
      "@menu-item-active-bg" : "#4fABFAB",
      "@menu-item-color" : "#ffffff",
      "@btn-default-color" : "white",
      "@btn-default-bg" : "#2B2F37",
      "@btn-disable-color" : "@disabled-color",
      "@btn-disable-bg" : "@disabled-bg",
      "@border-color-base" : "#2B2F37"
    },
    javascriptEnabled: true,
  })(config, env);
  return config;
};
