import {Box, Container, createMuiTheme} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Chat from './Chat'
import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';

const App = () => {

    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            accent: {
                main: '#FFD25E',
                glow16: 'rgba(255, 210, 94, 0.24)',
                glow24: 'rgba(255, 210, 94, 0.12)',
            },
            background: {
                info: 'rgba(255, 255, 255, 0.08)',
                success: 'rgba(50, 184, 87, 0.12)',
                error: 'rgba(235, 65, 65, 0.12)',
            },
            text: {
                main: 'rgba(255, 255, 255, 0.88)',
                tertiary: 'rgba(255, 255, 255, 0.64)',
                disabled: 'rgba(255, 255, 255, 0.32)',
            }
        },
        typography: {
            fontFamily: 'Univia Pro, Roboto'
        },
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    '*': {
                        'scrollbar-width': 'thin',
                    },
                    '*::-webkit-scrollbar': {
                        width: '4px',
                        height: '4px',
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(255,255,255,.2)',
                    }
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box mt={10} height={500}>
                    <Chat />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default App;
