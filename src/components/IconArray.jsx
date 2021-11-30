import { Box, Icon, Stack } from "@mui/material";
import { NotificationsActive } from "@mui/icons-material";
import { SiStadia as Stadia } from "react-icons/si";
import { FaXbox as Xbox } from "react-icons/fa";

// Icon Links
// MUI List Component: https://mui.com/components/lists/
// MUI Icon component: https://mui.com/components/icons/
// Material UI Icons: https://mui.com/components/material-icons/
// FontAwesome: https://fontawesome.com/v5.15/icons?d=gallery&p=1
// React Icons: https://react-icons.github.io/react-icons
const IconArray = () => (
    <Box component={Stack} sx={{
        p: 1, bgcolor: "primary.main", display: "flex", flexDirection: "row",
        flexWrap: "nowrap", justifyContent: "space-evenly", alignItems: "center",
    }}>
        <Icon
            baseClassName="fas"
            className="fa-desktop"
            sx={{ color: "#ffffff", width: 'auto' }}
        />
        <Icon
            baseClassName="fab"
            className="fa-playstation"
            sx={{ color: "#2196f3", width: 'auto' }}
        />
        <Icon
            baseClassName="fab"
            className="fa-xbox"
            sx={{ color: "#9e9e9e", width: 'auto' }}
        />
        <Icon
            component={Xbox}
            sx={{ color: "#9bf00b", width: 'auto' }}
        />
        <Icon
            component={Stadia}
            sx={{  color: "#f44336", width: 'auto' }}
        />
        <Icon
            component={NotificationsActive}
            sx={{ color: "#ffeb3b", width: 'auto' }}
        />
    </Box>
);

export default IconArray;