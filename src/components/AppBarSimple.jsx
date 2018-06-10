// @flow

import React from 'react';
import { BasicAppBar } from 'material-ui-layout';

type Props = {
  toggleLeftDrawer?: Function,
  toggleRightDrawer?: Function,
  title: string,
  links?: Array<Object>,
  logo?: string,
  onLogoClick?: Function,
  menuIconAlways?: true | false,
};

class AppBarSimple extends React.PureComponent<Props> {
  static defaultProps ={
    toggleLeftDrawer: undefined,
    toggleRightDrawer: undefined,
    links: undefined,
    logo: undefined,
    onLogoClick: undefined,
    menuIconAlways: false,
  }
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
