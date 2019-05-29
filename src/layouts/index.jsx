// @flow

import * as React from 'react';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme from '../config/theme';

import BasicLayout from '../components/Layouts/BasicLayout';

type Props = {
  children: Function,
  data: Object,
};

class MainLayout extends React.Component<Props> {
  render() {
    const { children, data } = this.props;
    return (
      <ThemeProvider theme={theme}>
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
              content: 'react, material design, layouts, material ui, web development, javascript',
            },
          ]}
          link={[
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500',
            },
          ]}
        >
          <noscript>
            {`
              <h1>Javascript is required to visualize this web page</h1>
              <a href="https://github.com/OrigenStudio/material-ui-layout">Material-UI-Layout Package</a>
            `}
          </noscript>
        </Helmet>
        <BasicLayout title={data.site.siteMetadata.title}>{children()}</BasicLayout>
      </ThemeProvider>
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
