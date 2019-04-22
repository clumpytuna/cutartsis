module.exports = {
  assetsDir: 'static',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
  },
  chainWebpack: config => {
    config.plugin('preload').tap(options => {
      // нет смысла их прелоадить, они и так сразу загружаются
      options[0].fileBlacklist.push(/app(.)+?\.(css|js)$/);
      return options;
    });

    // make images.json to be preload instead of prefetch
    config.plugin('prefetch').tap(options => {
      options[0].rel = 'preload';
      return options;
    });
  },
};
