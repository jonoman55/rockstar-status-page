import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Paper, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { SentimentDissatisfied } from '@mui/icons-material';

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'primary.main', minHeight: '85.5vh' }}>
            <Card sx={{ display: 'flex', height: '100%', flexDirection: 'column', bgcolor: 'primary.light' }}>
                <CardContent>
                    <Typography variant='h6' sx={{ p: 1, textAlign: 'center', color: 'primary.contrastText', fontWeight: 'bold' }} paragraph>
                        Page Not Found
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 4 }}>
                    <CardMedia 
                        component={SentimentDissatisfied}
                        sx={{ height: 64, width: 64 }}
                    />
                </Box>
                <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant='contained' sx={{ color: 'primary.contrastText' }} onClick={() => navigate('/all')}>
                        Go Home
                    </Button>
                </CardActions>
            </Card>
        </Paper>
    );
};

export default NotFoundPage;