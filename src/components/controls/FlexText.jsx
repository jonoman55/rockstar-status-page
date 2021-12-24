import { styled, Typography } from '@mui/material';

export const FlexText = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        fontSize: 14,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 14,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 18,
    },
}));
