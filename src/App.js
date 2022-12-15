
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import { ErrorFallback } from './components/other/ErrorFallback';
import { LoadingContainer } from './components/other/LoadingContainer';
import { useThemeContext } from './contexts/ThemeContext';
import { light, dark } from './theme';

const Routes = lazy(() => import('./routes'));

export default function App() {
    const { theme } = useThemeContext();
    const activeTheme = createTheme(theme ? dark : light);
    return (
        <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
                <Suspense fallback={<LoadingContainer />}>
                    <Routes />
                </Suspense>
            </ErrorBoundary>
        </ThemeProvider>
    );
};