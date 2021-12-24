import { Paper, Typography, Divider, Grid } from '@mui/material';
import { Error, OfflinePin, OfflineBolt } from '@mui/icons-material';
import indicators from '../constants/indicators';

// TODO : Move IndicatorItem and StatusIcon to their own .jsx files
const IndicatorItem = ({ status }) => (
    <Paper sx={{
        display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
        justifyContent: 'center', alignItems: 'center', color: 'contrastText',
        bgcolor: 'primary.dark', p: 1, minWidth: '83px', minHeight: '50px'
    }}>
        <StatusIcon status={status} />
        <Typography sx={{ pt: 1, textTransform: 'uppercase', fontWeight: 'bold' }}>{status}</Typography>
    </Paper>
);

// TODO : Use this instead of the fetchStatusIcon through out the project 
// TODO : Add the css colors to the theme palette
const StatusIcon = ({ status }) => {
    switch (status) {
        case 'up':
            return <OfflinePin fontSize='large' sx={{ color: '#0cf223' }} />;
        case 'limited':
            return <OfflineBolt fontSize='large' sx={{ color: '#fff700' }} />;
        case 'down':
            return  <Error fontSize='large' sx={{ color: '#f50202' }} />;
        default:
            return <OfflinePin fontSize='large' sx={{ color: '#0cf223' }} />;
    };
};

const RockstarStatusItem = () => (
    <Paper sx={{
        p: 2, mt: 2, mr: 0.5, color: 'primary.contrastText',
        bgcolor: 'primary.main', minHeight: '125px', width: '100%'
    }}>
        <Typography variant='h6' sx={{ color: 'custom.main', py: 0.25 }}>Status Indicators</Typography>
        <Divider sx={{ pb: 1 }} />
        <Grid container spacing={1} sx={{
            p: 2, pr: 1, width: '100%', display: 'flex', flexDirection: 'row', 
            flexWrap: 'nowrap', justifyContent: 'center', mt: 1
        }}>
            {indicators.map((indicator, index) => (
                <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
                    <IndicatorItem status={indicator} />
                </Grid>
            ))}
        </Grid>
    </Paper>
);

export default RockstarStatusItem;