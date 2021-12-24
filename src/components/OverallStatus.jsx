import { useNavigate, NavLink } from 'react-router-dom';
import { Avatar, Box, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Wifi as WifiIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import { RockstarLoader } from './RockstarLoader';
import RockstarStatusItem from './RockstarStatusItem';
import OverAllStatusItem from './OverallStatusItem';
import StatusIndicators from './StatusIndicatorsItem';
import { styleStatus, fetchImage, fetchStatusIcon, checkStatuses } from '../helpers';
import { useAppContext } from '../contexts/AppContext';
import { usePathname } from '../hooks/usePathname';

// TODO : Redo the RockstarStatusItem and OverAllStatusItem to match -> https://support.rockstargames.com/servicestatus
const OverallStatus = () => {
    const navigate = useNavigate();
    const pathname = usePathname();

    const {
        tabValue,
        isLoading,
        services,
        statuses,
        updated
    } = useAppContext();

    const color = styleStatus(checkStatuses(services));

    if (isLoading) return <RockstarLoader />;
    return (
        <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <Card sx={{
                alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: 1 } 
            }}>
                <CardHeader
                    sx={{ textAlign: 'right' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'custom.disabled' }} aria-label="logo">
                            <WifiIcon sx={{ color: color }} />
                        </Avatar>
                    }
                    action={tabValue === 0 && (
                        <IconButton aria-label="refresh" onClick={() => navigate(pathname)} sx={{
                            color: 'primary.contrastText'
                        }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    )}
                    title="Overall Status"
                    subheader={`${new Date().toLocaleString()}`}
                />
                <CardMedia
                    sx={{ objectFit: 'contain' }}
                    component="img"
                    height="198px"
                    image={fetchImage(0)}
                    alt="logo"
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', pt: 4, px: 2, mt: 2 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <RockstarStatusItem 
                            services={services} 
                            statuses={statuses} 
                            updated={updated} 
                        />
                    </Box> 
                    <Grid container spacing={2} sx={{ pt: 2, display: 'flex', justifyContent: 'center' }}>
                        {services?.map((service, index) => (
                            <Grid component={NavLink} to={`/service/${service?.id}`} key={index} item xs={12} sm={12} md={6} lg={4} sx={{
                               textDecoration: 'none', p: 0.5
                            }}>
                                <OverAllStatusItem service={service} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <StatusIndicators />   
                    </Box>  
                </CardContent>
                <CardActions disableSpacing sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    {fetchStatusIcon(checkStatuses(services))}
                </CardActions>
            </Card>
        </Paper>
    );
};

export default OverallStatus;