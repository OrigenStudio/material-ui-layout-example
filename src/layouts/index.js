// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from '../config/theme';

type Props = {
  children: React.Node,
  data: any,
};

class Layout extends React.Component<Props> {
  render() {
    const { children, data } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
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
