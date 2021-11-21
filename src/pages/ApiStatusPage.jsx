import { Box } from '@mui/material';
import RockstarLoader from '../components/RockstarLoader';
import TabGroup from '../components/TabGroup';
import ApiStatus from '../components/ApiStatus';
import { useAppContext } from '../contexts/AppContext';

const ApiStatusPage = () => {
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
                        {/* API Status */}
                        {tabValue === 3 && (
                            <ApiStatus />
                        )}
                    </>
                )}
            </Box>
        </>
    );
}

export default ApiStatusPage
