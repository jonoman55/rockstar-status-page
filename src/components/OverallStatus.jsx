import { useNavigate, NavLink } from 'react-router-dom';
import { Avatar, Box, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Wifi as WifiIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import RockstarLoader from './RockstarLoader';
import RockstarStatusItem from './RockstarStatusItem';
import OverAllStatusItem from './OverallStatusItem';
import StatusIndicators from './StatusIndicators';
import { useAppContext } from '../contexts/AppContext';
import { styleStatus, fetchImage, fetchStatusIcon, checkStatuses } from '../helpers';
import { usePathname } from '../hooks/usePathname';

// TODO : Add Platform Statuses Cards Grid
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
        <Box component={Paper} sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <Card sx={{
                p: 1, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
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
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', pt: 4, px: 2 }}>
                    <RockstarStatusItem 
                        services={services} 
                        statuses={statuses} 
                        updated={updated} 
                    />
                    <Grid container spacing={2} sx={{ pt: 2 }} justifyContent='center'>
                        {services?.map((service, index) => (
                            <Grid component={NavLink} to={`/service/${service?.id}`} item key={index} xs={12} sm={12} md={6} lg={4} xl={4} sx={{
                               textDecoration: 'none', p: 1
                            }}>
                                <OverAllStatusItem service={service} />
                            </Grid>
                        ))}
                    </Grid>
                    <StatusIndicators />     
                </CardContent>
                <CardActions disableSpacing sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    {fetchStatusIcon(checkStatuses(services))}
                </CardActions>
            </Card>
        </Box>
    );
};

export default OverallStatus;