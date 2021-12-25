import Routes from './routes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { light, dark } from './theme';
import { useThemeContext } from './contexts/ThemeContext';

// TODO : Add a OptionBar with Refresh button and add 5 min auto-refresh
// TODO : Additionally add to the OptionBar a Dropdown Menu where you can select a different TimeZone ?tz=America/New_York
// TODO : Add all the menu options for TimeZone to menuItems.js file in the constants folder
// TODO : Fix the min vh property to avoid vertical scrollbar
// TODO : Make a re-usable styled Card component for TabGroup Cards.
export default function App() {
    const { theme } = useThemeContext();
    const activeTheme = createTheme(theme ? dark : light);
    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <Routes />
        </ThemeProvider>
    );
};