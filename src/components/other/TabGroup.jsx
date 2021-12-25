import { useNavigate } from 'react-router-dom';
import { AppBar, Paper, Tabs } from '@mui/material';
import { Tab, a11yProps } from '../styles/TabGroup.styled';
import { useAppContext } from '../../contexts/AppContext';
import { useEffect } from 'react';

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
        <AppBar component='div' position='relative' elevation={1} sx={{ width: '100%' }}>
            <Paper sx={{ color: 'primary.contrastText', bgcolor: 'primary.dark', borderRadius: .25 }}>
                <Tabs value={tabValue} onChange={handleChange} centered variant='fullWidth'>
                    <Tab label='All' {...a11yProps(0)} />
                    <Tab label='Services' {...a11yProps(1)} />
                    <Tab label='Statuses' {...a11yProps(2)} />
                    <Tab label='API' {...a11yProps(3)} />
                </Tabs>
            </Paper>
        </AppBar>
    );
};

export default TabGroup;