import { RockstarLoader } from '../components/other/RockstarLoader';
import TabGroup from '../components/other/TabGroup';
import OverallStatusCard from '../components/cards/OverallStatusCard';
// import AllCard from '../components/testing/AllCard';
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
            {apiStatus?.success && !isLoading && tabValue === 0 && (
                <OverallStatusCard />
            )}
        </>
    );
};

export default AllStatusesPage;
