// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// TODO Use gatsby methods
import MULImage from '../../images/MUL_Icon.jpg';

import styles from './styles';

type Props = {
  classes: Object,
};

class LandingSection extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <img src={MULImage} className={classes.image} alt="library icon" />
        <Typography variant="display2" className={classes.text} color="inherit">Material UI Layout</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(LandingSection);
