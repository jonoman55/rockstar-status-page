import { Error, OfflinePin, OfflineBolt } from '@mui/icons-material';

export const StatusIcon = ({ status }) => {
    switch (status) {
        case 'up':
            return <OfflinePin fontSize='large' sx={{ color: 'custom.brightGreen' }} />;
        case 'limited':
            return <OfflineBolt fontSize='large' sx={{ color: 'custom.brightYellow' }} />;
        case 'down':
            return <Error fontSize='large' sx={{ color: 'custom.brightRed' }} />;
        default:
            return <OfflinePin fontSize='large' sx={{ color: 'custom.brightGreen' }} />;
    };
};
