// @flow

import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../config/theme';

import BasicLayout from '../components/Layouts/BasicLayout';

type Props = {
  children: Function,
  data: Object,
  classes: Object,
};

class MainLayout extends React.Component<Props> {
  render() {
    const { children, data, classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet
          title={data.site.siteMetadata.title}
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
        <BasicLayout title={data.site.siteMetadata.title}>
          {children()}
        </BasicLayout>
      </MuiThemeProvider>
    );
  }
}

export default MainLayout;

// $FlowIgnore: ignore graphql
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
