import { styled, Box } from '@mui/material';
import { Loading } from '../../images';

const Container = styled(Box)(({ theme }) => ({
    height: '85.65vh',
    backgroundColor: theme.palette.custom.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(0) 
}));

const LoadingImage = styled(Box)(({ theme }) => ({
    border: 'solid',
    borderWidth: '2px',
    borderColor:  theme.palette.custom.disabled,
    borderRadius: '1rem'
}));

export const RockstarLoader = () => (
    <Container>
        <LoadingImage component='img' src={Loading} alt='Loading...' />
    </Container>
);