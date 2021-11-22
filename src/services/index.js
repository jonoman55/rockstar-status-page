import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_URL}/api`;

const axiosInstance = axios.create({ baseURL });

export const fetchApiStatus = async () => {
    try {
        console.log('/ called...');
        const { data } = await axiosInstance.get();
        return data;
    } catch (error) {
        console.log(error);
    }
};

// NOTE : Add /file to the api calls when testing...
export const fetchAll = async (tz) => {
    try {
        console.log('/all called...');
        const { data } = await axiosInstance.get(`/all`, {
            params: { tz }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchServices = async () => {
    try {
        console.log('/services called...');
        const { data } = await axiosInstance.get(`/services`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchServiceById = async (id) => {
    try {
        console.log(`/services/${id} called...`);
        const { data } = await axiosInstance.get(`/services/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchStatuses = async () => {
    try {
        console.log('/statuses called...');
        const { data } = await axiosInstance.get(`/statuses`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchStatusById = async (id) => {
    try {
        console.log(`/statuses/${id} called...`);
        const { data } = await axiosInstance.get(`/statuses/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const sleep = async (milliseconds) => {
    try {
        console.log(`sleeping for ${milliseconds} milliseconds...`);
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    } catch (error) {
        console.log(error);
    }
};