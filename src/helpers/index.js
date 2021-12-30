import {
    GrandTheftAutoOnline,
    RedDeadOnline,
    RockstarGamesLauncher,
    SocialClub,
    RockstarSupport,
    RockstarWhiteLogo,
    RockstarLogo
} from '../images'
import { countBy } from 'lodash';

export const styleStatus = (status) => {
    switch (status) {
        case 'up':
            return 'custom.brightGreen';
        case 'limited':
            return 'custom.brightYellow';
        case 'down':
            return 'custom.brightRed';
        default:
            return 'custom.black';
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
            return RockstarWhiteLogo;
        case 2:
            return RedDeadOnline;
        case 3:
            return GrandTheftAutoOnline;
        case 4:
            return SocialClub;
        case 5:
            return RockstarSupport;
        case 6:
            return RockstarGamesLauncher;
        default:
            return RockstarLogo;
    };
};

// TODO : Remove this after testing is done with checkStatusesCount
export const checkStatuses = (statuses) => {
    if (Object.values(statuses).every((s) => s?.status.toLowerCase() === 'up'))
        return 'up';
    if (statuses.map((s) => s?.status.toLowerCase() === 'limited'))
        return 'limited';
    if (statuses.map((s) => s?.status.toLowerCase() === 'down'))
        return 'down';
};

export const fetchStatusByCount = (statuses) => {
    const count = countBy(statuses, 'status');
    let indicator = {};
    for (const [key, value] of Object.entries(count)) {
        indicator = { key, value };
    }
    return indicator?.key?.toLowerCase();
};