import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormCons = (props) => {
    const { send } = props;
    return(
        <form className="questions__form" id="specialists" onSubmit={send}>
            <input type="text" placeholder="Как Вас зовут?" name="name" className="field" id="specialists-name"/>
            <MaskedInput id="specialists-phone" mask="+7(111) 111 11 11" type="text"
                         placeholder={'Введите Ваш телефон*'} size={''}
                         name="phone" className="field"/>
            {/*<input type="text" placeholder="Введите Ваш телефон" className="field"/>*/}
            <input type="text" placeholder="Введите Ваш Email" name="email" className="field" id="specialists-email"/>
            {/*<button className="btn">
                ПЕРЕЗВОНИТЬ
            </button>*/}
            <input className="btn" type="submit" value="ПЕРЕЗВОНИТЬ"/>
        </form>
    )
};

export default FormCons;