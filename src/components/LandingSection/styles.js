// @flow

export default (theme: Object): Object => ({
  wrapper: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 6,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '50%',
    maxWidth: '200px',
    height: 'auto',
  },
  section: {
    width: '100%',
    marginBottom: theme.spacing.unit * 4,
    textAlign: 'center',
  },
  code: {
    width: 'auto',
    maxWidth: '100%',
    marginBottom: theme.spacing.unit * 4,
  },
  githubSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  githubButton: {
    marginLeft: theme.spacing.unit,
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { margin: theme.spacing.unit },
  noTextDecoration: { textTransform: 'none' },
  buttonIcon: { marginRight: theme.spacing.unit },
});
