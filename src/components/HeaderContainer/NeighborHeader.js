import React from 'react';
import NeighborHero from '../HeaderPhrase/NeighborHero';
import { Container } from '../container';
import '../../styles/components/Neigborheader.scss';

const NeighorContainer = () => {
    return (
        <header className='neighborheader'>
            <Container>
                <NeighborHero/>
            </Container>
        </header>
    )
}

export default NeighorContainer
