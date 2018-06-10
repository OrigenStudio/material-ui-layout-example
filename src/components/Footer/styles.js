// @flow

export default (theme: Object): Object => ({
  text: {
    textAlign: 'center',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main,
    },
  },
});
