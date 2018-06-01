// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

type Props = {
  children: any,
  data: any,
};

class Layout extends React.Component<Props> {
  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        {children()}
      </div>
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
