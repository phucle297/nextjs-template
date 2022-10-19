/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './src/styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {
    mode: "local",
    localIdentName: "[hash:base64:8]",
    exportLocalsConvention: "camelCase",
    exportOnlyLocals: false,
    getLocalIdent: (context, localIdentName, localName, options) => {
      return "whatever_random_class_name";
    },
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    localeDetection: false
  },
  // Other Config Here...

  webpack(config) {
    return config;
  },
});
