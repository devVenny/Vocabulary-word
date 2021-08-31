import { Link } from "react-router-dom";
import React from 'react';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to="/">토익 영단어 (고급)</Link>
            </h1>

            <div className="header__menu">
                <button>단어추가</button>
                <button>Day 추가</button>
            </div>
        </header>
    )
}

export default Header;