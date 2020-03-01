import React from 'react';

import './Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <h1 className="Header__logo">
                    <img src="https://www.placecage.com/c/300/70" alt="Company Beta" />
                </h1>

                <nav className="Header__nav">
                    <ul>
                        <li>
                            <a href="">Strona główna</a>
                        </li>
                        <li>
                            <a href="">Archiwum</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}