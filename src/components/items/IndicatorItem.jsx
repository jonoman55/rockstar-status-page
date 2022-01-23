import { Paper, Typography } from '@mui/material';
import { StatusIcon } from '../other/StatusIcon';

export const IndicatorItem = ({ status }) => (
    <Paper sx={{
        display: 'flex', flexDirection: 'column', flexWrap: 'nowrap',
        justifyContent: 'center', alignItems: 'center', color: 'contrastText',
        bgcolor: 'primary.dark', p: 1, minWidth: '83px', minHeight: '50px'
    }}>
        <StatusIcon status={status} />
        <Typography sx={{ pt: 1, textTransform: 'uppercase', fontWeight: 'bold' }}>{status}</Typography>
    </Paper>
);