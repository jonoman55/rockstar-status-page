import { styled, AppBar, Toolbar, Box, Link, Switch } from '@mui/material';
import { useThemeContext } from '../contexts/ThemeContext';
import logo from '../images/svgs/logo.svg';

const appbar = {
    fontFamily: 'Roboto',
    backgroundColor: 'custom.main',
    borderBottom: 'solid',
    borderWidth: '2px',
};

const toolbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 85,
};

const header = {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginRight: '16px',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'primary.contrastText',
    textDecoration: 'none',
    '&:hover': {
        color: 'secondary.contrastText',
        cursor: 'pointer',
        textDecoration: 'none'
    }
};

const Title = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.custom.main,
    [theme.breakpoints.down('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 36,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 36,
    },
}));

const ApiRoutes = styled(Link)(({ theme }) => ({
    minWidth: '100px',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: theme.spacing(1.5),
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.custom.main,
    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 18,
    },
}));

const link = {
    '&:hover': {
        cursor: 'pointer',
        color: 'secondary.contrastText',
    }
};

const thumb = {
    '& .MuiSwitch-thumb': {
        color: 'primary.contrastText',
    },
};

const RockstarIcon = () =>
    <Box component='img' src={logo} alt='logo' sx={{ height: 50, width: 50, pr: 1, ml: 1 }} />;

const Header = () => {
    const { theme, setTheme } = useThemeContext();
    return (
        <AppBar position='static' elevation={2} sx={appbar}>
            <Toolbar disableGutters sx={toolbar}>
                <ApiRoutes href={`${process.env.REACT_APP_API_URL}`} target='_blank' sx={link}>
                    API Routes
                </ApiRoutes>
                <Box sx={header} id="back-to-top-anchor">
                    <RockstarIcon />
                    <Title component={Link} href='/' target='_self'>Rockstar Service Status</Title>
                </Box>
                <Box sx={{ mx: 1 }}>
                    <Switch checked={theme} onClick={() => setTheme(!theme)} sx={thumb} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;