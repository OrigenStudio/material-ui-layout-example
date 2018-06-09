// @flow

import React from 'react';
import GettingStartedSection from '../components/GettingStartedSection';

const IndexPage = (props: { data: Object }) => (
  <GettingStartedSection title={props.data.site.siteMetadata.title} version={props.data.site.siteMetadata.version} />
);

export default IndexPage;

// $FlowIgnore: ignore graphql
export const query = graphql`
  query GettingStartedPageQuery {
    site {
      siteMetadata {
        title
        version
      }
    }
  }
`;
