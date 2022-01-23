import { Navigate } from 'react-router-dom';
import { RockstarLoader } from '../components/other/RockstarLoader';
import PageItem from '../components/items/PageItem';
import { useAppContext } from '../contexts/AppContext';

// TODO : Remove from project
const HomePage = () => {
    const {
        isLoading,
    } = useAppContext();

    return isLoading ? <RockstarLoader /> : (
        <PageItem>
           <Navigate to='/all' replace={true} />
        </PageItem>
    );
};

export default HomePage;