import React from 'react';
import MaskedInput from 'react-maskedinput';

const FormMini = (props) => {
    const { send } = props;
    return(
        <div className="form-blank__wrap">
            <form className="form-blank" id="form-3d" onSubmit={send}>
                <img src="./images/sk/esciz.jpg" alt="эскиз"/>
                <div className="wrapper">
                    <input className="form-blank__field" type="text" placeholder={'Имя*'} name="name" id="form-3d__name"/>
                    <MaskedInput id="form-3d__phone" mask="+7(111) 111 11 11" type="text" placeholder={'Телефон*'} size={''} name="phone" required="true" className="form-blank__field"/>
                    <input className="btn" type="submit" value="ОСТАВИТЬ ЗАЯВКУ"/>
                </div>
            </form>
        </div>
    )
};

export default FormMini;