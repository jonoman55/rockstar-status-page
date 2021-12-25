import { AppBar, Container, Tooltip, Link, Stack, Divider } from '@mui/material';
import { Copyright } from '@mui/icons-material';
import { FlexButton } from '../styles/FlexControls';

const Footer = () => (
    <AppBar position='static' elevation={2} component='footer' sx={{
        p: 1, bottom: 0, width: '100%', height: 'auto', bgcolor: 'custom.main', flexDirection: 'row'
    }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack sx={{
                display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                alignItems: 'baseline', justifyContent: 'space-evenly', py: 0.5, 
            }}>
                <Tooltip title='Visit My GitHub Page' placement='top'>
                    <FlexButton component={Link} href='https://github.com/jonoman55/' target='_blank'
                        startIcon={<Copyright sx={{ mb: 0.5 }} />}
                    >
                        John Chiappetta {new Date().getFullYear()}
                    </FlexButton>
                </Tooltip>
                <Divider orientation='vertical' flexItem sx={{ py: 1 }} />
                <Tooltip title='Rockstar Games' placement='top'>
                    <FlexButton component={Link} href='https://www.rockstargames.com/' target='_blank'
                        startIcon={<Copyright sx={{ ml: 1, mb: 0.5 }} />}
                    >
                        Rockstar Games {new Date().getFullYear()}
                    </FlexButton>
                </Tooltip>
            </Stack>
        </Container>
    </AppBar>
);

export default Footer;