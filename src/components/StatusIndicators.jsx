import { Paper, Typography, Divider, Stack } from '@mui/material';
import { fetchStatusIcon } from '../helpers';

const StatusIndicators = () => (
    <Paper sx={{
        p: 2, mt: 2, mr: 1, color: 'primary.contrastText',
        bgcolor: 'primary.main', minHeight: '125px'
    }}>
        <Typography variant='h6' sx={{ color: 'custom.main' }}>Status Indicators</Typography>
        <Divider sx={{ pb: 1 }} />
        <Stack direction='row' spacing={2} sx={{
            pt: 1, width: '100%', display: 'flex', justifyContent: 'space-evenly'
        }}>
            <Paper sx={{
                display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
                justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.dark', p: 1, minWidth: '125px', minHeight: '125px'
            }}>
                {fetchStatusIcon('up')}
                <Typography component='p' textAlign='center' sx={{ pt: 1 }}>UP</Typography>
            </Paper>
            <Paper sx={{
                display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
                justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.dark', p: 1, minWidth: '125px', minHeight: '125px'
            }}>
                {fetchStatusIcon('limited')}
                <Typography component='p' textAlign='center' sx={{ pt: 1 }}>LIMITED</Typography>
            </Paper>
            <Paper sx={{
                display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
                justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.dark', p: 1, minWidth: '125px', minHeight: '125px'
            }}>
                {fetchStatusIcon('down')}
                <Typography component='p' textAlign='center' sx={{ pt: 1 }}>DOWN</Typography>
            </Paper>
        </Stack>
    </Paper>
);

export default StatusIndicators;