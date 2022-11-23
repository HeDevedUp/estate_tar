import React from 'react';
import Hero from '../components/herosection';
import { Container } from '../components/container';
import '../styles/header.scss';


const Header = () => {
    return (
        <header>
            <Container>
                <Hero />
            </Container>
        </header>
    )
}

export default Header
