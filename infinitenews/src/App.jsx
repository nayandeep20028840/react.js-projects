import React, { Component } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<News key='general' country='in' category='general'/>}/>
                    </Routes>
                </Router>
            </>
        );
    }
}
