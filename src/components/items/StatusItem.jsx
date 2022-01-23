import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import PlatformsListItem from './PlatformsListItem';
import { FlexText } from '../styles/FlexControls';
import { styleStatus } from '../../helpers';

const StatusItem = ({ status }) => (
    <Paper sx={{
        p: 2, color: 'primary.contrastText', bgcolor: 'primary.main',
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
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', pt: 2 }}>
            <FlexText sx={{ pr: 1 }}>Updated:</FlexText>
            <FlexText sx={{ pr: 1 }}>{new Date(status?.updated).toLocaleDateString()}</FlexText>
            <FlexText sx={{ pr: 1 }}>{' - '}</FlexText>
            <FlexText>{new Date(status?.updated).toLocaleTimeString()}</FlexText>
        </Box>
        {status?.services_platforms && (
            <PlatformsListItem platforms={status?.services_platforms} />
        )}
    </Paper>
);

export default StatusItem;