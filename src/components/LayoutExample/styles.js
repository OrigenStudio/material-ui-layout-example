// @flow

export default (theme: Object): Object => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    panelCode: {
        boxShadow:
            '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
    },
    paper: {
        padding: theme.spacing.unit * 4,
        margin: theme.spacing.unit
    }
});
