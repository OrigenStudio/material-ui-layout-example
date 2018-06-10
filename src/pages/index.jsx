// @flow

import React from 'react';
import LandingSection from '../components/LandingSection';

type Props = {
  data: Object,
};

class LandingPage extends React.PureComponent<Props> {
  render() {
    return <LandingSection data={this.props.data} />;
  }
}

export default LandingPage;

// $FlowIgnore: ignore graphql
export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        version
      }
    }
  }
`;
