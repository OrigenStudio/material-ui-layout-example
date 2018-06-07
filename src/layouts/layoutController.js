// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../config/theme';

type Props = {
  children: Function,
  data: Object,
};

class Layout extends React.Component<Props> {
  render() {
    const { children, data } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet
          title={`🕹️ Let's play!`}
          meta={[
            {
              name: 'description',
              content: 'A simple way to create layouts for your applications',
            },
            {
              name: 'keywords',
              content:
                'react, material design, layouts, material ui, web development, javascript',
            },
          ]}
          link={[
            {
              rel: 'stylesheet',
              href:
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
            },
          ]}
        />
        <div>{children()}</div>
      </MuiThemeProvider>
    );
  }
}

export default Layout;
