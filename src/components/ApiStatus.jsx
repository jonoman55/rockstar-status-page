import { useNavigate } from 'react-router-dom';
import { styled, Avatar, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Link, Stack, Divider } from '@mui/material';
import { Wifi as WifiIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import RockstarLoader from './RockstarLoader';
import { useAppContext } from '../contexts/AppContext';
import { styleStatus, fetchImage, fetchStatusIcon } from '../helpers';
import { usePathname } from '../hooks/usePathname';

const Container = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        height: '100%',
        paddingBottom: theme.spacing(3.5),
    },
    [theme.breakpoints.up('lg')]: {
        height: '100%',
    },
}));

const ApiStatus = () => {
    const navigate = useNavigate();
    const pathname = usePathname();

    const {
        tabValue,
        apiStatus,
        isLoading,
    } = useAppContext();

    const color = styleStatus(apiStatus?.status?.toLowerCase());

    if (isLoading) return <RockstarLoader />;
    return (
        <Container>
            <Card sx={{
                p: 1, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: tabValue === 3 && 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: tabValue === 3 && 1 }
            }}>
                <CardHeader
                    sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'custom.disabled' }} aria-label="logo">
                            <WifiIcon sx={{ color: color }} />
                        </Avatar>
                    }
                    action={tabValue === 3 && (
                        <IconButton aria-label="refresh" onClick={() => navigate(tabValue === 3 ? pathname : '*')} sx={{
                            color: 'primary.contrastText'
                        }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    )}
                    title="Rockstar Services Status API"
                    subheader={`${new Date().toLocaleString()}`}
                />
                {tabValue === 3 && (
                    <CardMedia
                        sx={{ objectFit: 'contain' }}
                        component="img"
                        height="198px"
                        image={fetchImage(0)}
                        alt="logo"
                    />
                )}
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', px: 2 }}>
                    <Typography variant='h5' sx={{ p: 2 }}>API</Typography>
                    <Paper component={Link} href={`${process.env.REACT_APP_API_URL}`} target='_blank' sx={{
                        p: 1, color: 'primary.contrastText', bgcolor: 'primary.main',
                        textDecoration: 'none', minHeight: '125px', 
                        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }
                    }}>
                        <Typography variant='h6' sx={{ color: 'custom.main' }}>
                            {apiStatus?.message}
                        </Typography>
                        <Divider sx={{ pb: 1 }} />
                        <Stack direction='row' sx={{ pt: 1 }}>
                            <Typography sx={{ pr: 1 }}>Status:</Typography>
                            <Typography variant='body1' sx={{ color: color, fontWeight: 'bold' }}>
                                {apiStatus?.status}
                            </Typography>
                        </Stack>
                        <Divider sx={{ pt: 1 }} />
                        <Box component='span' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 1 }}>
                            {apiStatus?.updated}
                        </Box>
                    </Paper>
                </CardContent>
                <CardActions disableSpacing sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    {fetchStatusIcon(apiStatus?.status?.toLowerCase())}
                </CardActions>
            </Card>
        </Container>
    );
};

export default ApiStatus;