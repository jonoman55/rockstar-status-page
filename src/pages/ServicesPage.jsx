import { Box } from '@mui/material';
import RockstarLoader from '../components/RockstarLoader';
import TabGroup from '../components/TabGroup';
import ServiceList from '../components/ServicesList';
import { useAppContext } from '../contexts/AppContext';

const ServicesPage = () => {
    const {
        apiStatus,
        isLoading,
        tabValue
    } = useAppContext();

    if (isLoading) return <RockstarLoader />;
    return (
        <>
            <TabGroup />
            <Box>
                {apiStatus?.success && !isLoading && (
                    <>
                        {/* Services */}
                        {tabValue === 1 && (
                            <ServiceList />
                        )}
                    </>
                )}
            </Box>
        </>
    );
};

export default ServicesPage;
