import React from 'react';
import { Container } from '../components/container';
import '../styles/Collection.scss';
import insideHouse from '../assets/Images/bryb.jpg'
import insideHouse2 from '../assets/Images/nba.jpg'

const Collection = () => {
    return (
        <section className="collection">
            <Container>
                <div className="collection__inner">


                    <div className="collection__text">
                        <h2>the world <span> at your</span> <br />window</h2>
                        <div className="product--img">
                        <img src={insideHouse2} alt="inside house" />
                        </div>
                        <div className="product--desc">
                            <div>
                                <p>This premium set of minis is the perfect introduction to our  luxury homes.</p>

                                <a href="/">Explore more </a>
                            </div>
                        </div>
                    </div>
                    <div className="collection__img">
                        <img src={insideHouse} alt="inside house" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Collection
