import { styled, AppBar as MuiAppBar, ToggleButtonGroup as MuiToggleButtonGroup, ToggleButton as MuiToggleButton, Box } from '@mui/material';

export const AppBar = styled(MuiAppBar)`
    backgroundColor: transparent;
`;

export const HomeButton = styled(MuiToggleButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    borderLeftStyle: 'none',
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
    padding: theme.spacing(1),
    color: theme.palette.primary.contrastText,
    ...(!selected && {
        '&:hover': { 
            color: theme.palette.custom.main,
        },
        '&.Mui-selected': {
            color: theme.palette.custom.main,
        },
    }),
    ...(selected && {
        color: theme.palette.custom.main,
        '&:hover': { 
            color: theme.palette.custom.selected,
        },
        '&.Mui-selected': {
            color: theme.palette.custom.main,
        },
    }),
}));

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
    display: 'inline-flex',
    '& .MuiToggleButtonGroup-grouped': {
        borderRadius: 0,
        borderBottomStyle: 'none',
    },
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

export const ButtonContainer = styled(Box)(({ theme }) => ({
    width: 'auto',
    contain: 'content',
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 0,
}));