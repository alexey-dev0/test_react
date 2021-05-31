import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    root: {
        padding: '0 8px',
    },
    time: {
        color: theme.palette.text.tertiary,
        marginTop: '4px',
        fontSize: '12px',
        lineHeight: '16px'
    },
    text: {
        display: 'inline',
        fontSize: '14px',
        lineHeight: '20px',
        alignVertical: 'baseline',
    },
    highlight: {
        padding: 4,
        borderRadius: 12,
        background: theme.palette.accent.main,
        boxShadow: `0px 0px 24px 0px ${theme.palette.accent.glow24},  0px 0px 16px 0px ${theme.palette.accent.glow16}`,
        '& p': {
            color: theme.palette.background.default
        }
    },
    username: {
        color: theme.palette.accent.main,
        marginRight: '4px',
    },
    icon: {
        position: 'relative',
        bottom: '-3px',
        marginRight: '4px',
        fontSize: '1rem',
    },
    system: {
        background: theme.palette.background.paper,
        borderRadius: '0px 8px 8px 0px',
        padding: '8px 16px',
    },
    info: {
        background: theme.palette.background.info,
        borderLeft: `2px solid ${theme.palette.accent.main}`,
        '& span': {
            color: theme.palette.accent.main
        }
    },
    success: {
        background: theme.palette.background.success,
        borderLeft: `2px solid ${theme.palette.success.main}`,
        '& span': {
            color: theme.palette.success.main
        }
    },
    error: {
        background: theme.palette.background.error,
        borderLeft: `2px solid ${theme.palette.error.main}`,
        '& span': {
            color: theme.palette.error.main
        }
    }
}));

const Message = ({ message }) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} wrap="nowrap" spacing={2}>
            <Grid item>
                <Typography className={classes.time}>{ message.time }</Typography>
            </Grid>
            <Grid item>
                { renderContent() }
            </Grid>
        </Grid>
    );

    function renderContent() {

        if (message.type === 'user') {
            return (
                <Grid item className={ message.user === 'user1' ? `${classes.highlight}` : '' }>
                    <Typography className={`${classes.username} ${classes.text}`}>
                        <AccountCircleIcon className={classes.icon} />{ message.user }:
                    </Typography>
                    <Typography className={classes.text}>
                        { message.text }
                    </Typography>
                </Grid>
            );
        } else {
            switch (message.props.status) {
                case 'info':
                    return (
                        <Grid item className={`${classes.system} ${classes.info}`}>
                            <Typography className={classes.text}>
                                Игрок <span>{ message.props.user }</span> вступил(-а) в игру
                                со стеком в <span>{ message.props.cwd } CWD</span>
                            </Typography>
                        </Grid>
                    );
                case 'success':
                    return (
                        <Grid item className={`${classes.system} ${classes.success}`}>
                            <Typography className={classes.text}>
                                Игрок <span>{ message.props.user }</span> выиграл(-а) партию
                                и получил(-а) <span>{ message.props.cwd } CWD</span> (с учетом 10% комиссии).
                            </Typography>
                        </Grid>
                    );
                case 'error':
                    return (
                        <Grid item className={`${classes.system} ${classes.error}`}>
                            <Typography className={classes.text}>
                                Игрок <span>{ message.props.user }</span> вышел(-ла) из комнаты во время игры.
                            </Typography>
                        </Grid>
                    );
                default:
                    return (
                        <Typography>
                            { message.props.status }
                        </Typography>
                    );
            }
        }

    }
}

export default Message;