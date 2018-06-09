// @flow

import React from 'react';
import { BasicAppBar } from 'material-ui-layout';

type Props = {
  toggleLeftDrawer: Function,
  toggleRightDrawer: Function,
  title: String,
  links: Array<Object>,
  logo: Strings,
  menuIconAlways: Boolean,
};

class AppBarSimple extends React.PureComponent<Props> {
  render() {
    const {
      toggleLeftDrawer,
      toggleRightDrawer,
      title,
      links,
      logo,
      menuIconAlways,
    } = this.props;
    return (
      <BasicAppBar
        menuIconAlways={menuIconAlways}
        title={title}
        logo={logo}
        links={links}
        toggleLeftDrawer={toggleLeftDrawer}
        toggleRightDrawer={toggleRightDrawer}
      />
    );
  }
}

export default AppBarSimple;
