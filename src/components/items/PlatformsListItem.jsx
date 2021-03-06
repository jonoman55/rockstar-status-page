import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PlatformIcon } from '../other/PlatformIcon';
import { styleStatus } from '../../helpers';

const PlatformsListItem = ({ platforms }) => (
    <Box sx={{ py: 1 }}>
        <Divider sx={{ pt: 1 }} />
        <Typography sx={{ py: 2, fontSize: 18 }} variant='h6'>Platforms</Typography>
        {platforms && (
            <React.Fragment>
                <Divider sx={{ pb: 0 }} />
                <List component='div' sx={{ px: 0 }}>
                    {platforms?.map((p, idx) => (
                        <React.Fragment key={idx}>
                            <ListItem sx={{ pt: 2 }} disableGutters>
                                <ListItemIcon>
                                    <PlatformIcon platform={p?.name} />
                                </ListItemIcon>
                                <ListItemText>{p.name}</ListItemText>
                                <Typography sx={{ pr: 1, color: `${styleStatus(p.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                                    {p.status}
                                </Typography>
                            </ListItem>
                            <Divider sx={{ pt: 1 }} />
                        </React.Fragment>
                    ))}
                </List>
            </React.Fragment>
        )}
    </Box>
);

export default PlatformsListItem;