import React from 'react';
import FormCons from "../test/test";

const Cons = (props) => {
    const setForm = () => {
        if (props.type === 'fundament') {
            return (<FormCons send={props.formClick}/>)
        }
    };
    //console.log(props);
    if(props.state) {
        return(
            <section style={props.state ? {display: 'block'} : null}>
                <div className={props.area}>
                    {props.notification ? <h5 className={'popup-form__notification'}>Менеджер свяжется с Вами в ближайшее время</h5> : null}
                    {setForm()}
                </div>
            </section>
        )
    } else {
        return null;
    }
};

export default Cons;