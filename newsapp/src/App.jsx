import './App.css';
import React, { Component } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import process from 'process';

export default class App extends Component {
    pageSize = 6;
    state = {
        progress: 0
    }
    setProgress = (progress) => {
        this.setState({ progress: progress });
        apiKey = process.env.REACT_APP_NEWS_API
    }
    render() {
        return (
            <>
                <Router>
                    <NavBar />
                    <LoadingBar
                        color='#f11946'
                        progress={this.state.progress}
                        height={3}
                    />
                    <Routes>
                        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general" />} />   
                        <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} category="business" />} />
                        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category="entertainment" />} />
                        <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general" />} />
                        <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} category="health" />} />
                        <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} category="science" />} />
                        <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category="sports" />} />
                        <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category="technology" />} />
                    </Routes>
                </Router>
            </>
        );
    }
}