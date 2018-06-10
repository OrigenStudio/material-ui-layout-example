// @flow

import React from 'react';
import GettingStartedSection from '../components/GettingStartedSection';
import Helmet from 'react-helmet';

const IndexPage = (props: { data: Object }) => (
  <div>
    <Helmet title="Easy peasy 🍋 squeezy" />
    <GettingStartedSection
      title={props.data.site.siteMetadata.title}
      version={props.data.site.siteMetadata.version}
    />
  </div>
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
