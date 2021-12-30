import { RockstarLoader } from '../components/other/RockstarLoader';
import PageItem from '../components/items/PageItem';
import StatusesListCard from '../components/cards/StatusesListCard';
import { useAppContext } from '../contexts/AppContext';

const StatusesPage = () => {
    const {
        apiStatus,
        isLoading,
        tabValue
    } = useAppContext();

    return isLoading ? <RockstarLoader /> : (
        <PageItem>
            {apiStatus?.success && !isLoading && tabValue === 2 && (
                <StatusesListCard />
            )}
        </PageItem>
    );
};

export default StatusesPage;