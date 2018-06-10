// @flow

export default (theme: Object): Object => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '30%',
    maxWidth: '200px',
    height: 'auto',
    marginRight: theme.spacing.unit * 2,
  },
  textSection: {
    textAlign: 'left',
  },
  [theme.breakpoints.down('sm')]: {
    textSection: {
      textAlign: 'center',
    },
  },
});
