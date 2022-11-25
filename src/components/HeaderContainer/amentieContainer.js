import React from 'react';
import AmenityPhrase from '../HeaderPhrase/amentie';
import { Container } from '../container';
import '../../styles/components/Amenitieheader.scss';


const AmenityContainer = () => {
    return (
        <header>
            <Container>
                <AmenityPhrase />
            </Container>
        </header>
    )
}

export default AmenityContainer
