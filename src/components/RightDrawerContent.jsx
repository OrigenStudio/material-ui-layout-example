// @flow
import React from 'react';
import { BasicDrawer } from 'material-ui-layout';
import { Typography } from '@material-ui/core';

import companies from '../data/companies';

type Props = {};
class RightDrawerContent extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Typography variant="headline" style={{ padding: '8px' }}>
          {' '}
          Companies that may use it someday{' '}
        </Typography>
        <BasicDrawer links={companies} />
      </div>
    );
  }
}

export default RightDrawerContent;
