// @flow

import * as React from 'react';
import Layout, { BasicDrawer } from 'material-ui-layout';
import AppBarSimple from '../components/AppBarSimple';
import Footer from '../components/Footer';
import { withStyles } from '@material-ui/core/styles';

import links from '../data/links';
import styles from './styles';

type Props = {
  classes: Object,
  title: String,
  children: React.Node,
};

class BasicLayout extends React.PureComponent<Props> {
  render() {
    const { classes, title, children } = this.props;
    return (
      <Layout
        appBarContent={<AppBarSimple title={title} links={links} />}
        appBarProps={{
          color: 'inherit',
          className: classes.appBar,
        }}
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
