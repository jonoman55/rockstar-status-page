import { Paper, Typography, Divider, Grid } from '@mui/material';
import { fetchStatusIcon } from '../helpers';

const StatusIndicators = () => (
    <Paper sx={{
        p: 2, mt: 2, mr: 0.5, color: 'primary.contrastText',
        bgcolor: 'primary.main', minHeight: '125px', width: '100%'
    }}>
        <Typography variant='h6' sx={{ color: 'custom.main', py: 0.25 }}>Status Indicators</Typography>
        <Divider sx={{ pb: 1 }} />
        <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} sx={{
            p: 2, pr: 1, width: '100%', display: 'flex', flexDirection: 'row', 
            flexWrap: 'nowrap', justifyContent: 'center', mt: 1
        }}>
            <Grid item>
                <IndicatorItem>
                    {fetchStatusIcon('up')}
                    <Typography sx={{ pt: 1 }}>UP</Typography>
                </IndicatorItem>
            </Grid>
            <Grid item>
                <IndicatorItem>
                    {fetchStatusIcon('limited')}
                    <Typography sx={{ pt: 1 }}>LIMITED</Typography>
                </IndicatorItem>
            </Grid>
            <Grid item>
                <IndicatorItem>
                    {fetchStatusIcon('down')}
                    <Typography sx={{ pt: 1 }}>DOWN</Typography>
                </IndicatorItem>
            </Grid>
        </Grid>
    </Paper>
);

const IndicatorItem = (props) => (
    <Paper sx={{
        display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
        justifyContent: 'center', alignItems: 'center', color: 'contrastText',
        bgcolor: 'primary.dark', p: 1, minWidth: '83px', minHeight: '50px'
    }}>
        {props.children}
    </Paper>
);

export default StatusIndicators;