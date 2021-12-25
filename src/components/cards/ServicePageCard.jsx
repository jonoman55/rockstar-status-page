// import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Paper, Typography, IconButton } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import PlatformsItem from '../items/PlatformsItem';
import { styleStatus, fetchImage } from '../../helpers';
// import { usePathname } from '../../hooks/usePathname';

// TODO : Pad the Card Content
const ServicePageCard = ({ service, status, onRefresh }) => {
    // const navigate = useNavigate();
    // const pathname = usePathname();
    return (
        <Paper sx={{
            width: '100%', height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText',
            p: 2, pb: 2, borderRadius: 0, boxShadow: 'none'
        }}>
            <Card sx={{
                p: 1, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
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
                    <CardMedia 
                        component='img'
                        height='250px'
                        image={fetchImage(service?.id)}
                        alt='logo'
                        sx={{
                            objectFit: 'scale-down', bgcolor: 'custom.light', height: '250px', maxWidth: '345px',
                            borderStyle: 'solid', borderWidth: 'thin', borderRadius: '2rem',
                        }}
                    />
                </Box>
                {service.message && (
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
                        <PlatformsItem platforms={status?.services_platforms} />
                    )}
                </CardContent>
                <CardActions sx={{ display: 'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default ServicePageCard;