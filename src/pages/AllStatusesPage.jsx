import { Box } from '@mui/material';
import RockstarLoader from '../components/RockstarLoader';
import TabGroup from '../components/TabGroup';
import ApiStatus from '../components/ApiStatus';
import ServiceList from '../components/ServicesList';
import StatusesList from '../components/StatusesList'
import OverallStatus from '../components/OverallStatus';
import { useAppContext } from '../contexts/AppContext';

const AllStatusesPage = () => {
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
                        {/* All */}
                        {tabValue === 0 && (
                            <>
                                <OverallStatus />
                                <ApiStatus />
                                <ServiceList />
                                <StatusesList />
                            </>
                        )}
                    </>
                )}
            </Box>
        </>
    );
};

export default AllStatusesPage;
