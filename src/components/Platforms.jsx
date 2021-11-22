import { Box, Typography, Divider, List, ListItem } from "@mui/material";
import { styleStatus } from "../helpers";

const Platforms = ({ platforms }) => (
    <>
        {platforms && (
            <Box sx={{ py: 1 }} >
                <Divider sx={{ pt: 1 }} />
                <Typography sx={{ pt: 1, fontSize: 16 }} variant='h6'>Platforms</Typography>
                {platforms?.map((p, idx) => (
                    <Box key={idx}>
                        <List sx={{ py: 0 }}>
                            <ListItem sx={{ pb: 0 }}>{p.name}</ListItem>
                            <ListItem sx={{ pb: 0 }}>
                                <Typography sx={{ color: `${styleStatus(p.status?.toLowerCase())}`, fontWeight: 'bold' }}>
                                    {p.status}
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                ))}
            </Box>
        )}
    </>
);

export default Platforms;