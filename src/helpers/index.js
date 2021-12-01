import { Box, Icon } from "@mui/material";
import {
    Store, OfflinePin, OfflineBolt,
    NotificationsActive as Alert,
    Security as Authentication,
    Download as Downloads,
    FactCheck as AllFeatures
} from "@mui/icons-material";
import {
    FaXbox as Xbox,
    FaDesktop as PC,
    // FaPlaystation as Playstation
} from "react-icons/fa";
import {
    SiStadia as Stadia,
    SiPlaystation4 as PS4,
    SiPlaystation3 as PS3,
    SiXbox as Xbox360
} from "react-icons/si";
import {
    AiOutlineCloudServer as CloudServices
} from "react-icons/ai";
import gtao from '../images/brands/gtao.png'
import rdo from '../images/brands/rdo.png'
import rsgl from '../images/brands/rsgl.png'
import sc from '../images/brands/sc.png'
import support from '../images/svgs/rockstar-support.svg'
import whiteLogo from '../images/svgs/white-logo.svg'
import rsWhite from '../images/rockstar-white.png';
import logo from '../images/svgs/logo.svg'

export const styleStatus = (status) => {
    switch (status) {
        case 'up':
            return 'custom.green';
        case 'limited':
            return 'custom.yellow';
        case 'down':
            return 'custom.red';
        default:
            return 'custom.dark';
    };
};

export const fetchStatus = (status) => {
    switch (status) {
        case 'up':
            return 'UP';
        case 'limited':
            return 'LIMITED';
        case 'down':
            return 'DOWN';
        default:
            return status;
    };
};

export const fetchImage = (id) => {
    switch (id) {
        case 1:
            return rsWhite;
        case 2:
            return rdo;
        case 3:
            return gtao;
        case 4:
            return sc;
        case 5:
            return support;
        case 6:
            return rsgl;
        default:
            return logo;
    };
};

export const fetchStatusIcon = (status) => {
    switch (status) {
        case 'up':
            return <OfflinePin fontSize='large' sx={{ color: '#0cf223' }} />;
        case 'limited':
            return <OfflineBolt fontSize='large' sx={{ color: '#fff700' }} />;
        case 'down':
            return  <OfflineBolt fontSize='large' sx={{ color: '#f50202' }} />;
        default:
            return <OfflinePin fontSize='large' sx={{ color: '#0cf223' }} />;
    };
};

// TODO : check for all up = UP / check for limited/down count 2 or more vs each type = limited or down
export const checkStatuses = (statuses) => {
    if (Object.values(statuses).every((s) => s?.status.toLowerCase() === 'up'))
        return 'up';
    if (statuses.map((s) => s?.status.toLowerCase() === 'limited'))
        return 'limited';
    if (statuses.map((s) => s?.status.toLowerCase() === 'down'))
        return 'down';
};

export const fetchPlatformIcon = (platform) => {
    switch (platform) {
        case 'PC':
            return (
                <Icon
                    component={PC}
                    sx={{ color: "primary.contrastText", width: 'auto' }}
                />
            );
        case 'Xbox One':
            return (
                <Icon
                    component={Xbox}
                    sx={{ color: "#9bf00b", width: 'auto' }}
                />
            );
        case 'Xbox 360':
            return (
                <Icon
                    component={Xbox360}
                    sx={{ color: "#00af00", width: 'auto' }}
                />
            );
        case 'Xbox Cloud Gaming':
            return (
                <Icon
                    component={Xbox}
                    sx={{ color: "#9e9e9e", width: 'auto' }}
                />
            );
        case 'PS3':
            return (
                <Icon
                    component={PS3}
                    sx={{ color: "#2196f3", width: 'auto' }}
                />
            );
        case 'PS4':
            return (
                <Icon
                    component={PS4}
                    sx={{ color: "#2196f3", width: 'auto' }}
                />
            );
        case 'Stadia':
            return (
                <Icon
                    component={Stadia}
                    sx={{ color: "#f44336", width: 'auto' }}
                />
            );
        case 'Alert':
            return (
                <Icon
                    component={Alert}
                    sx={{ color: "#ffeb3b", width: 'auto' }}
                />
            );
        case 'Authentication':
            return (
                <Icon
                    component={Authentication}
                    sx={{ color: "primary.contrastText", width: 'auto' }}
                />
            );
        case 'Store':
            return (
                <Icon
                    component={Store}
                    sx={{ color: "primary.contrastText", width: 'auto' }}
                />
            );
        case 'Cloud Services':
            return (
                <Icon
                    component={CloudServices}
                    sx={{ color: "primary.contrastText", width: 'auto' }}
                />
            );
        case 'Downloads':
            return (
                <Icon
                    component={Downloads}
                    sx={{ color: "primary.contrastText", width: 'auto' }}
                />
            );
        case 'All Features':
            return (
                <Icon
                    component={AllFeatures}
                    sx={{ color: "primary.contrastText", width: 'auto' }}
                />
            );
        default:
            return (
                <Box
                    component="img"
                    src={whiteLogo}
                    alt="defualt"
                    sx={{ color: "primary.contrastText", width: '24px', height: '24px' }}
                />
            );
    };
};