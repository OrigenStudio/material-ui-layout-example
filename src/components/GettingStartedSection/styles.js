// @flow

export default (theme: Object): Object => ({
  wrapper: {
    width:'100%',
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    marginTop: theme.spacing.unit * 4,
    textAlign: 'center',
    width:'auto',
    maxWidth: '100%',
  },
  code:{
    width: 'auto',
    maxWidth: '100%',
  },
  button: { margin: theme.spacing.unit },
  buttonIcon: { marginRight: theme.spacing.unit },
});
