import { styled, useMediaQuery, Box } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    minHeight: useMediaQuery(theme.breakpoints.up('sm')) ? '83.9vh' : '100%',//85.6vh'
    backgroundColor: theme.palette.primary.main,
}));