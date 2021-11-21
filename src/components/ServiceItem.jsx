import { Box, Divider, Paper, Stack, Typography } from '@mui/material';
import { styleStatus } from '../helpers';

const ServiceItem = ({ service }) => (
    <Box component={Paper} sx={{
        p: 1, color: 'primary.contrastText', bgcolor: 'primary.main', minHeight: '300px',
        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }
    }}>
        <Typography variant='h6' sx={{ color: 'custom.main', textDecoration: 'none', pt: 1 }}>
            {service?.name}
        </Typography>
        <Divider sx={{ py: 1 }} />
        <Stack direction="row" sx={{ pt: 1 }}>
            <Typography component='p' sx={{ pt: 1, pr: 1 }}>Status:</Typography>
            <Typography sx={{ color: `${styleStatus(service?.status?.toLowerCase())}`, pt: 1, fontWeight: 'bold', textTransform: 'uppercase' }}>
                {service?.status}
            </Typography>
        </Stack>
        {service?.message && (
            <>
                <Divider sx={{ py: 1 }} />
                <Typography sx={{ pt: 2 }}>{service?.message}</Typography>
            </>
        )}
        <Divider sx={{ py: 1 }} />
        <Box component='span' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 1 }}>
            <Typography sx={{ pr: 1 }}>Updated:</Typography>
            <Typography sx={{ pr: 1 }}>{new Date(service?.updated).toLocaleDateString()}</Typography>
            <Typography sx={{ pr: 1 }}>{" - "}</Typography>
            <Typography>{new Date(service?.updated).toLocaleTimeString()}</Typography>
        </Box>
    </Box>
);

export default ServiceItem;