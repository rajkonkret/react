import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './App.scss';

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <main>
                    <Header />
                    {this.props.children}
                </main>

                <Footer />
            </div>
        )
    }
}