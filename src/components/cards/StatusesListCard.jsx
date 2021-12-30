import { NavLink } from 'react-router-dom';
import { Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Paper, Grid } from '@mui/material';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { RockstarLoader } from '../other/RockstarLoader';
import { StatusIcon } from '../other/StatusIcon';
import { CardActionBox } from '../other/CardActionBox';
import StatusItem from '../items/StatusItem';
import { fetchImage, fetchStatusByCount } from '../../helpers';
import { useAppContext } from '../../contexts/AppContext';

// TODO : Padd the Card Content
const StatusesListCard = () => {
    const {
        statuses,
        isLoading,
        tabValue,
        refetchStatuses,
    } = useAppContext();

    return isLoading ? <RockstarLoader /> : (
        <Paper sx={{ p: 2, pb: 3.5, width: '100%', height: '100%', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
            <Card sx={{
                alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: tabValue === 2 && 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: tabValue === 2 && 1 }
            }}>
                <CardHeader
                    sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'inherit' }}>
                            <StatusIcon status={`${fetchStatusByCount(statuses)}`} />
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={refetchStatuses} sx={{ color: 'primary.contrastText' }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    }
                    title='Rockstar Statuses'
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
                <CardActions sx={{ display: 'flex' }}>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default StatusesListCard;