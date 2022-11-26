import React from 'react';
import Home from '../HeaderPhrase/home';
import { Container } from '../container';
import '../../styles/components/header.scss';


const HomeContainer = () => {
    return (
        <header className='homeheader'>
            <Container>
                <Home />
            </Container>
        </header>
    )
}

export default HomeContainer
