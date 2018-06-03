// @flow

export default (theme: Object): Object => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    paper: {
        padding: theme.spacing.unit * 4,
        margin: theme.spacing.unit
    }
});
