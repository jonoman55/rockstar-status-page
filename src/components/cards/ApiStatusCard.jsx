import { Avatar, Box, Typography, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Link, Stack, Divider } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import { Container, Title } from '../styles/ApiStatus.styled';
import { styleStatus, fetchImage } from '../../helpers';
import { useAppContext } from '../../contexts/AppContext';

const ApiStatusCard = () => {
    const {
        tabValue,
        apiStatus,
        refetchApiStatus
    } = useAppContext();

    const color = styleStatus(apiStatus?.status?.toLowerCase());

    return (
        <Container>
            <Card elevation={0} sx={{
                alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: tabValue === 3 && 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: tabValue === 3 && 1 }
            }}>
                <CardHeader
                    sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                    avatar={
                        <Avatar aria-label='status-icon' sx={{ bgcolor: 'inherit' }}>
                            <StatusIcon status={`${apiStatus?.status?.toLowerCase()}`} />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label='refresh' onClick={refetchApiStatus} sx={{
                            color: 'primary.contrastText'
                        }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    }
                    title='Rockstar Services Status API'
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
                    <Paper component={Link} href={`${process.env.REACT_APP_API_URL}`} target='_blank' sx={{
                        p: 2, color: 'primary.contrastText', bgcolor: 'primary.main', textDecoration: 'none', minHeight: '125px',
                        '&:hover': { color: 'primary.contrastText', bgcolor: 'custom.disabled', opacity: 1 }
                    }}>
                        <Title variant='h6'>{apiStatus?.message}</Title>
                        <Divider sx={{ pb: 1 }} />
                        <Stack direction='row' sx={{ pt: 2 }}>
                            <Typography sx={{ pr: 1 }}>Status:</Typography>
                            <Typography variant='body1' sx={{ color: color, fontWeight: 'bold' }}>
                                {apiStatus?.status}
                            </Typography>
                        </Stack>
                        <Divider sx={{ pt: 2 }} />
                        <Box component='span' sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', py: 2 }}>
                            {`Updated: ${apiStatus?.updated}`}
                        </Box>
                    </Paper>
                </CardContent>
                <CardActions sx={{ p: 0, display: 'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Container>
    );
};

export default ApiStatusCard;