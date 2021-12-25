import React from 'react';
import { Container } from './Container';
import Header from './Header';
import BackToTop from './BackToTop';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <Container component='main'>
                {props.children}
                <BackToTop />
            </Container>
            <Footer />
        </React.Fragment>
    );
};