import { NavLink } from 'react-router-dom';
import { styled, Tab as MuiTab } from '@mui/material';

export function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

export const Tab = styled(MuiTab)(({ theme }) => ({
    padding: theme.spacing(0),
    color: theme.palette.primary.contrastText,
    '&.Mui-selected': {
        color: theme.palette.custom.main,
    },
}));

export function LinkTab(props) {
    return (
        <Tab
            component={NavLink}
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
};