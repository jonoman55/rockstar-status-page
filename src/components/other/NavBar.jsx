import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home as HomeIcon } from '@mui/icons-material';
import { AppBar, ButtonContainer, ToggleButtonGroup, ToggleButton, HomeButton } from '../styles/Navbar.styled';
import { useAppContext } from '../../contexts/AppContext';
import { usePathname } from '../../hooks/usePathname';

export default function NavBar() {
    const pathname = usePathname();
    const { services, setServicePageId } = useAppContext();
    const [alignment, setAlignment] = useState('');
    const id = Number(pathname.slice(-1));
    const handleChange = (event, newAlignment) => setAlignment(newAlignment);
    return (
        <AppBar position='static'>
            <ButtonContainer>
                <ToggleButtonGroup value={alignment} exclusive fullWidth onChange={handleChange}>
                    <HomeButton LinkComponent={NavLink} to='/' value='Home'>
                        <HomeIcon />
                    </HomeButton>
                    {services.map((service) => (
                        <ToggleButton
                            key={service?.id}
                            selected={id === service?.id}
                            size='small' 
                            LinkComponent={NavLink} 
                            to={`/service/${service?.id}`}
                            value={service?.name} 
                            onClick={() => setServicePageId(service?.id)}
                        >
                            {service?.name}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </ButtonContainer>
        </AppBar>
    );
};