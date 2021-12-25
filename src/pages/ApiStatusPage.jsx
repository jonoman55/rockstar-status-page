import { Box } from '@mui/material';
import { RockstarLoader } from '../components/other/RockstarLoader';
import TabGroup from '../components/other/TabGroup';
import ApiStatusCard from '../components/cards/ApiStatusCard';
import { useAppContext } from '../contexts/AppContext';

const ApiStatusPage = () => {
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
                {apiStatus?.success && !isLoading && tabValue === 3 && <ApiStatusCard />}
            </Box>
        </>
    );
}

export default ApiStatusPage
