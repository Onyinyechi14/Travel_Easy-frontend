import axios from 'axios';

const API_URL = 'http://localhost:1000/users';

// export const registerUser = async (fullName, phoneNumber, email, password) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, { fullName, phoneNumber, email, password });
//     console.log(response);
    
//   } catch (error) {
//     throw error;
//   }
// };




export const registerUser = async (fullName, email, password, phoneNumber) => {
  try {
    // Log the request body to see what is being sent
    console.log('Sending registration data:', { fullName, email, password, phoneNumber });

    // Make the POST request to the register endpoint
    const response = await axios.post(`${API_URL}/register`, {
      fullName,
      email,
      password,
      phoneNumber
    });

    // Log the successful response
    console.log('Registration successful:', response.data);
    
    return response.data; // Return the response if you need to use it

  } catch (error) {
    // Check if the error is a response error from the server
    if (error.response) {
      // Log the full error response
      console.error('Server responded with an error:', error.response.data);
      throw new Error(error.response.data.message || 'Registration failed');
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from the server:', error.request);
      throw new Error('No response from the server, please try again.');
    } else {
      // Something else caused the error
      console.error('Error during registration:', error.message);
      throw new Error('An error occurred during registration. Please try again.');
    }
  }
};
















export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
