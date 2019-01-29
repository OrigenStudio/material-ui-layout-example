module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  globals: {
    graphql: true,
  },
  rules: {
    'react/prefer-stateless-function': 'warning',
    'jsx-a11y/accessible-emoji': 'warning', // TODO improve emoji integration
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
  },
};
