// @flow

import { createMuiTheme } from '@material-ui/core/styles';
import each from 'lodash/each';

const palette = {
  primary: {
    main: '#E72476',
  },
  secondary: {
    main: '#2FA7CD',
    contrastText: '#FFFFFF',
  },
  gradients: {
    primary: 'linear-gradient(to right, #340e4f 0%, #f91275 100%)',
  },
  background: {
    appBar: '#18232B',
    footer: '#F0F0F0',
  },
};

const theme = createMuiTheme({ palette });

// Further customize the outcome of the theme
const coef = 0.1;
const modifyRem = (value, coef) => {
  return `${parseFloat(value) * (1 + coef)}rem`;
};

each(theme.typography, (variant, variantName) => {
  if (typeof variant !== 'object') {
    return variant;
  }
  theme.typography[variantName] = {
    ...variant,
    fontSize: modifyRem(variant.fontSize, -coef * 3),
    [theme.breakpoints.up('sm')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 2),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: modifyRem(variant.fontSize, -coef * 1),
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: modifyRem(variant.fontSize, 0),
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: modifyRem(variant.fontSize, coef),
    },
  };
});

export default theme;
