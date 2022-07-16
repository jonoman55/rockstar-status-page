import * as api from '../api';
import { createContext, useContext, useState, useEffect } from 'react';

const AppState = createContext({});

export const AppContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [apiStatus, setApiStatus] = useState({});
    const [updated, setUpdated] = useState('');
    const [services, setServices] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [serviceById, setServiceById] = useState([]);
    const [statusById, setStatusById] = useState([]);
    const [tabValue, setTabValue] = useState(0);
    const [servicePageId, setServicePageId] = useState(0);
    const [timezone, setTimezone] = useState('America/New_York');

    const getUpdated = async () => {
        const data = await api.fetchAll('America/New_York');
        setUpdated(data?.updated);
    };

    const getStatuses = async () => {
        const data = await api.fetchStatuses();
        setStatuses(data);
    };

    const getStatusById = async (id) => {
        const data = await api.fetchStatusById(id);
        setStatusById(data);
    };

    const getServices = async () => {
        const data = await api.fetchServices();
        setServices(data);
    };

    const getServiceById = async (id) => {
        const data = await api.fetchServiceById(id);
        setServiceById(data);
    };

    const getApiStatus = async () => {
        const data = await api.fetchApiStatus();
        setApiStatus(data);
    };

    const simulateLoading = async (milliseconds) => {
        await api.sleep(milliseconds);
    };

    const refetchAllData = async () => {
        setIsLoading(true);
        await getUpdated();
        await getApiStatus();
        await getServices();
        await getStatuses();
        await simulateLoading(1000);
        setIsLoading(false);
    };

    const refetchServices = async () => {
        setIsLoading(true);
        await getServices();
        await simulateLoading(1000);
        setIsLoading(false);
    };

    const refetchStatuses = async () => {
        setIsLoading(true);
        await getStatuses();
        await simulateLoading(2000);
        setIsLoading(false);
    };

    const refetchApiStatus = async () => {
        setIsLoading(true);
        await getApiStatus();
        await simulateLoading(1000);
        setIsLoading(false);
    };

    useEffect(() => {
        setIsLoading(true);
        getUpdated();
        getApiStatus();
        getServices();
        getStatuses();
        simulateLoading(1000);
        setIsLoading(false);
    }, []);

    const value = {
        apiStatus,
        setApiStatus,
        getApiStatus,
        isLoading,
        setIsLoading,
        services,
        serviceById,
        setServiceById,
        getServiceById,
        statuses,
        statusById,
        setStatusById,
        getStatusById,
        tabValue,
        setTabValue,
        servicePageId,
        setServicePageId,
        updated,
        setUpdated,
        getUpdated,
        timezone,
        setTimezone,
        refetchAllData,
        refetchServices,
        refetchStatuses,
        refetchApiStatus,
        simulateLoading
    };

    return (
        <AppState.Provider value={value}>
            {props.children}
        </AppState.Provider>
    );
};

export const useAppContext = () => useContext(AppState);