import { styled, Box, CircularProgress, Typography } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    height: '100vh', 
    width: '100%', 
    display: 'flex',
    flexDirection: 'column', 
    flexWrap: 'nowrap', 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: theme.spacing(0), 
    padding: theme.spacing(1), 
    backgroundColor: theme.palette.primary.dark,
}));

const Text = styled(Typography)(({ theme })=>({
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
}));

const Loader = styled(CircularProgress)(({ theme })=> ({
    color: theme.palette.custom.main,
}));

export const LoadingContainer = () => (
    <Container component='main'>
        <Loader />
        <Text component='h1' variant='h5'>
            Loading...
        </Text>
    </Container>
);