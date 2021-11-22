import { styled, AppBar, Container, Tooltip, Button, Link, Stack, Divider } from '@mui/material';
import { Copyright } from '@mui/icons-material';

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: 'inherit',
    '&:hover': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: 'transparent',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: 12,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 12,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 16,
    },
}));

const Footer = () => (
    <AppBar position='static' elevation={2} component='footer' sx={{
        p: 1, bottom: 0, width: '100%', height: 'auto', bgcolor: 'custom.main', flexDirection: 'row'
    }}>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack sx={{
                p: 1, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                alignItems: 'baseline', justifyContent: 'space-evenly'
            }}>
                <Tooltip title='Visit My GitHub Page' placement='top'>
                    <CustomButton component={Link} href='https://github.com/jonoman55/' target='_blank'
                        startIcon={<Copyright sx={{ mb: 0.5 }} />}
                    >
                        John Chiappetta {new Date().getFullYear()}
                    </CustomButton>
                </Tooltip>
                <Divider orientation="vertical" flexItem sx={{ py: 1 }} />
                <Tooltip title='Rockstar Games' placement='top'>
                    <CustomButton component={Link} href='https://www.rockstargames.com/' target='_blank'
                        startIcon={<Copyright sx={{ ml: 1, mb: 0.5 }} />}
                    >
                        Rockstar Games {new Date().getFullYear()}
                    </CustomButton>
                </Tooltip>
            </Stack>
        </Container>
    </AppBar>
);

export default Footer
