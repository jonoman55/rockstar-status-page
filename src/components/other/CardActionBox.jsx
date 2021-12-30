import { styled, Box } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    padding: theme.spacing(1),
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
}));

const Content = styled(Box)`
    height: 24;
    width: 24;
`;

export const CardActionBox = () => (
    <Container>
        <Content />
    </Container>
);