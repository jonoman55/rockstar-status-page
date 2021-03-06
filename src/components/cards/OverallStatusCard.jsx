import { NavLink } from 'react-router-dom';
import { Avatar, Box, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import RockstarStatusItem from '../items/RockstarStatusItem';
import OverAllStatusItem from '../items/OverallStatusItem';
import StatusIndicatorsItem from '../items/StatusIndicatorsItem';
import { fetchImage, checkStatusesCount } from '../../helpers';
import { useAppContext } from '../../contexts/AppContext';

// TODO : Remove this Card component -> replaced by AllCard 
const OverallStatusCard = () => {
    const {
        services,
        statuses,
        updated,
        refetchAllData
    } = useAppContext();

    return (
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <Card sx={{
                alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: 1 } 
            }}>
                <CardHeader
                    sx={{ textAlign: 'right' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'inherit' }}>
                            <StatusIcon status={`${checkStatusesCount(services)}`} />
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={refetchAllData} sx={{ color: 'primary.contrastText' }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    }
                    title='Overall Status'
                    subheader={`${new Date().toLocaleString()}`}
                />
                <CardMedia
                    sx={{ objectFit: 'contain' }}
                    component='img'
                    height='198px'
                    image={fetchImage(0)}
                    alt='logo'
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
                        <StatusIndicatorsItem />   
                    </Box>  
                </CardContent>
                <CardActions sx={{ display: 'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default OverallStatusCard;