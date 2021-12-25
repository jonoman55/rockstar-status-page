import { Error, OfflinePin, OfflineBolt } from '@mui/icons-material';

// TODO : Use this instead of the fetchStatusIcon through out the project 
// TODO : Add the css colors to the theme palette

export const StatusIcon = ({ status }) => {
    switch (status) {
        case 'up':
            return <OfflinePin fontSize='large' sx={{ color: '#0cf223' }} />;
        case 'limited':
            return <OfflineBolt fontSize='large' sx={{ color: '#fff700' }} />;
        case 'down':
            return <Error fontSize='large' sx={{ color: '#f50202' }} />;
        default:
            return <OfflinePin fontSize='large' sx={{ color: '#0cf223' }} />;
    };
};
