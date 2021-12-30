import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Switch } from '@mui/material';
import { HeaderTitle, ApiRoutesLink, RockstarIcon, appbar, toolbar, header, link, thumb } from '../styles/Header.styled';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAppContext } from '../../contexts/AppContext';

// TODO : Fix the logo position on mobile 
// TODO : Style the Header better and add ToolTips
const Header = () => {
    const { setTabValue } = useAppContext();
    const { theme, setTheme } = useThemeContext();
    return (
        <AppBar position='static' elevation={2} sx={appbar} id='back-to-top-anchor'>
            <Toolbar disableGutters sx={toolbar}>
                <ApiRoutesLink href={`${process.env.REACT_APP_API_URL}`} target='_blank' sx={link}>
                    API Routes
                </ApiRoutesLink>
                <Box component={Link} to='/all' onClick={() => setTabValue(0)} sx={header}>
                    <RockstarIcon />
                    <HeaderTitle>Rockstar Services</HeaderTitle>
                </Box>
                <Box sx={{ mx: 1 }}>
                    <Switch checked={theme} onClick={() => setTheme(!theme)} sx={thumb} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;