// @flow

export default (theme: Object): Object => ({
  wrapper: {
    width: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    width: 'auto',
    maxWidth: '100%',
  },
  code: {
    width: 'auto',
    maxWidth: '100%',
  },
  button: { margin: theme.spacing() },
  buttonIcon: { marginRight: theme.spacing() },
});
