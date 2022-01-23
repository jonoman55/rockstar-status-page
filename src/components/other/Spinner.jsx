import { styled, Box, CircularProgress } from '@mui/material';

const SpinnerBox = styled(Box)(({ theme }) => ({
    height: '85.65vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
    margin: theme.spacing(0),
}));

const SpinnerProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.custom.main,
}));

// TODO : Remove from project
export const Spinner = () => (
    <SpinnerBox>
        <SpinnerProgress />
    </SpinnerBox>
); 