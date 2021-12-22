import { Box } from '@mui/material';
import RockstarLoader from '../components/RockstarLoader';
import TabGroup from '../components/TabGroup';
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
                            </>
                        )}
                    </>
                )}
            </Box>
        </>
    );
};

export default AllStatusesPage;
