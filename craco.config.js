const CracoAlias = require('craco-alias');
const WebpackBar = require('webpackbar');

module.exports = {
  webpack: {
    plugins: [new WebpackBar({ profile: true })],
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
};
