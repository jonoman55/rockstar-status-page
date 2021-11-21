import { NavLink, useNavigate } from 'react-router-dom';
import { Avatar, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Wifi as WifiIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import RockstarLoader from './RockstarLoader';
import StatusItem from './StatusItem';
import { useAppContext } from '../contexts/AppContext';
import { styleStatus, fetchImage, fetchStatusIcon, checkStatuses } from '../helpers';
import { usePathname } from '../hooks/usePathname';

const StatusesList = () => {
    const navigate = useNavigate();
    const pathname = usePathname();

    const {
        statuses,
        isLoading,
        tabValue,
    } = useAppContext();

    const _statuses = checkStatuses(statuses);

    if (isLoading) return <RockstarLoader />;
    return (
        <Box component={Paper} sx={{
            width: '100%', bgcolor: 'primary.main', color: 'primary.contrastText',
            p: 2, pb: 3.5, height: '100%'
        }}>
            <Card sx={{
                p: 1, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: tabValue === 2 && 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: tabValue === 2 && 1 }
            }}>
                <CardHeader
                    sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'custom.disabled' }} aria-label="logo">
                            <WifiIcon sx={{ color: styleStatus(_statuses) }} />
                        </Avatar>
                    }
                    action={tabValue === 2 && (
                        <IconButton aria-label="refresh" onClick={() => navigate(tabValue === 2 ? pathname : '*')} sx={{
                            color: 'primary.contrastText'
                        }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    )}
                    title="Rockstar Statuses"
                    subheader={`${new Date().toLocaleString()}`}
                />
                {tabValue === 2 && (
                    <CardMedia
                        sx={{ objectFit: 'contain' }}
                        component="img"
                        height="198px"
                        image={fetchImage(0)}
                        alt="logo"
                    />
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                    <Typography variant='h5' sx={{ p: 2 }}>Statuses</Typography>
                    <Grid container spacing={2}>
                        {statuses?.map((status, index) => (
                            <Grid component={NavLink} to={`/service/${status?.id}`} item key={index} xs={12} sm={12} md={12} lg={12} sx={{
                                color: 'custom.main', textDecoration: 'none', p: 1
                            }}>
                                <StatusItem status={status} />
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
                <CardActions disableSpacing sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    {fetchStatusIcon(_statuses)}
                </CardActions>
            </Card>
        </Box>
    );
};

export default StatusesList;