import { Box, Icon } from '@mui/material';
import {
    Store, 
    NotificationsActive as Alert,
    Security as Authentication,
    Download as Downloads,
    FactCheck as AllFeatures
} from '@mui/icons-material';
import {
    FaXbox as Xbox,
    FaDesktop as PC,
    // FaPlaystation as Playstation
} from 'react-icons/fa';
import {
    SiStadia as Stadia,
    SiPlaystation4 as PS4,
    SiPlaystation3 as PS3,
    SiXbox as Xbox360
} from 'react-icons/si';
import {
    AiOutlineCloudServer as CloudServices
} from 'react-icons/ai';
import whiteLogo from '../../images/svgs/white-logo.svg'

export const PlatformIcon = ({ platform }) => {
    switch (platform) {
        case 'PC':
            return (
                <Icon
                    component={PC}
                    sx={{ color: 'primary.contrastText', width: 'auto' }}
                />
            );
        case 'Xbox One':
            return (
                <Icon
                    component={Xbox}
                    sx={{ color: '#9bf00b', width: 'auto' }}
                />
            );
        case 'Xbox 360':
            return (
                <Icon
                    component={Xbox360}
                    sx={{ color: '#00af00', width: 'auto' }}
                />
            );
        case 'Xbox Cloud Gaming':
            return (
                <Icon
                    component={Xbox}
                    sx={{ color: '#9e9e9e', width: 'auto' }}
                />
            );
        case 'PS3':
            return (
                <Icon
                    component={PS3}
                    sx={{ color: '#2196f3', width: 'auto' }}
                />
            );
        case 'PS4':
            return (
                <Icon
                    component={PS4}
                    sx={{ color: '#2196f3', width: 'auto' }}
                />
            );
        case 'Stadia':
            return (
                <Icon
                    component={Stadia}
                    sx={{ color: '#f44336', width: 'auto' }}
                />
            );
        case 'Alert':
            return (
                <Icon
                    component={Alert}
                    sx={{ color: '#ffeb3b', width: 'auto' }}
                />
            );
        case 'Authentication':
            return (
                <Icon
                    component={Authentication}
                    sx={{ color: 'primary.contrastText', width: 'auto' }}
                />
            );
        case 'Store':
            return (
                <Icon
                    component={Store}
                    sx={{ color: 'primary.contrastText', width: 'auto' }}
                />
            );
        case 'Cloud Services':
            return (
                <Icon
                    component={CloudServices}
                    sx={{ color: 'primary.contrastText', width: 'auto' }}
                />
            );
        case 'Downloads':
            return (
                <Icon
                    component={Downloads}
                    sx={{ color: 'primary.contrastText', width: 'auto' }}
                />
            );
        case 'All Features':
            return (
                <Icon
                    component={AllFeatures}
                    sx={{ color: 'primary.contrastText', width: 'auto' }}
                />
            );
        default:
            return (
                <Box
                    component='img'
                    src={whiteLogo}
                    alt='defualt'
                    sx={{ color: 'primary.contrastText', width: '24px', height: '24px' }}
                />
            );
    };
};