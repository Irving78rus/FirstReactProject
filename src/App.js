import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Auto from './components/Auto';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Taxi from './components/Taxi';
import Ticket from './components/Ticket';
import Footer from './Footer';


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper' >
                <Header />
                <Navbar />
                <div className='content'>
                    <img src='https://million-wallpapers.ru/wallpapers/4/23/14156658958000687540/kurortnyj-gorodok-na-beregu-morskogo-poberezhya.jpg' />
                    <Route path="/profile" component={Profile} />
                    <Route path="/ticket" component={Ticket} />
                    <Route path="/auto" component={Auto} />
                    <Route path="/taxi" component={Taxi} />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>)
}

export default App;