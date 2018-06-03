import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/Code';
import React from 'react';
import Layout, { BasicDrawer, BasicFooter } from 'material-ui-layout';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import AppBarDouble from '../AppBarDouble';
import AppBarSimple from '../AppBarSimple';
import SyntaxShow from '../SyntaxShow';
import ControlSection from '../ControlSection';

import LayoutController from '../LayoutController';

const links = [
  {
    href: 'https://material-ui-next.com/',
    label: 'Material-UI',
  },
  {
    href: 'https://github.com/OrigenStudio/material-ui-layout/tree/develop/src',
    label: 'GitHub',
  },
];

// TODO this need to go out
const variables = {
  title: 'Material-UI-Layout-Demo',
  smallMessage: 'Material-UI-Layout-Demo',
  tleft: 'left',
  tcenter: 'center',
  tright: 'right',
};

class LayoutExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftDrawerType: 'temporary',
      leftDrawerOpen: false,
      rightDrawerType: 'temporary',
      rightDrawerOpen: false,
      appBarContentType: 'simple',
      mainGrow: false,
      stickyFooter: false,
    };
  }
  handleAppBarTypeChange = event => {
    this.setState({ appBarContentType: event.target.value });
  };

  handleLeftDrawerTypeChange = event => {
    this.setState({ leftDrawerType: event.target.value });
  };

  toggleLeftDrawer = () => {
    this.setState({
      leftDrawerOpen: !this.state.leftDrawerOpen,
    });
  };
  setLeftDrawerState = leftDrawerState => {
    this.setState({
      leftDrawerOpen: leftDrawerState,
    });
  };

  handleRightDrawerTypeChange = event => {
    this.setState({ leftDrawerType: event.target.value });
  };

  toggleRightDrawer = () => {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen,
    });
  };

  setRightDrawerState = rightDrawerState => {
    this.setState({
      rightDrawerOpen: rightDrawerState,
    });
  };

  toggleMainGrow = () => {
    this.setState({
      mainGrow: !this.state.mainGrow,
    });
  };

  toggleStickyFooter = () => {
    this.setState({
      stickyFooter: !this.state.stickyFooter,
    });
  };

  render() {
    return (
      <Layout
        mainGrow={this.state.mainGrow === false ? false : true}
        stickyFooter={this.state.stickyFooter === false ? false : true}
        usingTwoRowAppBar={
          this.state.appBarContentType === 'double' ? true : false
        }
        appBarContent={
          this.state.appBarContentType === 'simple' ? (
            <AppBarSimple
              title={variables.title}
              links={links}
              toggleLeftDrawer={this.toggleLeftDrawer}
              toggleRightDrawer={this.toggleRightDrawer}
            />
          ) : (
            <AppBarDouble
              topLeftContent={variables.tleft}
              topCenterContent={variables.tcenter}
              topRightContent={variables.tright}
              bottomCenterContent={variables.tcenter}
              toggleLeftDrawer={this.toggleLeftDrawer}
              toggleRightDrawer={this.toggleRightDrawer}
            />
          )
        }
        footerContent={
          <BasicFooter
            title={variables.title}
            smallMessage={variables.smallMessage}
            bigMessage="Demo"
            links={links}
          />
        }
        leftDrawerContent={<BasicDrawer links={links} />}
        leftDrawerType={this.state.leftDrawerType}
        leftDrawerOpen={this.state.leftDrawerOpen}
        onLeftDrawerOpenChange={this.setLeftDrawerState}
        rightDrawerContent={<BasicDrawer links={links} />}
        rightDrawerType={this.state.rightDrawerType}
        rightDrawerOpen={this.state.rightDrawerOpen}
        onRightDrawerOpenChange={this.setRightDrawerState}
      >
        <LayoutController
          {...this.state}
          handleAppBarTypeChange={this.handleAppBarTypeChange}
          handleLeftDrawerTypeChange={this.handleLeftDrawerTypeChange}
          onLeftDrawerOpenChange={this.setLeftDrawerState}
          handleRightDrawerTypeChange={this.handleRightDrawerTypeChange}
          onRightDrawerOpenChange={this.setRightDrawerState}
          toggleMainGrow={this.toggleMainGrow}
          toggleStickyFooter={this.toggleStickyFooter}
        />
      </Layout>
    );
  }
}

export default withStyles()(LayoutExample);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
