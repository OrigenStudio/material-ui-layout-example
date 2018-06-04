// @flow

export default (theme: Object): Object => ({
  wrapper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    maxWidth: '200px',
    height: 'auto',
  },
  text: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
});
