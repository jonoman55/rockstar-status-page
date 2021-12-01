import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styleStatus, fetchPlatformIcon } from "../helpers";

// TODO : Finish implementing this component
const Platforms = ({ platforms }) => (
    <Box sx={{ py: 1 }}>
        <Divider sx={{ pt: 1 }} />
        <Typography sx={{ py: 2, fontSize: 18 }} variant='h6'>Platforms</Typography>
        {platforms && (
            <>
                <Divider sx={{ pb: 0 }} />
                <List component="div" sx={{ px: 0 }}>
                    {platforms?.map((p, idx) => (
                        <>
                            <ListItem key={idx} sx={{ pt: 2 }} disableGutters>
                                <ListItemIcon>{fetchPlatformIcon(p.name)}</ListItemIcon>
                                <ListItemText>{p.name}</ListItemText>
                                <Typography sx={{ pr: 1, color: `${styleStatus(p.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                                    {p.status}
                                </Typography>
                            </ListItem>
                            <Divider sx={{ pt: 1 }} />
                        </>
                    ))}
                </List>
            </>
        )}
    </Box>
);

export default Platforms;