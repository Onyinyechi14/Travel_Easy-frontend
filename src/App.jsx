import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/home';
import TripSelection from './Component/tripSelection/tripSelection';
import PriceCalculator from './Component/Price/priceCalculator';
import ViewSeat from './Component/ViewSeat/viewSeat';
import Footer from './Component/Footer/footer';
import BodySection from './Component/bodySection/body';
import Booking from './Component/Booking/booking';
import Services from './Component/Services/service';
import About from './Component/About/about';
import Contact from './Component/Contact/contact';



function Layout() {
  const location = useLocation(); // Get the current location

  return (
    <>
       {location.pathname === '/' && <BodySection />}
      
    </>
    
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mx-0 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip-selection" element={<TripSelection />} />
          <Route path="/calculate-price" component={PriceCalculator} />
          <Route path="/view-seats" element={<ViewSeat />} />
          <Route path='/bookings' element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Layout />
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;


