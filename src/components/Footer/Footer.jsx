// @flow

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

type Props = {
  classes: Object,
};

class Footer extends React.PureComponent<Props> {
  render() {
    return (
      <Grid
        container
        alignItems="flex-end"
        justify="space-around"
        spacing={2}
        className={this.props.classes.wrapper}
      >
        <Grid item xs={12} md={4} className={this.props.classes.text}>
          <Typography variant="title" color="inherit" gutterBottom>
            Easy Layouts
          </Typography>
          <Typography variant="subheading" color="inherit">
            Made with ❤️ by <a href="https://origen.studio">Origen Studio</a>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Footer);
