// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';

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
        <Typography variant="display2" className={classes.text} color="inherit">
          Material UI Layout
        </Typography>
        <Typography variant="title" className={classes.text} color="inherit">
          React components to create layouts
          <br />
          based on
          <br />
          Material UI and Google's Material Design
        </Typography>
        <Typography variant="headline" className={classes.text} color="inherit">
          1. Install
        </Typography>
        <SyntaxHighlighter language="bash" style={okaidia}>
          npm install --save material-ui-layout
        </SyntaxHighlighter>
        <Typography variant="headline" className={classes.text} color="inherit">
          2. Implement layouts easily
        </Typography>
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
        <Typography variant="caption" className={classes.text} color="inherit">
          *this example is really simple... don't worry it has a lot of options
          to customize it and control it
        </Typography>
        <Typography variant="headline" className={classes.text} color="inherit">
          3. ??
        </Typography>
        <Typography variant="headline" className={classes.text} color="inherit">
          4. Profit
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(LandingSection);
