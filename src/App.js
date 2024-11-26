import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  pageSize = 9;
  country = 'us';

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey = {this.apiKey} setProgress = {this.setProgress}  key="General" pageSize = {this.pageSize} country = {this.country} category="General" />}/>
            <Route exact path="/business" element={<News apiKey = {this.apiKey} setProgress = {this.setProgress}  key="Business" pageSize = {this.pageSize} country = {this.country} category="Business" />}/>
            <Route exact path="/technology" element={<News apiKey = {this.apiKey} setProgress = {this.setProgress}  key="Technology" pageSize = {this.pageSize} country = {this.country} category="Technology" />}/>
            <Route exact path="/entertainment" element={<News apiKey = {this.apiKey} setProgress = {this.setProgress}  key="Entertainment" pageSize = {this.pageSize} country = {this.country} category="Entertainment" />}/>
            <Route exact path="/health" element={<News apiKey = {this.apiKey} setProgress = {this.setProgress}  key="Health" pageSize = {this.pageSize} country = {this.country} category="Health" />}/>
            <Route exact path="/science" element={<News apiKey = {this.apiKey} setProgress = {this.setProgress}  key="Science" pageSize = {this.pageSize} country = {this.country} category="Science" />}/>
            <Route exact path="/sports" element={<News apiKey = {this.apiKey} setProgress = {this.setProgress}  key="Sports" pageSize = {this.pageSize} country = {this.country} category="Sports" />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}