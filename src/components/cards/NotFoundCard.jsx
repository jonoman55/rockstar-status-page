import { Box, Button, Typography, Paper, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { SentimentDissatisfied } from '@mui/icons-material';

const NotFoundCard = ({ onClick }) => (
    <Paper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'primary.main', minHeight: '85.5vh' }}>
        <Card sx={{ display: 'flex', height: '100%', flexDirection: 'column', bgcolor: 'primary.light' }}>
            <CardContent>
                <Typography variant='h6' gutterBottom paragraph sx={{ p: 1, textAlign: 'center', color: 'primary.contrastText', fontWeight: 'bold' }}>
                    404 - Page Not Found
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 4 }}>
                <CardMedia
                    component={SentimentDissatisfied}
                    sx={{ color: 'custom.main', height: 64, width: 64 }}
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