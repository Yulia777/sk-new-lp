import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormEmail = (props) => {
  const { send } = props;
    return(
        <div className="form-blank__wrap">
            <form className="form-blank" id="form-price2018" onSubmit={send}>
                <input className="form-blank__field"
                       id="form-price2018__email" type="text" placeholder={'Имя'} name="name"/>
                <MaskedInput  mask="+7(111) 111 11 11" type="text" placeholder={'Номер телефона *'} size={''} name="phone"
                              id="form-price2018__phone" required="true" className="form-blank__field"/>
                <input className="btn" type="submit" value="ЗАБРОНИРОВАТЬ"/>
            </form>
        </div>
    )
};

export default FormEmail;