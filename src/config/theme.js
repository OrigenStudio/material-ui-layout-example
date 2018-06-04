// @flow

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: {
    main: '#E72476',
  },
  secondary: {
    main: '#2FA7CD',
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

export default theme;
