import { Navigate } from 'react-router-dom';
import { RockstarLoader } from '../components/other/RockstarLoader';
import PageItem from '../components/items/PageItem';
import { useAppContext } from '../contexts/AppContext';

// TODO : Remove this Page as it is no longer used
const HomePage = () => {
    const {
        apiStatus,
        isLoading,
    } = useAppContext();

    return isLoading ? <RockstarLoader /> : (
        <PageItem>
            {apiStatus?.success && !isLoading && (
                <Navigate to='/all' replace={true} />
            )}
        </PageItem>
    );
};

export default HomePage;