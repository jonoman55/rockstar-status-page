import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RockstarLoader } from '../components/other/RockstarLoader';
import NavBar from '../components/other/NavBar';
import ServicePageCard from '../components/cards/ServicePageCard';
import { useAppContext } from '../contexts/AppContext';

const ServicePage = () => {
    const { id } = useParams();

    const {
        isLoading,
        apiStatus,
        setIsLoading,
        serviceById,
        getServiceById,
        statusById,
        getStatusById,
        simulateLoading
    } = useAppContext();

    const fetchData = async () => {
        setIsLoading(true);
        await getServiceById(id);
        await getStatusById(id);
        await simulateLoading(500);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [id]);

    return isLoading ? <RockstarLoader /> : (
        <>
            <NavBar />
            {apiStatus?.success && !isLoading && (
                <ServicePageCard
                    service={serviceById}
                    status={statusById}
                    onRefresh={fetchData}
                />
            )}
        </>
    );
};

export default ServicePage;