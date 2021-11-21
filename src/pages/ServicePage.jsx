import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from '../components/NavBar';
import RockstarLoader from '../components/RockstarLoader';
import ServicePageItem from '../components/ServicePageItem';
import { useAppContext } from '../contexts/AppContext';

const ServicePage = () => {
    const { id } = useParams();

    const {
        servicePageId,
        isLoading,
        setIsLoading,
        serviceById,
        getServiceById,
        statusById,
        getStatusById,
    } = useAppContext();

    const fetchData = async () => {
        setIsLoading(true);
        try {
            await getServiceById(id);
            await getStatusById(id);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [servicePageId]);

    if (isLoading) return <RockstarLoader />;
    return (
        <>
            <NavBar />
            <Box>
                <ServicePageItem
                    service={serviceById}
                    status={statusById}
                />
            </Box>
        </>
    );
};

export default ServicePage;