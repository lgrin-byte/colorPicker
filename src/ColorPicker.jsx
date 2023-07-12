import React from 'react';
import { useDispatch } from 'react-redux';
import { setColor } from './canvasSlice';
import './style.css';


const ColorPicker = () => {
  const dispatch = useDispatch();
  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF'];
  
  const handleClick = (color) => {
    dispatch(setColor(color));
  };


  return (
    <div class="palette">
      {colors.map((color) => (
        <button style={{ backgroundColor: color }} onClick={() => handleClick(color)} />
      ))}
    </div>
  );
};

export default ColorPicker;