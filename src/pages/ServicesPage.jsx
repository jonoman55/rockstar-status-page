import { RockstarLoader } from '../components/other/RockstarLoader';
import PageItem from '../components/items/PageItem';
import ServicesListCard from '../components/cards/ServicesListCard';
import { useAppContext } from '../contexts/AppContext';

const ServicesPage = () => {
    const {
        apiStatus,
        isLoading,
        tabValue,
    } = useAppContext();

    return isLoading ? <RockstarLoader /> : (
        <PageItem>
            {apiStatus?.success && tabValue === 1 && (
                <ServicesListCard />
            )}
        </PageItem>
    );
};

export default ServicesPage;