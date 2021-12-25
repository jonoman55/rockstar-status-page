import gtao from '../images/brands/gtao.png'
import rdo from '../images/brands/rdo.png'
import rsgl from '../images/brands/rsgl.png'
import sc from '../images/brands/sc.png'
import support from '../images/svgs/rockstar-support.svg'
import rsWhite from '../images/rockstar-white.png';
import logo from '../images/svgs/logo.svg'
import { countBy } from 'lodash';

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

// TODO : Remove this after testing is done
export const checkStatuses = (statuses) => {
    if (Object.values(statuses).every((s) => s?.status.toLowerCase() === 'up'))
        return 'up';
    if (statuses.map((s) => s?.status.toLowerCase() === 'limited'))
        return 'limited';
    if (statuses.map((s) => s?.status.toLowerCase() === 'down'))
        return 'down';
};

// TODO : Test this function and rename it to something more fitting i.e. fetchStatusType
export const checkStatusesCount = (statuses) => {
    const count = countBy(statuses, 'status');
    let indicator = {};
    for (const [key, value] of Object.entries(count)) {
        indicator = { key, value };
    }
    return indicator?.key?.toLowerCase();
};