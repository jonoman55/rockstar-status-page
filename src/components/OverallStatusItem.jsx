import { Typography, Box, Divider, Paper, Stack } from "@mui/material"
import { styleStatus } from '../helpers';

const OverAllStatusItem = ({ service }) => (
    <Paper sx={{
        bgcolor: 'primary.main', p: 1, color: 'primary.contrastText', minWidth: '290.5px', minHeight: '202px',
        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }
    }}>
        <Box sx={{ 
            display: 'flex', flexDirection: 'column', flexWrap: 'wrap', p: 1 
        }}>
            <Typography variant='h6' sx={{ color: 'custom.main' }}>{service.name}</Typography>
            <Divider sx={{ pb: 1 }} />
            <Stack direction='row' sx={{ pt: 1 }}>
                <Typography sx={{ pr: 1 }}>Status:</Typography>
                <Typography variant='body1' sx={{ 
                    color: `${styleStatus(service?.status?.toLowerCase())}`, fontWeight: 'bold' 
                }}>
                    {service?.status.toUpperCase()}
                </Typography>
            </Stack>
            <Divider sx={{ pt: 1 }} />
            <Box component='span' sx={{ 
                display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 1 
            }}>
                <Typography sx={{ pr: 1 }}>Updated:</Typography>
                <Typography sx={{}}>{`${new Date(service?.updated).toLocaleString()}`}</Typography>
            </Box>
        </Box>
    </Paper>
);

export default OverAllStatusItem;