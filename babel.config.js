module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    env: {
      production: {
        plugins: [
          'transform-remove-console',
          '@babel/plugin-transform-runtime',
        ],
      },
    },
  };
};
