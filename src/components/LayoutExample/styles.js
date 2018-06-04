// @flow

export default (theme: Object): Object => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    background: theme.palette.gradients.primary,
    color: theme.palette.common.white,
    padding: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 3,
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
