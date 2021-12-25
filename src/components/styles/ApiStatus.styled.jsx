import { styled, Box, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        height: '100%',
        paddingBottom: theme.spacing(3.5),
    },
    [theme.breakpoints.up('lg')]: {
        height: '100%',
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(0.5, 0),
    color: theme.palette.custom.main, 
    [theme.breakpoints.up('xs')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 20,
    },
}));
