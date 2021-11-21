import { AppBar, Container, Tooltip, Button, Link } from '@mui/material';
import { Copyright } from '@mui/icons-material';

// TODO : Add Rockstar copyright a link to their site
const Footer = () => (
    <AppBar position='static' elevation={2} component='footer' sx={{
        bottom: 0, width: '100%', height: 60, bgcolor: 'custom.main', flexDirection: 'row'
    }}>
        <Container sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <Tooltip title='Visit My GitHub Page' position='top'>
                <Button
                    sx={{
                        color: 'primary.contrastText',
                        '&:hover': {
                            color: 'secondary.contrastText',
                            bgcolor: 'transparent'
                        },
                    }}
                    component={Link}
                    startIcon={<Copyright sx={{ mb: 0.5 }} />}
                    href='https://github.com/jonoman55/'
                    target='_blank'
                >
                    John Chiappetta {new Date().getFullYear()}
                </Button>
            </Tooltip>
        </Container>
    </AppBar>
);

export default Footer
