import { Box } from '@mui/material';
import { RockstarLoader } from '../components/other/RockstarLoader';
import TabGroup from '../components/other/TabGroup';
import StatusesListCard from '../components/cards/StatusesListCard';
import { useAppContext } from '../contexts/AppContext';

const StatusesPage = () => {
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
                {apiStatus?.success && !isLoading && tabValue === 2 && <StatusesListCard />}
            </Box>
        </>
    );
};

export default StatusesPage;