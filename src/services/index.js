import axios from 'axios';

// https://jc-rockstar-status-api.herokuapp.com
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

// TODO : Remove /file when testing is done...
export const fetchAll = async (tz) => {
    try {
        console.log('/file/all called...');
        const { data } = await axiosInstance.get(`/file/all`, {
            params: { tz }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchServices = async () => {
    try {
        console.log('/file/services called...');
        const { data } = await axiosInstance.get(`/file/services`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchServiceById = async (id) => {
    try {
        console.log(`/file/services/${id} called...`);
        const { data } = await axiosInstance.get(`/file/services/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchStatuses = async () => {
    try {
        console.log('/file/statuses called...');
        const { data } = await axiosInstance.get(`/file/statuses`);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const fetchStatusById = async (id) => {
    try {
        console.log(`/file/statuses/${id} called...`);
        const { data } = await axiosInstance.get(`/file/statuses/${id}`);
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