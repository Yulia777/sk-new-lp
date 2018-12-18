import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
    './images/sk/wood.jpg',
    './images/sk/sertificate1-1.jpg',
    './images/sk/sertificate-0.jpg',
    './images/sk/sertificate3-3.jpg',
];

export default class LightboxExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <div className="lightbox__wrap container">
                    <img className="lightbox__img" src="./images/sk/wood.jpg"
                         onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}/>
                    <img className="lightbox__img" src="./images/sk/sertificate1.jpg"
                         onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}/>
                    <img className="lightbox__img" src="./images/sk/sertificate.jpg"
                         onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}/>
                    <img className="lightbox__img" src="./images/sk/sertificate3.jpg"
                         onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}/>
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}