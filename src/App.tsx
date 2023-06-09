import React from 'react';
import './App.css';
import {Header} from "antd/es/layout/layout";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
import {Footer} from "./components/Footer";


function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
