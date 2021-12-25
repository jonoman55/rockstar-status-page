import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { RockstarLoader } from '../components/other/RockstarLoader';
import NavBar from '../components/other/NavBar';
import ServicePageCard from '../components/cards/ServicePageCard';
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
        try {
            setIsLoading(true);
            await getServiceById(id);
            await getStatusById(id);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [servicePageId]);

    if (isLoading) return <RockstarLoader />;
    else return (
        <>
            <NavBar />
            <Box>
                <ServicePageCard
                    service={serviceById}
                    status={statusById}
                    onRefresh={fetchData}
                />
            </Box>
        </>
    );
};

export default ServicePage;