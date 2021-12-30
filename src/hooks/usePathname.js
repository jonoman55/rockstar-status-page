import { useLocation } from 'react-router-dom';

// custom hook to get the current pathname in React
export const usePathname = () => {
    const { pathname } = useLocation();
    return pathname;
};