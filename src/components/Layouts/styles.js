// @flow

export default (theme: Object): Object => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: theme.palette.gradients.primary,
    color: theme.palette.common.white,
    padding: theme.spacing(),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
  },
  appBar: {
    backgroundColor: theme.palette.background.appBar,
    color: theme.palette.getContrastText(theme.palette.background.appBar),
  },
  footer: {
    backgroundColor: theme.palette.background.footer,
    color: theme.palette.getContrastText(theme.palette.background.footer),
  },
  section: {
    width: '100%',
    paddingBottom: theme.spacing(4),
  },
});
