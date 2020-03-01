import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import './App.scss';
import axios from 'axios';
import { PostList } from '../PostList/PostList';
import { PostDetails } from '../PostDetails/PostDetails';
import { PostCreate } from '../PostCreate/PostCreate';

//window.axios = axios;

export class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <main>
                        <Header />


                        <Switch>
                            <Route path="/" exact component={PostList} />
                            <Route path="/posts/create" component={PostCreate} />
                            <Route path="/posts/:id" component={PostDetails}   />
                            
                    
                        </Switch>
                    </main>

                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}