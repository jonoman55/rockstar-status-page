import { useState } from "react";
import { styled, AppBar, Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const HomeButton = styled(ToggleButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    '&.Mui-selected': {
        color: theme.palette.custom.main,
    },
    '&:hover': {
        color: theme.palette.custom.main,
    },
}));

const CustomButton = styled(ToggleButton, {
    shouldForwardProp: (prop) => prop !== 'selected'
})(({ theme, selected }) => ({
    color: theme.palette.primary.contrastText,
    ...(!selected && {
        '&:hover': { color: theme.palette.custom.main },
        '&.Mui-selected': {
            color: theme.palette.custom.main,
        },
    }),
    ...(selected && {
        color: theme.palette.custom.main,
        '&:hover': { color: theme.palette.custom.divider },
        '&.Mui-selected': {
            color: theme.palette.custom.main,
        },
    }),
}));

const CustomButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    display: 'inline-flex',
    borderRadius: '4px',
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

const NavBar = () => {
    const { services, setServicePageId } = useAppContext();
    const [alignment, setAlignment] = useState('');
    const id = Number(window.location.pathname.slice(-1));
    const handleChange = (event, newAlignment) => setAlignment(newAlignment);
    return (
        <AppBar position="static"  elevation={2} sx={{ bgcolor: 'primary.dark' }}>
            <Box sx={{ width: 'auto', contain: 'content' }}>
                <CustomButtonGroup value={alignment} exclusive onChange={handleChange} fullWidth>
                    <HomeButton LinkComponent={NavLink} to='/' value={"Home"}>
                        <HomeIcon />
                    </HomeButton>
                    {services.map((service) => (
                        <CustomButton
                            key={service?.id}
                            selected={id === service?.id}
                            size="small" LinkComponent={NavLink} to={`/service/${service?.id}`}
                            target="_self" value={service?.name} onClick={() => setServicePageId(service?.id)}
                        >
                            {service?.name}
                        </CustomButton>
                    ))}
                </CustomButtonGroup>
            </Box>
        </AppBar>
    );
};

export default NavBar;