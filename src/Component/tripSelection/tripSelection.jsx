import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { registerUser, loginUser } from '../../Component/Users/users';
import { useSnackbar } from 'notistack';

const TripSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar()

  const [calculatedPrice, setCalculatedPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  // const [showTravellerDetailModal, showTravellerDetailModal] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showTravelerForm, setShowTravelerForm] = useState(false); // New state for traveler form
  const [travelerDetails, setTravelerDetails] = useState({});


  // State for login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // State for registration
  const [fullName, setFullName] = useState('');
  const [email, setRegisterEmail] = useState('');
  const [password, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // State for traveler and kin details
  const [kinsName, setKinsName] = useState('');
  const [kinsAddress, setKinsAddress] = useState('');
  const [kinsPhone, setKinsPhone] = useState('');



  const {
    tripType = 'one-way',
    // departureState,
    departureStateName,
    departureStateTerminal,
    destinationTerminal,
    // destination = 'unknown',
    destinationName = 'Unknown',
    date = new Date(),
    adults = 1,
    children = 0,
  } = location.state || {};

  useEffect(() => {
      const fetchCalculatedPrice = async () => {
      setLoading(true); // Start loading indicator
      try {
        const response = await axios.get(`https://traveleasy-backend.onrender.com/price/${departureStateTerminal}/${destinationTerminal}`);
        console.log(`Departure: ${departureStateTerminal}; Destination: ${destinationTerminal}`);
        console.log('Response data:', response.data);
    
        // Make sure response contains the calculated price
        if (response.data && response.data.basePrice) {
          const childPrice = children ? ((3/100) * response.data.basePrice) * children : 0;
          const totalPrice = (response.data.basePrice * adults ) + childPrice;
          await setCalculatedPrice(totalPrice);
          console.log('Calculated price:', totalPrice);
        } else {
          setCalculatedPrice('N/A');
        }
      } catch (error) {
        console.error('Error fetching calculated price:', error);
        setCalculatedPrice('N/A');
      } finally {
        setLoading(true); // Stop loading indicator
      }
    };
    




    fetchCalculatedPrice();
  }, [departureStateTerminal, destinationName]);



  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSeat(null);
  };

  const handleShowTravellerDetailModal = () => {
    setShowModal(false);
    setSelectedSeat(null);
    setShowTravelerForm(true);
  };

  const handleSeatClick = (index) => {
    setSelectedSeat(index);
  };

  const handleContinue = () => {
    if (selectedSeat !== null) {
      console.log(`Selected seat: ${selectedSeat}`);
      setShowModal(false); // Close the seat selection modal
      setShowLoginModal(true); // Show the login modal
      setShowTravelerForm(false); // Show traveler form after successful login
    }
  };
  
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(loginEmail, loginPassword);
      localStorage.setItem('token', token);
      setShowLoginModal(false);
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      await registerUser(fullName, email, password, phoneNumber);
      setShowRegisterForm(false); // Hide register form
      setShowLoginModal(false);  // Optionally hide login modal
      setShowTravelerForm(true); // Show traveler form after successful login
      // enqueueSnackbar('Booking successful', {variant: 'success'})
      // navigate('/')
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleTravelerDetailsChange = (e) => {
    const { name, value } = e.target;
    setTravelerDetails({ ...travelerDetails, [name]: value });
  };


  const handleTravelerFormSubmit = (e) => {
    e.preventDefault();
    console.log(travelerDetails); // You can send this data to the server
    enqueueSnackbar('Booking successful, proceed to make payment.', { variant: 'success' });
    // Redirect to payment page or next step
    navigate('/'); // Assuming you have a payment route
  };

  return (
    <div className="container mx-auto p-6">
      {/* Display the selected trip details */}
      <div className="mb-8 p-4 bg-gray-100 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Trip Selection</h2>
        <p><strong>Trip Type:</strong> {tripType}</p>
        <p><strong>Departure State:</strong> {departureStateName + ' - ' + departureStateTerminal}</p>
        <p><strong>Destination:</strong> {destinationName}</p>
        <p><strong>Date:</strong> {date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()}</p>
        <p><strong>No. of Adults:</strong> {adults}</p>
        <p><strong>No. of Children:</strong> {children}</p>
      </div>

      {/* Trip Selection Card */}
      <div className="p-6 bg-white shadow-lg rounded-lg flex gap-4">
        {/* Left: Bus Image */}
        <div className="w-1/4">
          <img
            src="https://guotransport.com/images/vehicles/hiace.png"
            alt="Bus"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Center: Trip Info */}
        <div className="w-1/2">
          <h3 className="text-xl font-bold mb-2">Trip Information</h3>
          <p><strong>Departure Terminal:</strong> {departureStateName + ' - ' + departureStateTerminal}</p>
          <p><strong>Destination Terminal:</strong> {destinationName}</p>
        </div>

        {/* Right: Time, Fare, and View Seat */}
        <div className="w-1/4 text-right">
          <p className="text-xl font-bold mb-2">7:30 AM</p>
          <p className="text-lg mb-4">
            {`Bus Fare: ₦${calculatedPrice}`}
            {/* {loading ? 'Calculating Fare...' : `Bus Fare: ₦${calculatedPrice}`} */}
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleShowModal}
          >
            View Seat
          </button>
        </div>
      </div>

      {/* Modal for Seat View */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
          <button
              className="absolute top-2 right-2 text-gray-700 font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">Seat Availability</h3>

            {/* Color Legend */}
            <div className="mb-4">
              <p><strong>Seat Legend:</strong></p>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
                <span>Booked</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white border-2 border-red-500 rounded-full mr-2">
                  <span className="text-red-500">🧑</span>
                </div>
                <span>Blocked</span>
              </div>
            </div>

            {/* Display seats */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              {[...Array(18).keys()].map((index) => (
                <div
                  key={index}
                  className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer ${
                    selectedSeat === index ? 'bg-blue-500 text-white' : index % 3 === 0 ? 'bg-red-500' : index % 3 === 1 ? 'bg-green-500' : 'bg-white border-2 border-red-500'
                  }`}
                  onClick={() => handleSeatClick(index)}
                >
                  {index % 3 === 0 && <span>🧑</span>}
                  {index + 1}
                </div>
              ))}
            </div>

            {/* Show Continue button only if a seat is selected */}
            {selectedSeat !== null && (
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={handleContinue}
              >
                Continue
              </button>
            )}
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 ml-8 rounded hover:bg-red-700"
              onClick={handleCloseModal}
            >
              Close
            </button>
            
            <button
              className="mt-4 bg-slate-500 text-white px-4 py-2 ml-8 rounded hover:bg-red-700"
              onClick={handleShowTravellerDetailModal}
            >
              Continue Without Login
            </button>
          </div>
        </div>
      )}

      {/* Modal for Login */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">
          <button
              className="absolute top-2 right-2 text-gray-700 font-bold"
              onClick={() => setShowLoginModal(false)}
            >
              &times;
            </button>
            {showRegisterForm ? (
              <form onSubmit={handleRegisterSubmit}>
                <h3 className="text-2xl font-bold mb-4">Register</h3>
                <label className="block mb-2">Full Name:</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Phone Number:</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Register
                </button>

                <button
                  type="button"
                  onClick={() => setShowRegisterForm(false)}
                  className="ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Back to Login
                </button>
              </form>
            ) : (
              <form onSubmit={handleLoginSubmit}>
                <h3 className="text-2xl font-bold mb-4">Login</h3>
                <label className="block mb-2">Email:</label>
                <input
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Password:</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowRegisterForm(true)}
                  className="ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      )}

          {/* Traveler Details Form */}
          {showTravelerForm && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2">

              <button
              className="absolute top-2 right-2 text-gray-700 font-bold"
              onClick={() => setShowTravelerForm(false)}
            >
              &times;
            </button>
              <h3 className="text-2xl font-bold mb-2 mt-32">Traveler Details</h3>
              <form onSubmit={handleTravelerFormSubmit}>
                <label className="block mb-2">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={travelerDetails.fullName}
                  onChange={handleTravelerDetailsChange}
                  required
                  className="mb-2 p-2 border rounded w-full"
                />
                <label className="block mb-2">Phone Number:</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={travelerDetails.phoneNumber}
                  onChange={handleTravelerDetailsChange}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Kin's Name:</label>
                <input
                  type="text"
                  name="kinName"
                  value={travelerDetails.kinName}
                  onChange={handleTravelerDetailsChange}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Kin's Address:</label>
                <input
                  type="text"
                  name="kinAddress"
                  value={travelerDetails.kinAddress}
                  onChange={handleTravelerDetailsChange}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <label className="block mb-2">Kin's Phone:</label>
                <input
                  type="text"
                  name="kinPhone"
                  value={travelerDetails.kinPhone}
                  onChange={handleTravelerDetailsChange}
                  required
                  className="mb-4 p-2 border rounded w-full"
                />
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
              </form>
              </div>
              </div>
        )}
    </div>
    
  );
};

export default TripSelection;
