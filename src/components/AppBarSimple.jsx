// @flow

import React from 'react';
import { BasicAppBar } from 'material-ui-layout';

type Props = {
  toggleLeftDrawer?: Function,
  toggleRightDrawer?: Function,
  title: String,
  links?: Array<Object>,
  logo?: String,
  onLogoClick?: Function,
  menuIconAlways?: Boolean,
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
      onLogoClick,
    } = this.props;
    return (
      <BasicAppBar
        onLogoClick={onLogoClick}
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
