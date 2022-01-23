import { Box, Button, Typography, Paper, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { SentimentDissatisfied } from '@mui/icons-material';

const NotFoundCard = ({ onClick }) => (
    <Paper elevation={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'primary.main', minHeight: '79.7vh' }}>
        <Card sx={{ display: 'flex', height: '100%', flexDirection: 'column', bgcolor: 'primary.dark', minWidth: '250px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }}>
                <Typography variant='h6' sx={{ textAlign: 'center', color: 'primary.contrastText', fontWeight: 'bold' }}>
                    404
                </Typography>
                <Typography variant='h6' gutterBottom paragraph sx={{ textAlign: 'center', color: 'custom.contrastText', fontWeight: 'bold' }}>
                    Page Not Found
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 4 }}>
                <CardMedia
                    component={SentimentDissatisfied}
                    sx={{ color: 'custom.main', bgcolor: 'custom.white', height: 64, width: 64, borderRadius: '3rem' }}
                />
            </Box>
            <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant='contained' onClick={onClick} sx={{ mb: 2, color: 'custom.white', bgcolor: 'custom.black', '&:hover': { bgcolor: 'custom.main' } }}>
                    Go Home
                </Button>
            </CardActions>
        </Card>
    </Paper>
);

export default NotFoundCard;