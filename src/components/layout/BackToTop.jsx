import { styled, useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';

const zoomBoxStyles = {
    position: 'fixed',
    bottom: 100,
    right: 15,
};

const UpIcon = styled(Fab)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.custom.main,
}));

function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 250,
    });
  
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );      
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }; 
    return (
        <Zoom in={trigger}>
            <Box role='presentation' sx={zoomBoxStyles} onClick={handleClick}>
                {children}
            </Box>
        </Zoom>
    );
};

const BackToTop = (props) => (
    <ScrollTop {...props}>
        <UpIcon color='primary' size='small' aria-label='scroll back to top'>
            <KeyboardArrowUp />
        </UpIcon>
    </ScrollTop>
);

export default BackToTop;