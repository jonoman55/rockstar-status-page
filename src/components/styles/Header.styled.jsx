import { styled, Box, Link } from '@mui/material';
import logo from '../../images/svgs/logo.svg';

export const HeaderTitle = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: theme.palette.custom.black,
    '&:hover': {
        color: theme.palette.custom.white,
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 36,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 36,
    },
}));

export const ApiRoutesLink = styled(Link)(({ theme }) => ({
    minWidth: '100px',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
    paddingLeft: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 18,
    },
}));

export const appbar = {
    fontFamily: 'Roboto',
    backgroundColor: 'custom.main',
    borderBottom: 'solid',
    borderWidth: '2px',
};

export const toolbar = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 85,
};

export const header = {
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    marginRight: '16px',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'primary.contrastText',
    textDecoration: 'none',
    '&:hover': {
        color: 'secondary.contrastText',
        cursor: 'pointer',
        textDecoration: 'none'
    }
};

export const link = {
    color: 'custom.black',
    '&:hover': {
        color: 'custom.white',
        cursor: 'pointer',
    },
};

export const thumb = {
    '& .MuiSwitch-thumb': {
        color: 'primary.contrastText',
    },
};

export const RockstarIcon = () => (
    <Box
        component='img'
        src={logo}
        alt='logo'
        sx={{ height: 50, width: 50, pr: 1, ml: 1 }}
    />
);
