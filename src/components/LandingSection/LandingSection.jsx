// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import Helmet from 'react-helmet';
import classNames from 'classnames';

// TODO Use gatsby methods
import MULImage from '../../images/MUL_Icon.jpg';
import links from '../../data/links';

import styles from './styles';

const gettingStartedLink = links[0];
const demoLink = links[1];

type Props = {
  classes: Object,
  data: Object,
};

class LandingSection extends React.Component<Props> {
  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.wrapper}>
        <Helmet>
          <script async defer src="https://buttons.github.io/buttons.js" />
        </Helmet>
        <div className={classes.section}>
          <img src={MULImage} className={classes.image} alt="library icon" />
        </div>
        <div className={classes.section}>
          <Typography variant="display2" color="inherit">
            {data.site.siteMetadata.title}
          </Typography>
          <Typography variant="title" color="inherit">
            {data.site.siteMetadata.version}
          </Typography>
        </div>
        <div className={classNames(classes.section, classes.githubSection)}>
          <Typography variant="subheading" color="inherit">
            {"If you like don't forget to "}
          </Typography>
          <div className={classes.githubButton}>
            <a
              className="github-button"
              href="https://github.com/OrigenStudio/material-ui-layout"
              data-size="large"
              data-show-count="true"
              aria-label="Star OrigenStudio/material-ui-layout on GitHub"
            >
              Star
            </a>
          </div>
        </div>
        <div className={classes.section}>
          <Typography variant="headline" color="inherit">
            A declarative way to create layouts easily
            <br />
            based on
          </Typography>
          <div className={classes.buttonGroup}>
            <Button
              href="https://material-ui.com/"
              target="_blank"
              color="inherit"
              className={classNames(classes.button, classes.noTextDecoration)}
            >
              <Typography variant="title" color="inherit">
                Material-UI
              </Typography>
            </Button>
            <Typography variant="title" color="inherit">
              {'&'}
            </Typography>
            <Button
              target="_blank"
              href="https://material.io/"
              color="inherit"
              className={classNames(classes.button, classes.noTextDecoration)}
            >
              <Typography variant="title" color="inherit">
                {'Google\'s Material Design'}
              </Typography>
            </Button>
          </div>
        </div>
        <div className={classes.code}>
          <SyntaxHighlighter language="bash" style={okaidia}>
            npm install --save material-ui-layout
          </SyntaxHighlighter>
        </div>
        <div className={classes.buttonGroup}>
          <Button
            color="primary"
            variant="raised"
            className={classes.button}
            onClick={gettingStartedLink.onClick}
          >
            <gettingStartedLink.icon className={classes.buttonIcon} />
            <Typography variant="title" color="inherit">
              {gettingStartedLink.label}
            </Typography>
          </Button>
          <Button
            color="secondary"
            variant="raised"
            className={classes.button}
            onClick={demoLink.onClick}
          >
            <demoLink.icon className={classes.buttonIcon} />
            <Typography variant="title" color="inherit">
              {demoLink.label}
            </Typography>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingSection);
