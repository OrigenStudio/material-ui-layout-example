// @flow

import React from 'react';
import GettingStartedSection from '../components/GettingStartedSection';

const IndexPage = (props: { data: Object }) => (
  <GettingStartedSection title={props.data.site.siteMetadata.title} />
);

export default IndexPage;

// $FlowIgnore: ignore graphql
export const query = graphql`
  query GettingStartedPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
