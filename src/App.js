import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const pageSize = 9;
  const country = 'us';

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="General" pageSize = {pageSize} country = {country} category="General" />}/>
          <Route exact path="/business" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="Business" pageSize = {pageSize} country = {country} category="Business" />}/>
          <Route exact path="/technology" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="Technology" pageSize = {pageSize} country = {country} category="Technology" />}/>
          <Route exact path="/entertainment" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="Entertainment" pageSize = {pageSize} country = {country} category="Entertainment" />}/>
          <Route exact path="/health" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="Health" pageSize = {pageSize} country = {country} category="Health" />}/>
          <Route exact path="/science" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="Science" pageSize = {pageSize} country = {country} category="Science" />}/>
          <Route exact path="/sports" element={<News apiKey = {apiKey} setProgress = {setProgress}  key="Sports" pageSize = {pageSize} country = {country} category="Sports" />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;