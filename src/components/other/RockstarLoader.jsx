import { Box } from '@mui/material';
import loading from '../../images/loading.gif';

export const RockstarLoader = () => (
    <Box sx={{
        height: '85.95vh', bgcolor: 'custom.gray', display: 'flex', alignItems: 'center', justifyContent: 'center', m: 0
    }}>
        <Box component='img' src={loading} alt='Loading...' sx={{
            border: 'solid', borderWidth: '2px', borderColor: 'custom.disabled', borderRadius: '1rem'
        }} />
    </Box>
);