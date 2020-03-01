import React from 'react';
import {Link} from 'react-router-dom';
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
                            <Link to="/">Strona główna</Link>
                        </li>
                        <li>
                            <Link to="/posts/create">Archiwum</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}