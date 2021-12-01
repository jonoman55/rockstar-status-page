import { Box, Icon, Stack } from "@mui/material";
import {
    Store,
    NotificationsActive as Alert,
    Security as Authentication,
    Download as Downloads,
    FactCheck as AllFeatures
} from "@mui/icons-material";
import {
    FaXbox as Xbox,
    FaDesktop as PC,
    FaPlaystation as Playstation
} from "react-icons/fa";
import {
    SiStadia as Stadia,
    SiPlaystation4 as PS4,
    SiPlaystation3 as PS3,
    SiXbox as Xbox360
} from "react-icons/si";
import { AiOutlineCloudServer as CloudServices } from "react-icons/ai";
import whiteLogo from '../images/svgs/white-logo.svg'

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
        {/* PC */}
        <Icon
            component={PC}
            sx={{ color: "#ffffff", width: 'auto' }}
        />
        {/* Xbox One */}
        <Icon
            component={Xbox}
            sx={{ color: "#9bf00b", width: 'auto' }}
        />
        {/* Xbox 360 */}
        <Icon
            component={Xbox360}
            sx={{ color: "#00af00", width: 'auto' }}
        />
        {/* Xbox Cloud Gaming */}
        <Icon
            component={Xbox}
            sx={{ color: "#9e9e9e", width: 'auto' }}
        />
        {/* Stadia */}
        <Icon
            component={Stadia}
            sx={{ color: "#f44336", width: 'auto' }}
        />
        {/* Alert */}
        <Icon
            component={Alert}
            sx={{ color: "#ffeb3b", width: 'auto' }}
        />
        {/* Playstation */}
        <Icon
            component={Playstation}
            sx={{ color: "#2196f3", width: 'auto' }}
        />
        {/* Playstation 3 */}
        <Icon
            component={PS3}
            sx={{ color: "#2196f3", width: 'auto' }}
        />
        {/* Playstation 4 */}
        <Icon
            component={PS4}
            sx={{ color: "#2196f3", width: 'auto' }}
        />
        {/* Authentication */}
        <Icon
            component={Authentication}
            sx={{ color: "#ffffff", width: 'auto' }}
        />
        {/* Store */}
        <Icon
            component={Store}
            sx={{ color: "#ffffff", width: 'auto' }}
        />
        {/* Cloud Services */}
        <Icon
            component={CloudServices}
            sx={{ color: "#ffffff", width: 'auto' }}
        />
        {/* Downloads */}
        <Icon
            component={Downloads}
            sx={{ color: "#ffffff", width: 'auto' }}
        />
        {/* All Features */}
        <Icon
            component={AllFeatures}
            sx={{ color: "#ffffff", width: 'auto' }}
        />
        {/* Default */}
        <Box
            component="img"
            src={whiteLogo}
            alt="defualt"
            sx={{ color: "#ffffff", width: '24px', height: '24px' }}
        />
    </Box>
);

export default IconArray;