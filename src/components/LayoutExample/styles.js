// @flow

export default (theme: Object): Object => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: theme.palette.gradients.primary,
    color: theme.palette.common.white,
  },
  paper: {
    padding: theme.spacing.unit * 4,
    margin: theme.spacing.unit,
  },
  appBar: {
    backgroundColor: theme.palette.background.appBar,
    color: theme.palette.getContrastText(theme.palette.background.appBar),
  },
  footer: {
    backgroundColor: theme.palette.background.footer,
    color: theme.palette.getContrastText(theme.palette.background.footer),
  },
});
