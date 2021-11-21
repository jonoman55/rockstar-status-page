import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Wifi as WifiIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import RockstarLoader from './RockstarLoader';
import ServiceItem from './ServiceItem';
import { useAppContext } from '../contexts/AppContext';
import { styleStatus, fetchImage, fetchStatusIcon, checkStatuses } from '../helpers';
import { usePathname } from '../hooks/usePathname';

const ServicesList = () => {
    const navigate = useNavigate();
    const pathname = usePathname();

    const {
        services,
        isLoading,
        tabValue,
    } = useAppContext();

    const statuses = checkStatuses(services);
    const colorStatus = (status) => styleStatus(status);

    if (isLoading) return <RockstarLoader />;
    return (
        <Box component={Paper} sx={{
            width: '100%', bgcolor: 'primary.main', color: 'primary.contrastText',
            p: 2, pb: tabValue === 1 ? 3.5 : 2, height: '100%'
        }}>
            <Card sx={{
                p: 1, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: tabValue === 1 && 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: tabValue === 1 && 1 }
            }}>
                <CardHeader
                    sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'custom.disabled' }} aria-label="logo">
                            <WifiIcon sx={{ color: colorStatus(statuses) }} />
                        </Avatar>
                    }
                    action={tabValue === 1 && (
                        <IconButton aria-label="refresh" onClick={() => navigate(tabValue === 1 ? pathname : '*')} sx={{
                            color: 'primary.contrastText'
                        }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    )}
                    title="Rockstar Services"
                    subheader={`${new Date().toLocaleString()}`}
                />
                {tabValue === 1 && (
                    <CardMedia
                        sx={{ objectFit: 'contain' }}
                        component="img"
                        height="198px"
                        image={fetchImage(0)}
                        alt="logo"
                    />
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Typography variant='h5' sx={{ p: 2 }}>Services</Typography>
                    <Grid container spacing={2}>
                        {services.map((service, index) => (
                            <Grid component={NavLink} to={`/service/${service?.id}`} item key={index} xs={12} sm={12} md={12} lg={6} sx={{
                                color: 'custom.main', textDecoration: 'none', p: 1
                            }}>
                                <ServiceItem service={service} />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
                <CardActions disableSpacing sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    {fetchStatusIcon(statuses)}
                </CardActions>
            </Card>
        </Box>
    );
};

export default ServicesList;