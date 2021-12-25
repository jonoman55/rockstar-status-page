import { Box, Typography, Paper, Link, Stack, Divider } from '@mui/material';
import { styleStatus, checkStatuses } from '../../helpers';

const RockstarStatusItem = ({ services, statuses, updated }) => (
    <Paper component={Link} href='https://support.rockstargames.com/servicestatus' target='_blank' sx={{
        p: 2, mr: 0.5, color: 'primary.contrastText', bgcolor: 'primary.main', textDecoration: 'none', minHeight: '202px',
        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }, width: '100%', minWidth: '290.5px'
    }}>
        <Typography variant='h6' sx={{ color: 'custom.main', py: 0.25 }}>Overall Status</Typography>
        <Divider sx={{ pb: 1 }} />
        <Stack direction='row' sx={{ pt: 1 }}>
            <Typography variant='body1' sx={{ pr: 1 }}>Services</Typography>
            <Typography variant='body1' sx={{
                color: `${styleStatus(checkStatuses(services))}`, fontWeight: 'bold'
            }}>
                {checkStatuses(services).toUpperCase()}
            </Typography>
        </Stack>
        <Divider sx={{ pb: 1 }} />
        <Stack direction='row' sx={{ pt: 1, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center' }}>
            <Typography variant='body1' sx={{ pr: 1 }}>Statuses</Typography>
            <Typography variant='body1' sx={{ color: `${styleStatus(checkStatuses(statuses))}`, fontWeight: 'bold' }}>
                {checkStatuses(statuses).toUpperCase()}
            </Typography>
        </Stack>
        <Divider sx={{ pt: 1 }} />
        <Box component='span' sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 1
        }}>
            {`Updated: ${updated}`}
        </Box>
    </Paper>
);

export default RockstarStatusItem;