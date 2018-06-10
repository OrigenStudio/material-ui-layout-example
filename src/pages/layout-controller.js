// @flow

import React from 'react';
import LayoutExample from '../components/Layouts/LayoutExample';

const IndexPage = (props: { data: Object }) => (
  <LayoutExample
    title={props.data.site.siteMetadata.title}
    version={props.data.site.siteMetadata.version}
  />
);

export default IndexPage;

// $FlowIgnore: ignore graphql
export const query = graphql`
  query LayoutControllerQuery {
    site {
      siteMetadata {
        title
        version
      }
    }
  }
`;
