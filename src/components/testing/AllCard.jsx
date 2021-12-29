import { useNavigate, NavLink } from 'react-router-dom';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import { Wifi as WifiIcon } from '@mui/icons-material';
import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions } from '../styles/PaperCard.styled';
import { FlexText } from '../styles/FlexControls';
import { PlatformIcon } from '../other/PlatformIcon';
import { RockstarLoader } from '../other/RockstarLoader';
import { CardActionBox } from '../other/CardActionBox';
import StatusIndicatorsItem from '../items/StatusIndicatorsItem';
import { checkStatuses } from '../../helpers';
import { useAppContext } from '../../contexts/AppContext';
import { usePathname } from '../../hooks/usePathname';

// TODO : Finish implementing this Card
// TODO : Convert components to styled components once finished
const AllCard = () => {
    const navigate = useNavigate();
    const pathname = usePathname();
    
    const {
        isLoading,
        services,
        statuses,
        updated
    } = useAppContext();

    console.log(statuses);

    if (isLoading) return <RockstarLoader />;
    else return (
        <Paper>
            <Card>
                <CardHeader
                    title='Service Status'
                    subheader={`${new Date().toLocaleString()}`}
                    status={`${checkStatuses(services)}`}
                    onClick={() => navigate(pathname)}
                />
                <CardMedia id={0} />
                <CardContent>
                    <Stack direction='row' spacing={2} padding={1} alignItems='center' display='flex' justifyContent='center'>
                        <WifiIcon sx={{ color: '#0cf223' }} />
                        <Typography component='h5' variant='h5' gutterBottom>Service Status</Typography>
                    </Stack>
                    <Typography gutterBottom sx={{ textTransform: 'uppercase', textAlign: 'center', pb: 2 }}>
                        Updated{' '}{`${updated}`}
                    </Typography>
                    <Divider variant='middle' sx={{ pt: 1 }} />
                    <Grid container spacing={2} sx={{ p: 2 }}>
                        {statuses.filter(status => status?.name !== 'General' && status?.name !== 'Support').map((status, index) => (
                            <Grid item key={index} component={NavLink} to={`/service/${status?.id}`} sx={{ textDecoration: 'none' }} xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Card sx={{ p: 2, bgcolor: 'primary.main', '&:hover': { bgcolor: 'custom.disabled' }, minHeight: '550px' }} elevation={1}>
                                    <Box sx={{ p: 1, border: 'solid 1px black', borderRadius: '0.5rem', bgcolor: 'custom.light' }}>
                                        <CardMedia id={status?.id} />
                                    </Box>
                                    <FlexText variant='h6' gutterBottom paragraph sx={{ py: 2, textAlign: 'center', color: 'custom.main' }}>
                                        {status?.name}
                                    </FlexText>
                                    <Stack direction='column' spacing={2}>
                                        {/* TODO : Finish Implementing the Platforms and their status */}
                                        {status?.services_platforms?.map((platform, idx) => (
                                            <Box key={idx} sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                                                <PlatformIcon platform={platform?.name} />
                                            </Box>
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Divider variant='middle' />
                    <Box sx={{
                        display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', width: '100%', justifyContent: 'center', alignItems: 'center', p: 2, ml: 0.25, mt: -2
                    }}>
                        <StatusIndicatorsItem />   
                    </Box>  
                </CardContent>
                <CardActions>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default AllCard;