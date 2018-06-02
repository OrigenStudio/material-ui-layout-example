// @flow

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, GridList , GridListTile} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

type Props = {
  sectionTitle: String,
  children: React.Node,
  topRightElement: React.Node,
};

class ControlSection extends React.Component<Props> {
  render() {
    const { sectionTitle, children, topRightElement } = this.props;
    return (
      <Grid container >
        <Grid item xs={6}>
          <Typography variant="headline" gutterBottom>
            {sectionTitle}
          </Typography>
        </Grid>
        <Grid item xs={6}>
            {topRightElement}
        </Grid>
        <Grid item xs={12}>
            {children}
        </Grid>   
        <Divider light />
      </Grid>
    );
  }
}

export default ControlSection;