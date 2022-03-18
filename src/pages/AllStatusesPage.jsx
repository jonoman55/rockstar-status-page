import { Spinner } from '../components/other/Spinner';
import PageItem from '../components/items/PageItem';
import AllCard from '../components/cards/AllCard';
import { useAppContext } from '../contexts/AppContext';

const AllStatusesPage = () => {
    const {
        apiStatus,
        isLoading,
        tabValue
    } = useAppContext();

    return isLoading ? <Spinner /> : (
        <PageItem>
            {apiStatus?.success && tabValue === 0 && (
                <AllCard />
            )}
        </PageItem>
    );
};

export default AllStatusesPage;
