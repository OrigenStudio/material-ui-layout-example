// @flow

import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, GridList, GridListTile } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

type Props = {
  classes: Object,
  sectionTitle: String,
  children: React.Node,
  topRightElement: React.Node,
};

class ControlSection extends React.Component<Props> {
  render() {
    const { classes, sectionTitle, children, topRightElement } = this.props;
    return (
      <Grid container className={classes.wrapper} >
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
        <Divider style={{ width: '100%' }} />
      </Grid>
    );
  }
}

export default withStyles(styles)(ControlSection);
