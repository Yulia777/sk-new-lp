import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {callbackSuccess, sendEmail} from "../../../actions/actions";
import Popup from '../../elements/popup/popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formDataProcessing } from './../../../utils/ajax';

class Examples extends Component{

    constructor(props) {
        super(props);
        this.state = {
            popupOrderExample: false,
            popupKnowFundament: false
        };
    }

    sendFormGetIdea(event) {
        event.preventDefault();
        const formData = {
            type: 'blank',
            name: event.target.name.value,
            phone: event.target.phone.value
        };

        formDataProcessing('Зафиксировать скидку до 30%', formData.name, formData.phone)
            .then(json => {
                console.log(json);
                this.props.sendEmail(formData);
                this.props.callbackSuccess(true);
                yaCounter21935674.reachGoal('zafiksirovat-skidku-na-fundament-submit');
                event.target.name.value = '';
                event.target.phone.value = '';
            });
        this.props.callbackSuccess(true);
    }

    openPopupExamples() {
        this.setState({popupOrderExample: true});
        yaCounter21935674.reachGoal('zafiksirovat-skidku-na-fundament-form');
    }
    closePopupExamples() {
        this.setState({popupOrderExample: false});
        this.props.callbackSuccess(false);
    }

    openPopupKnowFundament() {
        this.setState({popupKnowFundament: true});
    }
    closePopupKnowFundament() {
        this.setState({popupKnowFundament: false});
        this.props.orderSuccess(false);
    }

    render() {
        return(
            <section className="examples">
                <div className="order">
                    <h2 className="order__title">
                        ЗАФИКСИРУЙ СКИДКУ <span>ДО 30%</span><br/>
                        НА СТРОИТЕЛЬСТВО ФУНДАМЕНТА
                    </h2>
                    <button className="examples__btn" onClick={this.openPopupExamples.bind(this)}>
                        <p>
                            <FontAwesomeIcon icon="check" />
                        </p>
                        <p>
                            ЗАФИКСИРОВАТЬ СКИДКУ ДО 30%
                        </p>
                    </button>
                    <p onClick={this.openPopupKnowFundament.bind(this)} className="order__link">
                        УЗНАТЬ ПОДРОБНЕЕ
                    </p>
                </div>
                <Popup
                    title={'Зафиксировать скидку до 30%'}
                    area={'popup-form'}
                    state={this.state.popupOrderExample}
                    close={this.closePopupExamples.bind(this)}
                    type={'blank'}
                    notification={this.props.isNotification}
                    formClick={this.sendFormGetIdea.bind(this)}
                />
                <Popup
                    area={'popup-form form-examples'}
                    state={this.state.popupKnowFundament}
                    close={this.closePopupKnowFundament.bind(this)}
                    type={'fundament'}
                    notification={this.props.isNotification}
                />
            </section>
        )
    }
}

export function mapStateToProps(store) {
    return {
        isNotification: store.mainReducer.isCallbackNotification
    }
}

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({callbackSuccess, sendEmail}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Examples);
