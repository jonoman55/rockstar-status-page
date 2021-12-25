import { Box } from '@mui/material';
import { RockstarLoader } from '../components/other/RockstarLoader';
import TabGroup from '../components/other/TabGroup';
import ServicesListCard from '../components/cards/ServicesListCard';
import { useAppContext } from '../contexts/AppContext';

const ServicesPage = () => {
    const {
        apiStatus,
        isLoading,
        tabValue
    } = useAppContext();

    if (isLoading) return <RockstarLoader />;
    else return (
        <>
            <TabGroup />
            <Box>
                {apiStatus?.success && !isLoading && tabValue === 1 && <ServicesListCard />}
            </Box>
        </>
    );
};

export default ServicesPage;
