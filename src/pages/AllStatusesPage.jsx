import { Box } from '@mui/material';
import { RockstarLoader } from '../components/other/RockstarLoader';
import TabGroup from '../components/other/TabGroup';
import OverallStatusCard from '../components/cards/OverallStatusCard';
import { useAppContext } from '../contexts/AppContext';

const AllStatusesPage = () => {
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
                {apiStatus?.success && !isLoading && tabValue === 0 && <OverallStatusCard />}
            </Box>
        </>
    );
};

export default AllStatusesPage;
