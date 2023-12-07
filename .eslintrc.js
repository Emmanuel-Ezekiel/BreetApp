module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended', '@react-native'],
  plugins: ['unused-imports'],
  rules: {
    curly: 'off',
    'no-empty': 'off',
    'react-native/no-inline-styles': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 2,
    semi: 2,
    'no-dupe-keys': 2,
    'react-hooks/exhaustive-deps': 'off',
    'no-shadow': 'off',
    avoidEscape: 0,
    'prettier/prettier': ['error', {singleQuote: true}],
    'dot-notation': 'off',
    'react/no-unstable-nested-components': 'off', // turn this on and fix affected files later
  },
};
