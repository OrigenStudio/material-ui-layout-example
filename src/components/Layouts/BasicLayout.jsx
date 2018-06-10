// @flow

import * as React from 'react';
import Layout, { BasicDrawer } from 'material-ui-layout';
import { withStyles } from '@material-ui/core/styles';
import { navigateTo } from 'gatsby-link';
import AppBarSimple from '../AppBarSimple';
import Footer from '../Footer';
import links from '../../data/links';
import styles from './styles';

type Props = {
  classes: Object,
  title: string,
  children: React.Node,
};

class BasicLayout extends React.PureComponent<Props> {
  render() {
    const { classes, title, children } = this.props;
    return (
      <Layout
        appBarContent={
          <AppBarSimple
            title={title}
            links={links}
            menuIconAlways={false}
            onLogoClick={() => {
              navigateTo('/');
            }}
          />
        }
        appBarProps={{
          color: 'inherit',
          className: classes.appBar,
        }}
        leftDrawerContent={<BasicDrawer links={links} />}
        footerContent={<Footer />}
        footerProps={{ color: 'inherit', className: classes.footer }}
        stickyFooter
        mainGrow={false}
      >
        <div className={classes.wrapper}>{children}</div>
      </Layout>
    );
  }
}

export default withStyles(styles)(BasicLayout);
