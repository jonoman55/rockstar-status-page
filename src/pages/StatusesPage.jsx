import { Box } from '@mui/material';
import RockstarLoader from '../components/RockstarLoader';
import TabGroup from '../components/TabGroup';
import StatusesList from '../components/StatusesList';
import { useAppContext } from '../contexts/AppContext';

const StatusesPage = () => {
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
                        {/* Statuses */}
                        {tabValue === 2 && (
                            <StatusesList />
                        )}
                    </>
                )}
            </Box>
        </>
    );
};

export default StatusesPage;