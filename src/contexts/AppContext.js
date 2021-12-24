import { createContext, useContext, useState, useEffect } from 'react';
import { fetchAll, fetchApiStatus, fetchServices, fetchServiceById, fetchStatuses, fetchStatusById, sleep } from '../services';

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

    // TODO : Update API calls to accept timezone param
    const getUpdated = async () => {
        try {
            const data = await fetchAll('America/New_York');
            console.log(data?.updated);
            setUpdated(data?.updated);
        } catch (error) {
            console.log(error);
        }
    };

    const getStatuses = async () => {
        try {
            const data = await fetchStatuses();
            console.log(data);
            setStatuses(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getStatusById = async (id) => {
        try {
            const data = await fetchStatusById(id);
            console.log(data);
            setStatusById(data.shift());
        } catch (error) {
            console.log(error);
        }
    };

    const getServices = async () => {
        try {
            const data = await fetchServices();
            console.log(data);
            setServices(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getServiceById = async (id) => {
        try {
            const data = await fetchServiceById(id);
            console.log(data);
            setServiceById(data.shift());
        } catch (error) {
            console.log(error);
        }
    };

    const getApiStatus = async () => {
        try {
            const data = await fetchApiStatus();
            console.log(data);
            setApiStatus(data);
        } catch (error) {
            console.log(error);
        }
    };

    const simulateLoading = async (milliseconds) => {
        try {
            await sleep(milliseconds);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllData = async () => {
        setIsLoading(true);
        await getUpdated();
        await getApiStatus();
        await getServices();
        await getStatuses();
        await simulateLoading(2000);
        setIsLoading(false);
    };

    useEffect(() => {
        getAllData();
        // eslint-disable-next-line
    }, []);

    const value = {
        getAllData,
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
        setTimezone
    };

    return (
        <AppState.Provider value={value}>
            {props.children}
        </AppState.Provider>
    );
};

export const useAppContext = () => useContext(AppState);