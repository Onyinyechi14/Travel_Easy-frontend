import React, { useState } from 'react';
import axios from 'axios';

const PriceCalculator = () => {
  const [departureTerminal, setDepartureTerminal] = useState('');
  const [destinationTerminal, setDestinationTerminal] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/prices/calculated', {
        departureTerminal,
        destinationTerminal,
        basePrice,
        vehicleCapacity,
      });

      setCalculatedPrice(response.data.calculatedPrice.totalPrice);
    } catch (error) {
      console.error('Error calculating price', error);
      alert('There was an error calculating the price');
    }
  };

  return (
    <div>
      <h2>Calculate Price</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Departure Terminal:</label>
          <input
            type="text"
            value={departureTerminal}
            onChange={(e) => setDepartureTerminal(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Destination Terminal:</label>
          <input
            type="text"
            value={destinationTerminal}
            onChange={(e) => setDestinationTerminal(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Base Price:</label>
          <input
            type="number"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Vehicle Capacity:</label>
          <input
            type="number"
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate Price</button>
      </form>

      {calculatedPrice && (
        <div>
          <h3>Calculated Price: {calculatedPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default PriceCalculator;
