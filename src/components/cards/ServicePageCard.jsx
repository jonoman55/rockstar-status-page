import { Box, Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Paper, Typography, IconButton, Stack } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import PlatformsListItem from '../items/PlatformsListItem';
import { styleStatus, fetchImage } from '../../helpers';

const ServicePageCard = ({ service, status, onRefresh }) => (
    <Paper elevation={0} sx={{
        width: '100%', height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText',
        p: 2, pb: 2, borderRadius: 0, boxShadow: 'none'
    }}>
        <Card sx={{
            p: 1, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
            bgcolor: 'primary.light', color: 'primary.contrastText', mb: 1,
            '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: 1 },
            '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: 1 }
        }}>
            <CardHeader
                sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                avatar={
                    <Avatar aria-label='status-icon' sx={{ bgcolor: 'inherit' }}>
                        <StatusIcon status={`${service?.status?.toLowerCase()}`} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label='refresh' onClick={onRefresh} sx={{ color: 'primary.contrastText' }}>
                        <RefreshIcon fontSize='large' />
                    </IconButton>
                }
                title={`${service?.name}`}
                subheader={`${new Date(service?.updated).toLocaleString()}`}
            />
            <Box sx={{
                p: 2, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                alignItems: 'center', justifyContent: 'center',
            }}>
                {service?.id && (
                    <CardMedia
                        component='img'
                        height='250px'
                        image={fetchImage(service?.id)}
                        alt='logo'
                        sx={{
                            objectFit: 'scale-down', bgcolor: 'custom.white', height: '250px', maxWidth: '345px',
                            border: 'solid 1px black', borderRadius: '0.5rem'
                        }}
                    />
                )}
            </Box>
            {service?.message && (
                <CardContent>
                    <Typography paragraph>{service.message}</Typography>
                </CardContent>
            )}
            <CardContent sx={{ px: 2, display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                <Stack direction='column' spacing={1} display='flex' alignItems='baseline' justifyContent='flex-start'>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'baseline' }}>
                        <Typography variant='h6' fontWeight='bold'>Service:</Typography>
                        <Typography variant='p' sx={{ pl: 1, color: `${styleStatus(status?.status?.toLowerCase())}`, fontWeight: 'bold', fontSize: 'large' }}>
                            {service?.status?.toUpperCase()}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'baseline' }}>
                        <Typography variant='h6' fontWeight='bold'>Status:</Typography>
                        <Typography variant='p' sx={{ pl: 2, color: `${styleStatus(status?.status?.toLowerCase())}`, fontWeight: 'bold', fontSize: 'large' }}>
                            {status?.status?.toUpperCase()}
                        </Typography>
                    </Box>
                </Stack>
                {status?.services_platforms && (
                    <PlatformsListItem platforms={status?.services_platforms} />
                )}
            </CardContent>
            <CardActions sx={{ p: 0, display: 'flex' }}>
                <CardActionBox />
            </CardActions>
        </Card>
    </Paper>
);

export default ServicePageCard;