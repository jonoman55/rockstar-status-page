import { useNavigate } from "react-router-dom";
import { Box, Avatar, Card, CardHeader, CardMedia, CardContent, CardActions, Paper, Typography, IconButton, Stack } from "@mui/material";
import { Refresh as RefreshIcon, Wifi as WifiIcon } from "@mui/icons-material";
import { styleStatus, fetchImage, fetchStatusIcon } from "../helpers";
import { usePathname } from "../hooks/usePathname";

// https://mui.com/components/cards/#main-content
// TODO : Finish implementing this as a card component
const ServicePageItem = ({ service, status }) => {
    const navigate = useNavigate();
    const pathname = usePathname();

    return (
        <Box component={Paper} sx={{
            width: '100%', bgcolor: 'primary.main', color: 'primary.contrastText',
            p: 2, pb: 2, height: '100%', borderRadius: 0, boxShadow: 'none'
        }}>
            <Card sx={{
                p: 1, alignContent: 'flex-start', justifyContent: 'center', alignItems: 'center',
                bgcolor: 'primary.light', color: 'primary.contrastText',
                '& .MuiCardHeader-title': { color: 'primary.contrastText', pr: 1 },
                '& .MuiCardHeader-subheader': { color: 'primary.contrastText', pr: 1 }
            }}>
                <CardHeader
                    sx={{ textAlign: 'right', color: 'primary.contrastText' }}
                    avatar={
                        <Avatar sx={{ bgcolor: 'custom.disabled' }} aria-label="logo">
                            <WifiIcon sx={{ color: `${styleStatus(service?.status?.toLowerCase())}` }} />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="refresh" onClick={() => navigate(pathname)} sx={{
                            color: 'primary.contrastText'
                        }}>
                            <RefreshIcon fontSize='large' />
                        </IconButton>
                    }
                    title={`${service?.name}`}
                    subheader={`${new Date(service?.updated).toLocaleString()}`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center' }}>
                    <CardMedia sx={{
                        objectFit: 'scale-down', borderStyle: 'solid', borderWidth: 'thin', borderRadius: '2rem',
                        bgcolor: 'custom.light', height: '250px', maxWidth: '345px'
                    }}
                        component="img"
                        height="250px"
                        image={fetchImage(service?.id)}
                        alt="logo"
                    />
                </Box>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                    <Typography variant="h6" fontWeight="bold">Service</Typography>
                    <Stack direction="row">
                        <Typography sx={{ pr: 1 }}>Status:</Typography>
                        <Typography variant="p" sx={{ color: `${styleStatus(status?.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                            {service?.status?.toUpperCase()}
                        </Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight="bold">Status</Typography>
                    <Stack direction="row">
                        <Typography sx={{ pr: 1 }}>Status:</Typography>
                        <Typography variant="p" sx={{ color: `${styleStatus(status?.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                            {status?.status?.toUpperCase()}
                        </Typography>
                    </Stack>
                </CardContent>
                <CardActions disableSpacing sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    {fetchStatusIcon(service?.status?.toLowerCase())}
                </CardActions>
            </Card>
        </Box>
    );
};

export default ServicePageItem;