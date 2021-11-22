import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Link, Stack, Divider, Grid } from '@mui/material';
import { Wifi as WifiIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import RockstarLoader from './RockstarLoader';
import { useAppContext } from '../contexts/AppContext';
import { styleStatus, fetchImage, fetchStatusIcon, checkStatuses } from '../helpers';
import { usePathname } from '../hooks/usePathname';

// https://mui.com/components/cards/#main-content
// TODO : Get all statuses and include them in this Card (nicely formatted in CardContent)
// TODO : Add a component with the different type of status icon indicators (UP/LIMITED/DOWN)
// TODO : finish implementing the Grid component
const OverallStatus = () => {
    const navigate = useNavigate();
    const pathname = usePathname();

    const {
        tabValue,
        isLoading,
        services,
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
                    <Paper component={Link} href={"https://support.rockstargames.com/servicestatus"} target='_blank' sx={{
                        p: 1, color: 'primary.contrastText', bgcolor: 'primary.main', textDecoration: 'none', minHeight: '125px', 
                        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }
                    }}>
                        <Typography variant='h6' sx={{ color: 'custom.main' }}>Overall Status</Typography>
                        <Divider sx={{ pb: 1 }} />
                        <Stack direction='row' sx={{ pt: 1 }}>
                            <Typography sx={{ pr: 1 }}>Status:</Typography>
                            <Typography variant='body1' sx={{ color: color, fontWeight: 'bold' }}>
                                {checkStatuses(services).toUpperCase()}
                            </Typography>
                        </Stack>
                        <Divider sx={{ pt: 1 }} />
                        <Box component='span' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 1 }}>
                            {`${updated}`}
                        </Box>
                    </Paper>
                    <Grid container spacing={2}>
                        {services?.map((service, index) => (
                            <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
                                <Box component={Paper} sx={{ bgcolor: 'primary.main' }}>
                                    {/* service and their status */}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
                <CardActions disableSpacing sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    {fetchStatusIcon(checkStatuses(services))}
                </CardActions>
            </Card>
        </Box>
    );
};

export default OverallStatus;