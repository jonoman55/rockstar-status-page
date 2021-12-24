import { AppBar, Toolbar, Box, Link, Switch } from '@mui/material';
import { HeaderTitle, ApiRoutesLink, RockstarIcon, appbar, toolbar, header, link, thumb } from './styles/Header.styled';
import { useThemeContext } from '../contexts/ThemeContext';

// TODO : Fix the logo position on mobile 
const Header = () => {
    const { theme, setTheme } = useThemeContext();
    return (
        <AppBar position='static' elevation={2} sx={appbar}>
            <Toolbar disableGutters sx={toolbar}>
                <ApiRoutesLink href={`${process.env.REACT_APP_API_URL}`} target='_blank' sx={link}>
                    API Routes
                </ApiRoutesLink>
                <Box sx={header} id="back-to-top-anchor">
                    <RockstarIcon />
                    <HeaderTitle component={Link} href='/' target='_self'>Rockstar Services</HeaderTitle>
                </Box>
                <Box sx={{ mx: 1 }}>
                    <Switch checked={theme} onClick={() => setTheme(!theme)} sx={thumb} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;