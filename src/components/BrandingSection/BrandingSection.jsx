// @flow

import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import styles from './styles';

// TODO Use gatsby methods
import MULImage from '../../images/MUL_Icon.jpg';

type Props = {
  classes: Object,
  title: string,
  subtitle: string,
  className: string,
};

class BrandingSection extends PureComponent<Props> {
  static defaultProps = {
    subtitle: null,
    className: null,
  };

  render() {
    const {
      classes, title, subtitle, className,
    } = this.props;
    return (
      <div className={classNames(classes.wrapper, className)}>
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
