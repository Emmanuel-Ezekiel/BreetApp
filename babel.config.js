module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@redux': './src/redux',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@services': './src/services',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
