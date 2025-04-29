// redux/travelSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: 1,
      title: 'Rameshwaram Adventure',
      description: 'Enjoy scenic beauty and spiritual vibes.',
      image: '/image (11).png',
      type: 'Adventure',
      price: 3500,
    },
    {
      id: 2,
      title: 'Kedarnath Family Trip',
      description: 'Ideal family spiritual retreat in the Himalayas.',
      image: '/image (11).png',
      type: 'Family',
      price: 4500,
    },
    {
      id: 3,
      title: 'Tirupati Honeymoon Package',
      description: 'Peaceful romantic getaway with temple visits.',
      image: '/image (11).png',
      type: 'Honeymoon',
      price: 3000,
    },
  ],
};

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {},
});

export default travelSlice.reducer;
