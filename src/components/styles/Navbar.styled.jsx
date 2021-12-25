import { styled, ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton } from '@mui/material';

export const HomeButton = styled(MuiToggleButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    '&.Mui-selected': {
        color: theme.palette.custom.main,
    },
    '&:hover': {
        color: theme.palette.custom.main,
    },
}));

export const ToggleButton = styled(MuiToggleButton, {
    shouldForwardProp: (prop) => prop !== 'selected'
})(({ theme, selected }) => ({
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    ...(!selected && {
        '&:hover': { 
            color: theme.palette.custom.main 
        },
        '&.Mui-selected': {
            color: theme.palette.custom.main,
        },
    }),
    ...(selected && {
        color: theme.palette.custom.main,
        '&:hover': { 
            color: theme.palette.custom.divider 
        },
        '&.Mui-selected': {
            color: theme.palette.custom.main,
        },
    }),
}));

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
    display: 'inline-flex',
    borderRadius: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
        fontSize: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 12,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 18,
    },
}));