import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const booking = () => {
    const [tripType, setTripType] = useState('one-way');
  const [departureState, setDepartureState] = useState('');
  const [departureStateName, setDepartureStateName] = useState('');
  const [departureStateTerminal, setDepartureStateTerminal] = useState('');
  const [terminal, setTerminal] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [destinationName, setDestinationName] = useState([]);

  const [states, setStates] = useState([]);
  const [stateId, setStateId] = useState('');
  const [terminals, setTerminals] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [destinationTerminal, setDestinationTerminal] = useState([]);

  const navigate = useNavigate(); // Hook to handle navigation

   // Fetch states from the API when the component mounts
   useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get('http://localhost:1000/states');
        setStates(response.data);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

    // Fetch terminals based on selected state
  useEffect(() => {
    if (departureState) {
      const fetchTerminals = async () => {
        try {
          const response = await axios.get(`http://localhost:1000/terminals/${stateId}`);
          setTerminals(response.data);
          setDestination(''); // Reset destination when state changes
        } catch (error) {
          console.error('Error fetching terminals:', error);
        }
      };

      fetchTerminals();
    }
  }, [departureState]);

    // Fetch destinations based on selected terminal
  useEffect(() => {
    if (terminal) {
      const fetchDestinations = async () => {
        try {
          const response = await axios.get(`http://localhost:1000/terminals`);
          setDestinations(response.data);
        } catch (error) {
          console.error('Error fetching destinations:', error);
        }
      };

      fetchDestinations();
    }
  }, [terminal]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to TripSelection page with form data
    navigate('/trip-selection', {
      state: {
        tripType,
        departureState,
        departureStateName,
        terminal,
        departureStateTerminal,
        destination,
        destinationName,
        destinationTerminal,
        date,
        adults,
        children,
      },
    });
  };

  return (
    <div className="w-full mx-0 p-0">
  <div className="">
    {/* Form container */}
    <div className=" mx-auto ml-5 mb-2 mt-2 bg-white bg-opacity-80 rounded-lg shadow-lg md:mt-8 mr-4 md:mr-8">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Book A Trip</h2>
      <form onSubmit={handleSubmit} class="booking-container">
        {/* Trip type selection */}
        <div className="flex justify-center mb-4">
          <label className="mr-4">
            <input
              type="radio"
              value="one-way"
              checked={tripType === 'one-way'}
              onChange={() => setTripType('one-way')}
            />
            One-way
          </label>
          <label>
            <input
              type="radio"
              value="round-trip"
              checked={tripType === 'round-trip'}
              onChange={() => setTripType('round-trip')}
            />
            Round Trip
          </label>
        </div>

        {/* Departure state and terminal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col text-center">
            <label className="block mb-2">Departure State</label>
            <select
              className="p-1 border rounded"
              value={departureState}
              onChange={(e) => {
                setDepartureState(e.target.value);
                setStateId(e.target.value);
                const stateOption = document.getElementById(e.target.value);
                const stateName = stateOption.dataset.state;
                setDepartureStateName(stateName);
              }}
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state._id} id={state._id} data-state={state.nameOfState} value={state._id}>
                  {state.nameOfState}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col text-center">
            <label className="block mb-2">Terminal</label>
            <select
              className="p-1 border rounded"
              value={terminal}
              onChange={(e) => {
                setTerminal(e.target.value);
                const stateTerminalOption = document.getElementById(e.target.value);
                const stateTerminalName = stateTerminalOption.dataset.terminal;
                setDepartureStateTerminal(stateTerminalName);
              }}
              disabled={!departureState}
            >
              <option value="">Select a terminal</option>
              {terminals.map((terminal) => (
                <option
                  key={terminal._id}
                  id={terminal._id}
                  data-terminal={terminal.nameOfTerminal}
                  value={terminal._id}
                >
                  {terminal.nameOfTerminal}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Destination and date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col text-center">
            <label className="block mb-2">Destination</label>
            <select
              className="p-1 border rounded"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                const destinationName = document.getElementById(e.target.value).dataset.name;
                setDestinationName(destinationName);
                setDestinationTerminal(document.getElementById(e.target.value).dataset.departureTerminal);
              }}
              disabled={!terminal}
            >
              <option value="">Select a destination</option>
              {destinations.map((dest) => (
                <option
                  key={dest._id}
                  id={dest._id}
                  value={dest._id}
                  data-departure-terminal={dest.nameOfTerminal}
                  data-name={dest.state_id.nameOfState + ' - ' + dest.nameOfTerminal}
                >
                  {dest.state_id.nameOfState + ' - ' + dest.nameOfTerminal}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col text-center">
            <label className="block mb-2">Date (YYYY-MM-DD)</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              dateFormat="yyyy-MM-dd"
              className="p-1 border rounded w-full"
            />
          </div>
        </div>

        {/* Number of adults and children */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
          <div className="flex flex-col text-center">
            <label className="block mb-2">No. of Adults</label>
            <select
              className="p-1 border rounded"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="flex flex-col text-center">
            <label className="block mb-2">Children (Age 2-10)</label>
            <select
              className="p-1 border rounded"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 mt-2 mb-1 rounded hover:bg-blue-700"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default booking