module.exports = function (api) {
  api.cache(true)
  const presets = [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ]
  const plugins = ['@babel/plugin-transform-runtime']

  return {
    presets,
    plugins,
    env: {
      production: {
        plugins: [
          'transform-remove-console',
          '@babel/plugin-transform-runtime',
        ],
      },
    },
  }
}
