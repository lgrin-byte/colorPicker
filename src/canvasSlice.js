import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  dots: [],
  lines: [],
  currentColor: '#000000', 
};


const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    addDot: (state, action) => {
      state.dots.push({ x: action.payload.x, y: action.payload.y, color: state.currentColor });
    },
    addLine: (state, action) => {
      state.lines.push({ start: action.payload.start, end: action.payload.end, color: state.currentColor });
    },
    setColor: (state, action) => {
      state.currentColor = action.payload;
    },
  },
});

export const { addDot, addLine, setColor } = canvasSlice.actions;
export default canvasSlice.reducer;
