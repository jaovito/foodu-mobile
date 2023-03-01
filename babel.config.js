module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@translations': './i18n',
          '@services': './src/services',
          '@store': './src/store',
          '@test': './src/test',
          '@test-utils': './src/test/utils/test-utils.tsx',
          '@theme': './src/theme/index.ts',
          '@env': '.env.json',
          '@validators': './src/validators',
          '@utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
