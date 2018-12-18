import React, { Component } from 'react';

class Presentation extends Component{

    render() {
        return(
            <section className="presentation">
                <div className="container presentation__wrap">
                    <div className="content">
                        <h2 className="presentation__title">
                            Получите презентацию идей
                            для подарков бесплатно!
                        </h2>
                        <p className="presentation__desc">
                            Опишите вашу задачу и мы подберем нестандартные идеи
                            для подарков, конкретно под ваш случай!
                        </p>
                        <button className="btn presentation__btn">
                            Получить презентацию идей для подарка
                        </button>
                    </div>

                </div>

            </section>
        )
    }
}

export default Presentation;