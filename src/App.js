import Routes from './routes';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { light, dark } from './theme';
import { useThemeContext } from './contexts/ThemeContext';

// TODO : Add a Dropdown Menu where you can select a different TimeZone ?tz=America/New_York
// TODO : Add all the menu options for TimeZone to menuItems.js file in the constants folder
// TODO : Replace the CardHeader Avatar Icon with the CardAction Icon for each Card component
// TODO : Make a cards folder and move all Card components to it
// TODO : Rename any Card components i.e ServiceCard.jsx
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