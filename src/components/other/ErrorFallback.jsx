import { styled, Box, Typography, Button } from '@mui/material';

const ErrorContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2), 
    display: 'flex', 
    flexDirection: 'column', 
    flexWrap: 'nowrap', 
    justifyContent: 'center', 
    alignItems: 'center'
}));

export const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <ErrorContainer component='div' role='alert'>
        <Typography component='p' variant='body1' gutterBottom>Something went wrong:</Typography>
        <Typography component='pre' color='error' padding={2}>{error.message}</Typography>
        <Button variant='contained' color='primary' onClick={resetErrorBoundary}>Try again</Button>
    </ErrorContainer>
);