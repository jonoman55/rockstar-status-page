import { styled, useMediaQuery, Box } from '@mui/material';
import { Loading } from '../../images';

const Container = styled(Box)(({ theme }) => ({
    height: useMediaQuery(theme.breakpoints.down('xs')) ? '100%' :'83.9vh',//'85.65vh',
    backgroundColor: theme.palette.custom.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0), 
}));

const LoadingImage = styled(Box)(({ theme }) => ({
    border: '1px solid',
    borderRadius: '1rem',
    borderColor:  theme.palette.custom.disabled,
}));

export const RockstarLoader = () => (
    <Container>
        <LoadingImage component='img' src={Loading} alt='Loading...' />
    </Container>
);