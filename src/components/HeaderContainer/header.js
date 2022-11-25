import React from 'react';
import Home from '../HeaderPhrase/home';
import { Container } from '../container';
import '../../styles/components/header.scss';


const HomeContainer = () => {
    return (
        <header>
            <Container>
                <Home />
            </Container>
        </header>
    )
}

export default HomeContainer
