// @flow

import React from 'react';
import LandingSection from '../components/LandingSection';

type P = {
  data: Object,
};

type S = {};

class LandingPage extends React.PureComponent<P, S> {
  render() {
    return <LandingSection />;
  }
}

export default LandingPage;

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
