import React from 'react';
import './App.css';
import Layout from './Components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Tours from './Pages/Tours';
import TourDetails from './Pages/TourDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SearchResultList from './Pages/SearchResultList';
import ThankYou from './Pages/ThankYou';
import Services from './Components/Services/ServiceList';
import './styles/button-animations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
