// @flow

import * as React from 'react';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/Code';
import ControlSection from '../ControlSection';
import SyntaxShow from '../SyntaxShow';

type Props = {
  appBarContentType: String,
  leftDrawerType: String,
  rightDrawerType: String,
  mainGrow: Boolean,
  stickyFooter: Boolean,
  leftDrawerOpen: Boolean,
  toggleLeftDrawer: Function,
  onLeftDrawerOpenChange: Function,
  leftDrawerUnder: Function,
  toggleLeftDrawerUnder: Function,
  rightDrawerOpen: Boolean,
  toggleRightDrawer: Function,
  onRightDrawerOpenChange: Function,
  rightDrawerUnder: Function,
  toggleRightDrawerUnder: Function,
  handleAppBarTypeChange: Function,
  handleLeftDrawerTypeChange: Function,
  handleRightDrawerTypeChange: Function,
  toggleMainGrow: Function,
  toggleStickyFooter: Function,
};

class LayoutController extends React.Component<Props> {
  render() {
    const {
      appBarContentType,
      leftDrawerType,
      rightDrawerType,
      mainGrow,
      stickyFooter,
      handleAppBarTypeChange,
      toggleLeftDrawer,
      handleLeftDrawerTypeChange,
      leftDrawerUnder,
      toggleLeftDrawerUnder,
      toggleRightDrawer,
      handleRightDrawerTypeChange,
      rightDrawerUnder,
      toggleRightDrawerUnder,
      toggleMainGrow,
      toggleStickyFooter,
      leftDrawerOpen,
      onLeftDrawerOpenChange,
      rightDrawerOpen,
      onRightDrawerOpenChange,
    } = this.props;
    return (
      <Grid container>
        <ControlSection sectionTitle="AppBar">
          <FormControl>
            <FormLabel>AppBar type</FormLabel>
            <RadioGroup
              row
              value={appBarContentType}
              onChange={handleAppBarTypeChange}
            >
              <FormControlLabel
                value="simple"
                control={<Radio />}
                label="Simple AppBar"
              />
              <FormControlLabel
                value="double"
                control={<Radio />}
                label="Double AppBar"
              />
            </RadioGroup>
          </FormControl>
        </ControlSection>
        <ControlSection
          sectionTitle="Left Drawer"
          topRightElement={
            <Button
              variant="raised"
              onClick={toggleLeftDrawer}
              color="secondary"
              disabled={leftDrawerType === 'permanent' ? true : false}
            >
              {leftDrawerOpen === true ? 'Close' : 'Open'}
            </Button>
          }
        >
          <FormControl>
            <FormLabel>Drawer type</FormLabel>
            <RadioGroup
              row
              value={leftDrawerType}
              onChange={handleLeftDrawerTypeChange}
            >
              <FormControlLabel
                value="temporary"
                control={<Radio />}
                label="Temporary"
              />
              <FormControlLabel
                value="persistent"
                control={<Radio />}
                label="Persistent"
              />
              <FormControlLabel
                value="permanent"
                control={<Radio />}
                label="Permanent"
              />
            </RadioGroup>
            <FormLabel>Other settings</FormLabel>
            <FormControlLabel
              label="leftDrawerUnder"
              disabled={leftDrawerType==='temporary'}
              control={<Switch checked={leftDrawerUnder} onChange={toggleLeftDrawerUnder} />}
            />
          </FormControl>
        </ControlSection>
        <ControlSection
          sectionTitle="Right Drawer"
          topRightElement={
            <Button
              variant="raised"
              onClick={toggleRightDrawer}
              color="secondary"
              disabled={rightDrawerType === 'permanent' ? true : false}
            >
              {rightDrawerOpen === true ? 'Close' : 'Open'}
            </Button>
          }
        >
          <FormControl>
            <FormLabel>Drawer type</FormLabel>
            <RadioGroup
              row
              value={rightDrawerType}
              onChange={handleRightDrawerTypeChange}
            >
              <FormControlLabel
                value="temporary"
                control={<Radio />}
                label="Temporary"
              />
              <FormControlLabel
                value="persistent"
                control={<Radio />}
                label="Persistent"
              />
              <FormControlLabel
                value="permanent"
                control={<Radio />}
                label="Permanent"
              />
            </RadioGroup>
            <FormLabel>Other settings</FormLabel>
            <FormControlLabel
              label="rightDrawerUnder"
              disabled={rightDrawerType === 'temporary'}
              control={<Switch checked={rightDrawerUnder} onChange={toggleRightDrawerUnder} />}
            />
          </FormControl>
        </ControlSection>
        <ControlSection sectionTitle="Layout Properties">
          <FormGroup row>
            <FormControlLabel
              label="mainGrow"
              control={<Switch checked={mainGrow} onChange={toggleMainGrow} />}
            />
            <FormControlLabel
              label="stickyFooter"
              control={
                <Switch checked={stickyFooter} onChange={toggleStickyFooter} />
              }
            />
          </FormGroup>
        </ControlSection>
      </Grid>
    );
  }
}

export default withStyles()(LayoutController);
