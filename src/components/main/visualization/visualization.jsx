import React, { Component } from 'react';

class Visualization extends Component{

    render() {
        return(
            <section className="visualization">
                <div className="container visualization__wrap">
                    <h2 className="visualization__title">
                        Подготовим визуализацию вашей
                        продукции перед изготовлением
                    </h2>
                    <div className="content">
                        <div className="content__item">
                            <p className="content__desc">
                                Чтобы не покупать кота в мешке, вы можете запросить визуализацию вашей продукции чтобы
                                удостовериться, что именно на этом товаре вы хотите видеть свою эмблему
                            </p>
                        </div>
                        <div className="content__item">
                            <p className="image">
                                <img src="./images/screen-min.png" alt="Подготовка визуализации" title="Подготовка визуализации"/>
                            </p>
                        </div>
                    </div>

                </div>

                <button className="btn visualization__btn">Запросить визуализацию</button>

            </section>
                )
    }
}

export default Visualization;