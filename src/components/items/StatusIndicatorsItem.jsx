import { Paper, Typography, Divider, Grid } from '@mui/material';
import indicators from '../../constants/indicators';
import { IndicatorItem } from './IndicatorItem';

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