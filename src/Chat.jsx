import React, {useEffect, useRef, useState} from 'react';
import Message from './Message';
import {Box, fade, List, ListItem, TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import moment from 'moment';


const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        minHeight: '100%',
        maxHeight: '100%',
        overflow: 'auto'
    },
    textField: {
        position: 'sticky',
        bottom: 0,
        background: theme.palette.background.default,
        input: {
            borderRadius: '16px'
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.accent.main
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: theme.palette.accent.main
        }
    },
    welcome: {
        fontSize: 14,
        margin: 8,
        color: theme.palette.text.disabled,
    },
    sendButton: {
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.accent.main
        }
    }
}));

const Chat = () => {

    const [messages, setMessages] = useState([
        { id: 1, type: 'user', time: '13:04', user: 'user1', text: 'One Msg' },
        { id: 2, type: 'user', time: '13:10', user: 'user2', text: 'Two Msg' },
        { id: 3, type: 'user', time: '13:34', user: 'user3',
            text:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                    'Commodi cupiditate dolorem eum labore laboriosam perspiciatis possimus repellat tempora voluptasvoluptatibus! ' +
                    'Blanditiis corporis ex fugit iure natus odio possimus quas quasi?' },
        { id: 4, type: 'user', time: '15:01', user: 'user2', text: 'Four Msg' },
        { id: 5, type: 'user', time: '15:01', user: 'user1', text: 'Four Msg' },
        { id: 6, type: 'user', time: '15:01', user: 'user2', text: 'Four Msg' },
        { id: 7, type: 'user', time: '15:01', user: 'user2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Commodi cupiditate dolorem eum labore laboriosam perspiciatis possimus repellat tempora voluptasvoluptatibus! ' +
                'Blanditiis corporis ex fugit iure natus odio possimus quas quasi?' },
        { id: 8, type: 'user', time: '15:01', user: 'user2', text: 'Four Msg' },
        { id: 9, type: 'user', time: '15:01', user: 'user1', text: 'Four Msg' },
        {
            id: 10,
            type: 'system',
            time: '15:01',
            props: {
                user: 'user1',
                status: 'success',
                cwd: 180
            }
        },
        { id: 11, type: 'user', time: '15:01', user: 'user2', text: 'Four Msg' },
        {
            id: 12,
            type: 'system',
            time: '15:01',
            props: {
                user: 'user1',
                status: 'info',
                cwd: 180
            }
        },
        { id: 13, type: 'user', time: '15:01', user: 'user2', text: 'Four Msg' },
        {
            id: 14,
            type: 'system',
            time: '15:01',
            props: {
                user: 'user1',
                status: 'error',
                cwd: 180
            }
        },
    ]);

    const inputRef = useRef(null);

    const addMessage = () => {
        if( !inputRef.current.value ) return;

        const maxId = messages.reduce(
            (id, message) => (message.id > id ? message.id : id ), messages[0].id
        );
        const message = {
            id: maxId + 1,
            time: moment().format('HH:mm'),
            type: 'user',
            user: 'user2',
            text: inputRef.current.value
        };
        setMessages([...messages, message]);

        inputRef.current.value = '';
    }

    const scrollRef = useRef(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
    }, [messages]);

    const classes = useStyles();
    return (
        <Box className={classes.root} p={4} border={1} borderRadius={8}>
            <List>
                <Typography className={classes.welcome} color='textSecondary' paragraph>Добро пожаловать в чат!</Typography>
                {[...messages].map(message => (
                    <ListItem key={message.id} disableGutters>
                        <Message message={message} />
                    </ListItem>
                ))}
            </List>
            <Box ref={scrollRef} />
            <TextField
                className={classes.textField}
                fullWidth
                multiline
                label="Chat"
                inputRef={inputRef}
                variant="outlined"
                InputProps={{
                    endAdornment: <SendIcon className={classes.sendButton} onClick={ addMessage } />
                }}
            />
        </Box>
    );
}

export default Chat;