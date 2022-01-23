import { RockstarLoader } from '../components/other/RockstarLoader';
import PageItem from '../components/items/PageItem';
import ApiStatusCard from '../components/cards/ApiStatusCard';
import { useAppContext } from '../contexts/AppContext';

const ApiStatusPage = () => {
    const {
        apiStatus,
        isLoading,
        tabValue
    } = useAppContext();

    return isLoading ? <RockstarLoader /> : (
        <PageItem>
            {apiStatus?.success && tabValue === 3 && (
                <ApiStatusCard />
            )}
        </PageItem>
    );
};

export default ApiStatusPage
