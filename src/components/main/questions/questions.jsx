import React, { Component } from 'react';
import SimpleSlider from '../../elements/slider/slider';
import MaskedInput from 'react-maskedinput';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {orderSuccess, sendEmail} from "../../../actions/actions";
import { formDataProcessing } from './../../../utils/ajax';

//import FormCons from '../../elements/forms/test/test';
import Cons from '../../elements/forms/test/test.popup';

class Questions extends Component{

    constructor(props) {
        super(props);
        this.state = {
            formCons: true
        };
    }

    sendFormGetIdea(event) {
        event.preventDefault();
        const formData = {
            type:'fundament',
            name: event.target.name.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
        };

        formDataProcessing('Получить консультацию', formData.name, formData.phone, formData.email)
            .then(json => {
                console.log(json);
                this.props.sendEmail(formData);
                this.props.orderSuccess(true);
                //yaCounter21935674.reachGoal('zabronirovat-dom-submit');
                event.target.name.value = '';
                event.target.phone.value = '';
                event.target.email.value = '';
            });
        this.props.orderSuccess(true);
        alert('Спасибо,Ваша заявка принята, менеджер свяжется с Вами в ближайшее время.')
    }

    render() {
        return(
            <section className="questions">
                <div className="container questions__wrap">
                    <h2 className="questions__title">
                        При заключении договора подряда в этом году на зимнее строительство дома,
                        <span> ПОДАРОК на выбор:</span>
                    </h2>
                    <div className="surprise">
                        <div className="surprise__item">
                            <div className="surprise__wrap">
                                <img className="surprise__bant" src="./images/sk/bant.png" alt="Подарок на выбор"/>
                                <img className="surprise__img" src="./images/sk/krisha1.png" alt="Подарок на выбор"/>
                                <p className="surprise__desc">
                                    «Натуральная черепица Braas»
                                </p>
                            </div>
                        </div>
                        <div className="surprise__item">
                            <div className="surprise__wrap">
                                <img className="surprise__bant" src="./images/sk/bant.png" alt="Подарок на выбор"/>
                                <img className="surprise__img" src="./images/sk/krisha2.png" alt="Подарок на выбор"/>
                                <p className="surprise__desc">
                                    «Фасадная краска Sikkens»
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="questions__title--down">
                        <span>ЗАКАЖИТЕ</span><br/>
                        ЗВОНОК У СПЕЦИАЛИСТА В ОБЛАСТИ ДОМОСТРОЕНИЯ
                    </h2>
                    <div className="slider-form">
                        <div className="slider">
                            <SimpleSlider/>
                        </div>
                        {/*<form className="questions__form" id="specialists" onClick={this.sendFormGetIdea.bind(this)}>
                            <input type="text" placeholder="Как Вас зовут?" name="name" className="field" id="specialists-name"/>
                            <MaskedInput id="specialists-phone" mask="+7(111) 111 11 11" type="text"
                                         placeholder={'Введите Ваш телефон*'} size={''}
                                          name="phone" className="field"/>
                            /!*<input type="text" placeholder="Введите Ваш телефон" className="field"/>*!/
                            <input type="text" placeholder="Введите Ваш Email" name="email" className="field" id="specialists-email"/>
                            <button className="btn">
                                ПЕРЕЗВОНИТЬ
                            </button>
                        </form>*/}
                        <Cons
                            type={'fundament'}
                            state={this.state.formCons}
                            notification={this.props.isNotification}
                            formClick={this.sendFormGetIdea.bind(this)}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isGetIdeaNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({orderSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
