import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, AppBar, Box, Paper, Tabs, Tab } from '@mui/material';
import { useAppContext } from '../contexts/AppContext';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};

const CustomTab = styled(Tab)(({ theme }) => ({
    padding: theme.spacing(0),
    color: theme.palette.primary.contrastText,
    '&.Mui-selected': {
        color: theme.palette.custom.main,
    },
}));

const TabGroup = () => {
    const navigate = useNavigate();
    const { tabValue, setTabValue } = useAppContext();
    const handleChange = (event, newValue) => setTabValue(newValue);

    useEffect(() => {
        if (tabValue === 0) {
            navigate('/all');
        }
        if (tabValue === 1) {
            navigate('/services');
        }
        if (tabValue === 2) {
            navigate('/statuses');
        }
        if (tabValue === 3) {
            navigate('/api');
        }
    }, [tabValue, navigate]);

    return (
        <AppBar component='div' position="relative" elevation={1} sx={{ mb: 2, width: '100%' }}>
            <Paper sx={{ color: 'primary.contrastText', bgcolor: 'primary.dark', borderRadius: .25 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
                    <Tabs value={tabValue} onChange={handleChange}>
                        <CustomTab label="All"  {...a11yProps(0)} />
                        <CustomTab label="Services"  {...a11yProps(1)} />
                        <CustomTab label="Statuses" {...a11yProps(2)} />
                        <CustomTab label="API" {...a11yProps(3)} />
                    </Tabs>
                </Box>
            </Paper>
        </AppBar>
    );
};

export default TabGroup;