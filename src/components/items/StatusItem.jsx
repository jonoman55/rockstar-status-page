import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import PlatformsListItem from './PlatformsListItem';
import { styleStatus } from '../../helpers';

const StatusItem = ({ status }) => (
    <Paper sx={{
        p: 1, color: 'primary.contrastText', bgcolor: 'primary.main',
        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }
    }}>
        <Typography variant='h6' sx={{ color: 'custom.main', textDecoration: 'none', pt: 1 }}>
            {status?.name}
        </Typography>
        <Divider sx={{ py: 1 }} />
        <Stack direction='row' sx={{ pt: 1 }}>
            <Typography component='p' sx={{ pt: 1, pr: 1 }}>Status:</Typography>
            <Typography sx={{ color: `${styleStatus(status?.status?.toLowerCase())}`, pt: 1, fontWeight: 'bold', textTransform: 'uppercase' }}>
                {status?.status}
            </Typography>
        </Stack>
        <Divider sx={{ py: 1 }} />
        <Box component='span' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', pt: 2 }}>
            <Typography sx={{ pr: 1 }}>Updated:</Typography>
            <Typography sx={{ pr: 1 }}>{new Date(status?.updated).toLocaleDateString()}</Typography>
            <Typography sx={{ pr: 1 }}>{' - '}</Typography>
            <Typography>{new Date(status?.updated).toLocaleTimeString()}</Typography>
        </Box>
        {status?.services_platforms && (
            <PlatformsListItem platforms={status?.services_platforms} />
        )}
    </Paper>
);

export default StatusItem;