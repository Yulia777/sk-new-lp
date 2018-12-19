import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {orderSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';
import { formDataProcessing } from './../../../utils/ajax';

class Categories extends Component{


    constructor(props) {
        super(props);
        this.state = {
            popupOrder: false
        };
    }

    sendFormOrder(event) {
        event.preventDefault();
        const formData = {
            type: 'mini',
            name: event.target.name.value,
            phone: event.target.phone.value
        };

        formDataProcessing('Эскизное проектирование с 3D моделированием', formData.name, formData.phone)
            .then(json => {
                console.log(json);
                this.props.sendEmail(formData);
                this.props.orderSuccess(true);
                yaCounter21935674.reachGoal('3d-modelirovanie-submit');
                event.target.name.value = '';
                event.target.phone.value = '';
            });
        yaCounter21935674.reachGoal('3d-modelirovanie-submit');
        ga('send','event','3d-modelirovanie-submit_ga','submit');
    }
    openPopupOrder() {
        this.setState({popupOrder: true});
        yaCounter21935674.reachGoal('3d-modelirovanie-form');
    }
    closePopupOrder() {
        this.setState({popupOrder: false});
        this.props.orderSuccess(false);
    }




    render() {
        return(
            <section className="categories">
                <div className="container categories__wrap">
                    <h2 className="categories__title">
                        Для определения объёма стройматериалов и сметной стоимости на ваш будущий дом,
                        предлагаем Экспресс услугу - <span>Эскизное проектирование с 3D моделированием</span>
                    </h2>
                    <div className="modeling">
                        <div className="modeling__item">
                            <img src="./images/sk/modeling3d.jpg" alt="Моделирование 3d" title="Моделирование 3d"/>
                            <p className="image-title">
                                «Дизайн проект гостиной и кухни»
                            </p>
                        </div>
                        <div className="modeling__item">
                            <div className="advantages">
                                <div className="advantages__item">
                                    <img src="./images/sk/fireplace.png" alt="камин"/>
                                </div>
                                <div className="advantages__item">
                                    Прочувствуйте уют и комфорт вашего будущего дома
                                </div>
                            </div>
                            <div className="advantages">
                                <div className="advantages__item">
                                    <img src="./images/sk/stool.png" alt="мебель"/>
                                </div>
                                <div className="advantages__item">
                                    Расставьте мебель и сантехнику
                                </div>
                            </div>
                            <div className="advantages">
                                <div className="advantages__item">
                                    <img src="./images/sk/cube.png" alt="площадь комнат"/>
                                </div>
                                <div className="advantages__item">
                                    Ощутите размеры и площадь комнат
                                </div>
                            </div>
                            <div className="modeling__btn">
                                <button className="btn" onClick={this.openPopupOrder.bind(this)}>
                                    УЗНАТЬ ПОДРОБНЕЕ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Popup
                    title={'Эскизное проектирование с 3D моделированием'}
                    area={'popup-form form-categories'}
                    state={this.state.popupOrder}
                    close={this.closePopupOrder.bind(this)}
                    type={'mini'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormOrder.bind(this)}
                />
            </section>
        )
    }
}


export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isOrderNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({orderSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
