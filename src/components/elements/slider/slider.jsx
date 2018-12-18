import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: false,
            autoplay:true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <p className="text">
                        Вам перезвонит
                    </p>
                    <img src="./images/sk/helen.jpg" alt="Наталья Бояринцева"/>
                    <p className="name">
                        Наталья Бояринцева
                    </p>
                    <p className="manager">
                        Клиентский менеджер
                    </p>
                </div>
                <div>
                    <p className="text">
                        Вам перезвонит
                    </p>
                    <img src="./images/sk/helen.jpg" alt="Наталья Бояринцева"/>
                    <p className="name">
                        Наталья Бояринцева
                    </p>
                    <p className="manager">
                        Клиентский менеджер
                    </p>
                </div>
            </Slider>
        );
    }
}

export default SimpleSlider;