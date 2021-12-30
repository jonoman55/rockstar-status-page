import { Box, Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Paper, Typography, IconButton } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import PlatformsListItem from '../items/PlatformsListItem';
import { styleStatus, fetchImage } from '../../helpers';
import { RockstarLoader } from '../other/RockstarLoader';
import { useAppContext } from '../../contexts/AppContext';

// TODO : Pad the Card Content
const ServicePageCard = ({ service, status, onRefresh }) => {
    const { isLoading } = useAppContext();
    return isLoading ? <RockstarLoader /> : (
        <Paper sx={{
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
                    pb: 4, display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',
                    alignItems: 'center', justifyContent: 'center'
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
                        <Typography padding={1} paragraph>{service.message}</Typography>
                    </CardContent>
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                    <Typography variant='h6' fontWeight='bold'>Service</Typography>
                    <Typography variant='p' sx={{ color: `${styleStatus(status?.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                        {service?.status?.toUpperCase()}
                    </Typography>
                    <Typography variant='h6' fontWeight='bold'>Status</Typography>
                    <Typography variant='p' sx={{ color: `${styleStatus(status?.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                        {status?.status?.toUpperCase()}
                    </Typography>
                    {status?.services_platforms && (
                        <PlatformsListItem platforms={status?.services_platforms} />
                    )}
                </CardContent>
                <CardActions sx={{ display: 'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    )
};

export default ServicePageCard;