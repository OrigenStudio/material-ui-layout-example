import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Layout, { BasicDrawer } from 'material-ui-layout';
import React from 'react';
import links from '../../data/links';
import AppBarDouble from '../AppBarDouble';
import AppBarSimple from '../AppBarSimple';
import Footer from '../Footer';
import LandingSection from '../LandingSection';
import LayoutController from '../LayoutController';
import SyntaxShow from '../SyntaxShow';
import styles from './styles';
import RightDrawerContent from '../RightDrawerContent';

// TODO this need to go out
const variables = {
  title: 'Material-UI-Layout-Demo',
};

class LayoutExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftDrawerType: 'temporary',
      leftDrawerOpen: false,
      leftDrawerUnder: true,
      rightDrawerType: 'temporary',
      rightDrawerOpen: false,
      rightDrawerUnder: false,
      appBarContentType: 'simple',
      mainGrow: false,
      stickyFooter: true,
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
  toggleLeftDrawerUnder =() =>{
    this.setState({
      leftDrawerUnder: !this.state.leftDrawerUnder,
    })
  }
  setLeftDrawerState = leftDrawerState => {
    this.setState({
      leftDrawerOpen: leftDrawerState,
    });
  };

  handleRightDrawerTypeChange = event => {
    this.setState({ rightDrawerType: event.target.value });
  };

  toggleRightDrawer = () => {
    this.setState({
      rightDrawerOpen: !this.state.rightDrawerOpen,
    });
  };

  toggleRightDrawerUnder = () => {
    this.setState({
      rightDrawerUnder: !this.state.rightDrawerUnder,
    })
  }

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
    const { classes } = this.props;
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
              title={variables.title}
              toggleLeftDrawer={this.toggleLeftDrawer}
              toggleRightDrawer={this.toggleRightDrawer}
            />
          )
        }
        appBarProps={{
          color: 'inherit',
          className: classes.appBar,
        }}
        footerContent={<Footer />}
        footerProps={{ color: 'inherit', className: classes.footer }}
        leftDrawerContent={<BasicDrawer links={links} />}
        leftDrawerType={this.state.leftDrawerType}
        leftDrawerOpen={this.state.leftDrawerOpen}
        onLeftDrawerOpenChange={this.setLeftDrawerState}
        leftDrawerUnder={this.state.leftDrawerUnder}
        rightDrawerContent={<RightDrawerContent />}
        rightDrawerType={this.state.rightDrawerType}
        rightDrawerOpen={this.state.rightDrawerOpen}
        rightDrawerUnder={this.state.rightDrawerUnder}
        onRightDrawerOpenChange={this.setRightDrawerState}
      >
        <div className={classes.wrapper}>
          <Grid container justify="center" alignContent="center">
            <Grid item xs={12} sm={11} md={9} lg={8}>
              <LandingSection />
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="title">Layout Controller</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subheading">
                        Play with me! 🕹️
                      </Typography>
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <LayoutController
                    {...this.state}
                    handleAppBarTypeChange={this.handleAppBarTypeChange}
                    handleLeftDrawerTypeChange={this.handleLeftDrawerTypeChange}
                    toggleLeftDrawer={this.toggleLeftDrawer}
                    toggleLeftDrawerUnder={this.toggleLeftDrawerUnder}
                    handleRightDrawerTypeChange={
                      this.handleRightDrawerTypeChange
                    }
                    toggleRightDrawerUnder={this.toggleRightDrawerUnder}
                    toggleRightDrawer={this.toggleRightDrawer}
                    toggleMainGrow={this.toggleMainGrow}
                    toggleStickyFooter={this.toggleStickyFooter}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<CodeIcon />}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="title">
                        Live Code Examples
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="subheading">Show me 💻</Typography>
                    </Grid>
                  </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <SyntaxShow gettingState={this.state} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
        </div>
      </Layout>
    );
  }
}

export default withStyles(styles)(LayoutExample);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
