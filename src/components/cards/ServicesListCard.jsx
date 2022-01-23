import { NavLink } from 'react-router-dom';
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import ServiceItem from '../items/ServiceItem';
import { fetchStatusByCount, fetchImage } from '../../helpers';
import { useAppContext } from '../../contexts/AppContext';

const ServicesListCard = () => {
    const {
        services,
        tabValue,
        refetchServices
    } = useAppContext();

    return (
        <Paper elevation={0} sx={{
            width: '100%', height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText', p: 2, pb: tabValue === 1 ? 3.5 : 2,
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
                        <Avatar sx={{ bgcolor: 'inherit' }}>
                            <StatusIcon status={`${fetchStatusByCount(services)}`} />
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={refetchServices} sx={{ color: 'primary.contrastText' }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    }
                    title='Rockstar Services'
                    subheader={`${new Date().toLocaleString()}`}
                />
                <CardMedia
                    sx={{ objectFit: 'contain' }}
                    component='img'
                    height='198px'
                    image={fetchImage(0)}
                    alt='logo'
                />
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
                <CardActions sx={{ p: 0, display: 'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default ServicesListCard;