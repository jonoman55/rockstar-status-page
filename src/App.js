import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { styled, createTheme, CssBaseline, ThemeProvider, Box } from '@mui/material';
import { useThemeContext } from './contexts/ThemeContext';
import { light, dark } from './theme';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import AllStatusesPage from './pages/AllStatusesPage';
import ServicesPage from './pages/ServicesPage';
import StatusesPage from './pages/StatusesPage';
import ApiStatusPage from './pages/ApiStatusPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    minHeight: '85.6vh',
    backgroundColor: theme.palette.primary.main,
}));

// TODO : need to finish implementing overall layout once components are finished
// TODO : Add a dropdown where you can select a different TimeZone
// TODO : Make the header of each card component a link to it's corresponding tab on the HomePage
export default function App() {
    const { theme } = useThemeContext();
    const activeTheme = createTheme(theme ? dark : light);
    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <Router>
                <Header />
                <Container component='main'>
                    <Routes>
                        <Route path='/' element={<HomePage />} exact />
                        <Route path='*' element={<Navigate to='/all' />} />
                        <Route path='/all' element={<AllStatusesPage />} exact />
                        <Route path='/services' element={<ServicesPage />} exact />
                        <Route path='/statuses' element={<StatusesPage />} exact />
                        <Route path='/api' element={<ApiStatusPage />} exact />
                        <Route path='/service/:id' element={<ServicePage />} exact />
                    </Routes>
                    <BackToTop />
                </Container>
                <Footer />
            </Router>
        </ThemeProvider>
    );
};