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
    FaPlaystation as Playstation
} from 'react-icons/fa';
import {
    SiStadia as Stadia,
    // SiPlaystation4 as PS4,
    // SiPlaystation3 as PS3,
    // SiPlaystation5 as PS5,
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
                    sx={{ color: 'custom.pc', width: 'auto' }}
                />
            );
        case 'Xbox One':
            return (
                <Icon
                    component={Xbox}
                    sx={{ color: 'custom.xboxOne', width: 'auto' }}
                />
            );
        case 'Xbox 360':
            return (
                <Icon
                    component={Xbox360}
                    sx={{ color: 'custom.xbox360', width: 'auto' }}
                />
            );
        case 'Xbox Cloud Gaming':
            return (
                <Icon
                    component={Xbox}
                    sx={{ color: 'custom.xboxCloud', width: 'auto' }}
                />
            );
        case 'Xbox Series X/S': 
            return (
                <Icon
                    component={Xbox}
                    sx={{ color: 'custom.green', width: 'auto' }}
            />
            )
        case 'PS3':
            return (
                <Icon
                    component={Playstation}
                    sx={{ color: 'custom.playstation', width: 'auto' }}
                />
            );
        case 'PS4':
            return (
                <Icon
                    component={Playstation}
                    sx={{ color: 'custom.playstation', width: 'auto' }}
                />
            );
        case 'PS5':
            return (
                <Icon
                    component={Playstation}
                    sx={{ color: 'custom.playstation', width: 'auto' }}
                />
            )
        case 'Stadia':
            return (
                <Icon
                    component={Stadia}
                    sx={{ color: 'custom.stadia', width: 'auto' }}
                />
            );
        case 'Alert':
            return (
                <Icon
                    component={Alert}
                    sx={{ color: 'custom.alert', width: 'auto' }}
                />
            );
        case 'Authentication':
            return (
                <Icon
                    component={Authentication}
                    sx={{ color: 'custom.auth', width: 'auto' }}
                />
            );
        case 'Store':
            return (
                <Icon
                    component={Store}
                    sx={{ color: 'custom.store', width: 'auto' }}
                />
            );
        case 'Cloud Services':
            return (
                <Icon
                    component={CloudServices}
                    sx={{ color: 'custom.cloud', width: 'auto' }}
                />
            );
        case 'Downloads':
            return (
                <Icon
                    component={Downloads}
                    sx={{ color: 'custom.downloads', width: 'auto' }}
                />
            );
        case 'All Features':
            return (
                <Icon
                    component={AllFeatures}
                    sx={{ color: 'custom.all', width: 'auto' }}
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