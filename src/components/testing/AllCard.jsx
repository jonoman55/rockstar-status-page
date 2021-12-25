import { useNavigate, NavLink } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import { Paper, Card, CardHeader, CardMedia, CardContent, CardActions } from '../styles/PaperCard.styled';
import { RockstarLoader } from '../other/RockstarLoader';
import { CardActionBox } from '../other/CardActionBox';
import { checkStatuses } from '../../helpers';
import { useAppContext } from '../../contexts/AppContext';
import { usePathname } from '../../hooks/usePathname';

const AllCard = () => {
    const navigate = useNavigate();
    const pathname = usePathname();
    
    const {
        isLoading,
        services,
        statuses,
        updated
    } = useAppContext();

    if (isLoading) return <RockstarLoader />;
    else return (
        <Paper>
            <Card>
                <CardHeader
                    title='Service Status'
                    subheader={`${new Date().toLocaleString()}`}
                    status={`${checkStatuses(services)}`} 
                    onClick={()=> navigate(pathname)}    
                />
                <CardMedia id={0} />
                <CardContent>
                    {/* TODO : Finish implenting the Card Content */}
                </CardContent>
                <CardActions>
                    <CardActionBox />
                </CardActions>
            </Card>
        </Paper>
    );
};

export default AllCard;