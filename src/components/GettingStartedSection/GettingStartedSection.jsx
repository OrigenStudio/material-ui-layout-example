// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';
import Helmet from 'react-helmet';
import BrandingSection from '../BrandingSection';

import styles from './styles';
import links from '../../data/links';

const demoLink = links[1];

type Props = {
  classes: Object,
  title: string,
  version: string,
};

class GettingStartedSection extends React.PureComponent<Props> {
  render() {
    const { classes, title, version } = this.props;
    return (
      <div className={classes.wrapper}>
        <Helmet title="Easy peasy 🍋 squeezy" />
        <BrandingSection title={title} subtitle={version} />
        <Typography variant="headline" className={classes.section} color="inherit">
          1. Install
        </Typography>
        <div className={classes.code}>
          <SyntaxHighlighter language="bash" style={okaidia}>
            npm install --save material-ui-layout
          </SyntaxHighlighter>
        </div>
        <div className={classes.section}>
          <Typography variant="headline" color="inherit">
            2. Implement layouts easily
          </Typography>
          <div className={classes.code}>
            <SyntaxHighlighter language="jsx" style={okaidia}>
              {`
        import React from 'react'
        import Layout from 'material-ui-layout'
        
        import AppBarContent from '../components/AppBarContent'
        import FooterContent from '../components/AppBarContent'
        import DrawerContent from '../components/AppBarContent'
        
        const MyAppLayout = children => (
            <Layout
            appBarContent={<AppBarContent/>}
            leftDrawerContent={<DrawerContent />}
            footerContent={<FooterContent />}
            stickyFooter
            >
            {children}
            </Layout>
        )
        
        export default MyAppLayout
        `}
            </SyntaxHighlighter>
          </div>
          <Typography variant="caption" color="inherit">
            {
              "*this example is really simple... don't worry it has a lot of options to customize it and control it"
            }
          </Typography>
        </div>
        <Typography variant="headline" className={classes.section} color="inherit">
          3. ??
        </Typography>
        <Typography variant="headline" className={classes.section} color="inherit">
          4. Profit
        </Typography>
        <div className={classes.section}>
          <Typography variant="headline" color="inherit">
            Not convinced? 🤔
            <br />
            Play with the different options 🕹️
          </Typography>
          <Button
            color="secondary"
            variant="raised"
            className={classes.button}
            onClick={demoLink.onClick}
          >
            <demoLink.icon className={classes.buttonIcon} />
            {demoLink.label}
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(GettingStartedSection);
