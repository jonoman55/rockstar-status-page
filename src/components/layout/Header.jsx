import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Switch, Tooltip } from '@mui/material';
import { HeaderTitle, ApiRoutesLink, RockstarIcon, appbar, toolbar, header, link, thumb } from '../styles/Header.styled';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAppContext } from '../../contexts/AppContext';

const Header = () => {
    const { setTabValue } = useAppContext();
    const { theme, setTheme } = useThemeContext();
    return (
        <AppBar component='header' position='static' elevation={2} sx={appbar}>
            <Toolbar component='div' id='back-to-top-anchor' disableGutters sx={toolbar}>
                <Tooltip title='API Routes' placement='bottom'>
                    <ApiRoutesLink href={`${process.env.REACT_APP_API_URL}`} target='_blank' sx={link}>
                        API Routes
                    </ApiRoutesLink>
                </Tooltip>
                <Tooltip title='Home' placement='bottom'>
                    <Box component={Link} to='/all' onClick={() => setTabValue(0)} sx={header}>
                        <RockstarIcon />
                        <HeaderTitle>Rockstar Services</HeaderTitle>
                    </Box>
                </Tooltip>
                <Tooltip title={theme ? 'Light Mode' : 'Dark Mode'} placement='bottom'>
                    <Box sx={{ mx: 1 }}>
                        <Switch checked={theme} onClick={() => setTheme(!theme)} sx={thumb} />
                    </Box>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};

export default Header;