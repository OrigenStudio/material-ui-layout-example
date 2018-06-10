// @flow

import React, { PureComponent } from 'react';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import styles from './styles';

// TODO Use gatsby methods
import MULImage from '../../images/MUL_Icon.jpg';

type Props = {
  classes: Object,
  title: String,
  subtitle?: String,
  className?: String,
};

class BrandingSection extends PureComponent<Props> {
  render() {
    const { classes, title, subtitle, className } = this.props;
    return (
      <div className={classNames(classes.wrapper,className)} >
        <img src={MULImage} className={classes.image} alt="library icon" />
        <div className={classes.textSection}>
          <Typography variant="display2" color="inherit">
            {title}
          </Typography>
          <Typography variant="headline" color="inherit">
            {subtitle}
          </Typography>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(BrandingSection);
