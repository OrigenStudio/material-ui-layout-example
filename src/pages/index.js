// @flow

import React from 'react';
import LayoutExample from '../components/LayoutExample';

const IndexPage = (props: { data: Object }) => (
  <LayoutExample title={props.data.site.siteMetadata.title} />
);

export default IndexPage;

// $FlowIgnore: ignore graphql
export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
