import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Box, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { RockstarLoader } from '../other/RockstarLoader';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import ServiceItem from '../items/ServiceItem';
import { useAppContext } from '../../contexts/AppContext';
import { checkStatuses, fetchImage } from '../../helpers';
import { usePathname } from '../../hooks/usePathname';

// TODO : Padd the Card Content
const ServicesListCard = () => {
    const navigate = useNavigate();
    const pathname = usePathname();

    const {
        services,
        isLoading,
        tabValue,
    } = useAppContext();

    if (isLoading) return <RockstarLoader />;
    else return (
        <Box component={Paper} sx={{
            width: '100%', bgcolor: 'primary.main', color: 'primary.contrastText',
            p: 2, pb: tabValue === 1 ? 3.5 : 2, height: '100%'
        }}>
            <Card sx={{
                alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: tabValue === 1 && 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: tabValue === 1 && 1 }
            }}>
                <CardHeader
                    sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                    avatar={
                        <Avatar aria-label='status-icon' sx={{ bgcolor: 'inherit' }}>
                            <StatusIcon status={`${checkStatuses(services)}`} />
                        </Avatar>
                    }
                    action={tabValue === 1 && (
                        <IconButton aria-label='refresh' onClick={() => navigate(tabValue === 1 ? pathname : '*')} sx={{
                            color: 'primary.contrastText'
                        }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    )}
                    title='Rockstar Services'
                    subheader={`${new Date().toLocaleString()}`}
                />
                {tabValue === 1 && (
                    <CardMedia
                        sx={{ objectFit: 'contain'}}
                        component='img'
                        height='198px'
                        image={fetchImage(0)}
                        alt='logo'
                    />
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', pt: 4, px: 2, mt: 2 }}>
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
                <CardActions sx={{ display: 'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Box>
    );
};

export default ServicesListCard;