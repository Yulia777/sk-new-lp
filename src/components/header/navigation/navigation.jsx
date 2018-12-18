import React, { Component } from 'react';

class Navigation extends Component{

    render() {
        return(
            <nav className="nav__wrap">
                <div className="nav">
                    <div className="nav__item">
                        <a href="#shinomontazh">Шиномонтаж</a>
                    </div>
                    <div className="nav__item">
                        <a href="#shini">Шины/диски</a>
                    </div>
                    <div className="nav__item">
                        <a href="#otzivi">Отзывы</a>
                    </div>
                    <div className="nav__item">
                        <a href="#sklad">Хранение шин</a>
                    </div>
                    <div className="nav__item">
                        <a href="#adresa">Адреса</a>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Navigation;