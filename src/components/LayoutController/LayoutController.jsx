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

import styles from './styles';

type Props = {
  classes: Object,
  appBarContentType: String,
    leftDrawerType: String,
    rightDrawerType: String,
    mainGrow:Boolean,
    stickyFooter: Boolean,
    leftDrawerOpen: Boolean,
    onLeftDrawerOpenChange: Function,
    rightDrawerOpen: Boolean,
    onRightDrawerOpenChange: Function,
    handleAppBarTypeChange: Function,
    handleLeftDrawerTypeChange: Function,
    handleRightDrawerChange: Function,
    toggleMainGrow: Function,
    toggleStickyFooter: Function,
};

class LayoutController extends React.Component<Props> {
  render() {
    const {
      classes,
      appBarContentType,
      leftDrawerType,
      rightDrawerType,
      mainGrow,
      stickyFooter,
      handleAppBarTypeChange,
      handleLeftDrawerTypeChange,
      handleRightDrawerChange,
      toggleMainGrow,
      toggleStickyFooter,
      //The props above are just used for these the example
      // --------------------------
      // The props below are the the Layout component will pass as props.
      leftDrawerOpen,
      onLeftDrawerOpenChange,
      rightDrawerOpen,
      onRightDrawerOpenChange,
    } = this.props;
    return (
      <div className={classes.wrapper}>
        <Grid container justify="center" alignContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Paper className={classes.paper}>
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
                      onClick={onLeftDrawerOpenChange}
                      color="primary"
                      disabled={
                        leftDrawerType === 'permanent' ? true : false
                      }
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
                  </FormControl>
                </ControlSection>
                <ControlSection
                  sectionTitle="Right Drawer"
                  topRightElement={
                    <Button
                      variant="raised"
                      onClick={onRightDrawerOpenChange}
                      color="primary"
                      disabled={
                        rightDrawerType === 'permanent'
                          ? true
                          : false
                      }
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
                      onChange={handleRightDrawerChange}
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
                  </FormControl>
                </ControlSection>
                <ControlSection sectionTitle="Layout Properties">
                  <FormGroup row>
                    <FormControlLabel
                      label="mainGrow"
                      control={
                        <Switch
                          checked={mainGrow}
                          onChange={toggleMainGrow}
                        />
                      }
                    />
                    <FormControlLabel
                      label="stickyFooter"
                      control={
                        <Switch
                          checked={stickyFooter}
                          onChange={toggleStickyFooter}
                        />
                      }
                    />
                  </FormGroup>
                </ControlSection>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Grid container style={{ paddingTop: 20 }}>
                    <Typography
                      type="headline"
                      gutterBottom
                      style={{ maxWidth: 200 }}
                    >
                      Source Code
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <ExpansionPanel className={classes.panelCode}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
                    <ExpansionPanelDetails>
                        Test
                      {/* <SyntaxShow gettingState={this.state} /> */}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LayoutController);
