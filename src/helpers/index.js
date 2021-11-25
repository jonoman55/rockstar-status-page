import { OfflinePin, OfflineBolt } from '@mui/icons-material';
import gtao from '../images/brands/gtao.png'
import rdo from '../images/brands/rdo.png'
import rsgl from '../images/brands/rsgl.png'
import sc from '../images/brands/sc.png'
import support from '../images/svgs/rockstar-support.svg'
// import whiteLogo from '../images/svgs/white-logo.svg'
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

// TODO : Complete this function - ref: IconArray.jsx
export const fetchPlatformIcon = (platform) => {
    switch (platform) {
        case 'pc':  
            break;
        default:
            break;
    };
};