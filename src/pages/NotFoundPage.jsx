import { useNavigate } from 'react-router-dom';
import NotFoundCard from '../components/cards/NotFoundCard';

export default function NotFoundPage() {
    const navigate = useNavigate();
    return <NotFoundCard onClick={() => navigate('/')} />;
};