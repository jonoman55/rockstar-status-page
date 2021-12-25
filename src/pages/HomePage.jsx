import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { RockstarLoader } from '../components/other/RockstarLoader';
import TabGroup from '../components/other/TabGroup';
import { useAppContext } from '../contexts/AppContext';

const HomePage = () => {
    const {
        apiStatus,
        isLoading,
    } = useAppContext();

    if (isLoading) return <RockstarLoader />;
    return (
        <>
            <TabGroup />
            <Box>
                {apiStatus?.success && !isLoading && (
                    <Navigate to='/all' replace={true} />
                )}
            </Box>
        </>
    );
};

export default HomePage;