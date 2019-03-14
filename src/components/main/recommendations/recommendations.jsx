import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import Ligtbox from "../../elements/lightbox/lightbox";

class Recommendations extends Component{

    render() {
        return(
            <section className="recommendations">
                <div className="container recommendations__wrap">
                    <h2 className="recommendations__title">
                        Клеёный брус для сезонного и зимнего проживания.<br/>
                        <span>
                            Качество, соответствует ГОСТ
                        </span> и Европейским стандартам качества
                    </h2>
                    <Ligtbox/>
                    <p className="recommendations__desc">
                        При заключении договора подряда до 31 марта 2019 г. -<br/>
                        <span> скидка на зимнее строительство</span> фундамента (монолитной плиты) <span>до 30%</span>
                    </p>
                </div>
            </section>
        )
    }
}



export default (Recommendations);
