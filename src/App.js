import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import  store  from './store';

import Posts from './components/posts';
import PostForm from './components/postform';



class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>

                        <a className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer">
                            Learn React
                        </a>
                    </header>
                    <PostForm/>
                    <hr/>
                    <Posts/>
                </div>
            </Provider>
        );
    }
}

export default App;
