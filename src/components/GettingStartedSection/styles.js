// @flow

export default (theme: Object): Object => ({
  wrapper: {
    width:'100%',
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
    textAlign: 'center',
  },
  code:{
    width: '100%',
  }
});
