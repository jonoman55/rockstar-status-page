import { NavLink } from 'react-router-dom';
import { Box, Divider, Grid, Link, Stack, Typography } from '@mui/material';
import { Wifi as WifiIcon } from '@mui/icons-material';
import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions, IndicatorsContainer } from '../styles/PaperCard.styled';
import { FlexText } from '../styles/FlexControls';
import { PlatformIcon } from '../other/PlatformIcon';
import { CardActionBox } from '../other/CardActionBox';
import StatusIndicatorsItem from '../items/StatusIndicatorsItem';
import { fetchStatusByCount, styleStatus } from '../../helpers';
import { useAppContext } from '../../contexts/AppContext';

const AllCard = () => {
    const {
        services,
        statuses,
        updated,
        refetchAllData
    } = useAppContext();

    return (
        <Paper>
            <Card>
                <CardHeader
                    title='Service Status'
                    subheader={`${new Date().toLocaleString()}`}
                    status={`${fetchStatusByCount(services)}`}
                    onClick={refetchAllData}
                />
                <CardMedia id={0} />
                <CardContent>
                    <Stack direction='row' spacing={2} sx={{ p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <WifiIcon sx={{ color: 'custom.brightGreen' }} />
                        <Typography component={Link} href='https://support.rockstargames.com/servicestatus' target='_blank' variant='h5' gutterBottom sx={{
                            color: 'primary.contrastText', textDecoration: 'none', '&:hover': { color: 'custom.main' }
                        }}>
                            Service Status
                        </Typography>
                    </Stack>
                    <FlexText gutterBottom sx={{ textTransform: 'uppercase', textAlign: 'center', pb: 2 }}>
                        Updated{' '}{`${updated}`}
                    </FlexText>
                    <Divider variant='middle' sx={{ pt: 1 }} />
                    <Grid container spacing={2} sx={{ p: 2 }}>
                        {statuses.filter(status => status?.name !== 'General' && status?.name !== 'Support').map((status, index) => (
                            <Grid item key={index} component={NavLink} to={`/service/${status?.id}`} xs={12} sm={6} md={6} lg={3} xl={3} sx={{ textDecoration: 'none' }}>
                                <Card elevation={1} sx={{ p: 2, minHeight: '575px', bgcolor: 'primary.main', '&:hover': { bgcolor: 'custom.disabled' } }}>
                                    <Box sx={{ p: 1, border: 'solid 1px black', borderRadius: '0.5rem', bgcolor: 'custom.white' }}>
                                        <CardMedia id={status?.id} />
                                    </Box>
                                    <Typography variant='h6' gutterBottom paragraph sx={{ pt: 2, textAlign: 'center', color: 'custom.main' }}>
                                        {status?.name}
                                    </Typography>
                                    <Divider variant='middle' />
                                    <Stack direction='column' spacing={1} sx={{ pt: 2 }}>
                                        {status?.services_platforms?.map((platform, idx) => (
                                            <Box key={idx} sx={{
                                                p: 1, display: 'flex', flexWrap: 'nowrap', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'
                                            }}>
                                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                                    <Box sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row' }}>
                                                        <PlatformIcon platform={platform?.name} />
                                                        <Typography sx={{ pl: 2 }}>{platform?.name}</Typography>
                                                    </Box>
                                                    <Typography sx={{ color: `${styleStatus(platform?.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                                                        {platform?.status}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <IndicatorsContainer>
                        <StatusIndicatorsItem />
                    </IndicatorsContainer>
                </CardContent>
                <CardActions sx={{ p: 0, display:'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default AllCard;