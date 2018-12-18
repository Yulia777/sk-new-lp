import React from 'react';
import FormBlank from "../forms/form-blank/form-blank";
import FormEmail from "../forms/form-email/form-email";
import FormMini from '../forms/form-mini/form-mini';
import PopupKnow from '../popup-know-more/popup-know-more';
import PopupKnowFundament from '../popup-know-more/popup-know-more-fundament';

const Popup = (props) => {
    const setForm = () => {
        if (props.type === 'blank') {
            return (<FormBlank send={props.formClick}/>)
        } else if(props.type === 'email') {
            return <FormEmail send={props.formClick}/>
        } else if(props.type === 'mini') {
            return <FormMini send={props.formClick}/>
        }
        else if(props.type === 'know') {
            return <PopupKnow/>
        }
        else if(props.type === 'fundament') {
            return <PopupKnowFundament/>
        }
    };
    //console.log(props);
    if(props.state) {
        return(
            <section className={'popup-overlay'} style={props.state ? {display: 'block'} : null}>
                <div className={props.area}>
                    <div className="popup-form__close" onClick={props.close}>&times;</div>
                    <p>{props.title}</p>
                    {props.notification ? <h5 className={'popup-form__notification'}>Менеджер свяжется с Вами в ближайшее время</h5> : null}
                    {setForm()}
                </div>
            </section>
        )
    } else {
        return null;
    }
};

export default Popup;