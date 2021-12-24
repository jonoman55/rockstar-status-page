import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Link, Stack, Divider } from '@mui/material';
import { Wifi as WifiIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import { RockstarLoader } from './RockstarLoader';
import { Container, ApiTitle } from './styles/ApiStatus.styled';
import { styleStatus, fetchImage, fetchStatusIcon } from '../helpers';
import { useAppContext } from '../contexts/AppContext';
import { usePathname } from '../hooks/usePathname';

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
                alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
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
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', pt: 4, px: 2, mt: 2 }}>
                    <Paper component={Link} href={`${process.env.REACT_APP_API_URL}`} target='_blank' sx={{
                        color: 'primary.contrastText', bgcolor: 'primary.main', textDecoration: 'none', minHeight: '125px', 
                        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }, p: 1
                    }}>
                        <ApiTitle variant='h6'>{apiStatus?.message}</ApiTitle>
                        <Divider sx={{ pb: 1 }} />
                        <Stack direction='row' sx={{ pt: 1 }}>
                            <Typography sx={{ pr: 1 }}>Status:</Typography>
                            <Typography variant='body1' sx={{ color: color, fontWeight: 'bold' }}>
                                {apiStatus?.status}
                            </Typography>
                        </Stack>
                        <Divider sx={{ pt: 1 }} />
                        <Box component='span' sx={{ 
                            display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 1 
                        }}>
                            {`Updated: ${apiStatus?.updated}`}
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