// @flow

import * as React from 'react';
import { TwoRowsAppBar } from 'material-ui-layout';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';

const AppBarDouble = (props: {
  title: String,
  toggleLeftDrawer: Function,
  toggleRightDrawer: Function,
}) => (
  <TwoRowsAppBar
    topLeftContent={
      <IconButton color="inherit" onClick={props.toggleLeftDrawer}>
        <Menu />
      </IconButton>
    }
    topCenterContent={
      <Typography variant="title" color="inherit">
        {props.title}
      </Typography>
    }
    topRightContent={
      <Button color="primary" onClick={props.toggleRightDrawer}>
        Open Right Drawer
      </Button>
    }
    bottomLeftContent={
      <Typography variant="subheading" color="inherit">
        Content for the bottom left
      </Typography>
    }
    bottomCenterContent={
      <Typography variant="subheading" color="inherit">
        Useful for mobile apps
      </Typography>
    }
    bottomRightContent={
      <Typography variant="subheading" color="inherit">
        Content for the bottom right
      </Typography>
    }
  />
);
export default AppBarDouble;
