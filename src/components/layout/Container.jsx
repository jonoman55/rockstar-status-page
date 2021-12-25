import { styled, Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    minHeight: '85.6vh',
    backgroundColor: theme.palette.primary.main,
}));