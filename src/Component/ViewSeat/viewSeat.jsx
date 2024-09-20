import React from 'react';
import { FaUser } from 'react-icons/fa'; // Human icon

const seats = [
  { id: 1, status: 'available' },
  { id: 2, status: 'booked' },
  { id: 3, status: 'blocked' },
  { id: 4, status: 'available' },
  { id: 5, status: 'booked' },
  // Add more seat objects as needed
];

const seatStyles = {
  available: 'bg-red-500',
  booked: 'bg-green-500',
  blocked: 'bg-white border-2 border-red-500 flex items-center justify-center'
};

const ViewSeat = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Select a Seat</h2>
      <div className="grid grid-cols-5 gap-4">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`w-16 h-16 flex items-center justify-center text-white rounded ${seatStyles[seat.status]}`}
          >
            {seat.status === 'blocked' && <FaUser className="text-red-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewSeat;
