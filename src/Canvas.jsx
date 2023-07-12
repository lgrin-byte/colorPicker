import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDot, addLine, setColor } from './canvasSlice';
import './style.css';

const Canvas = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef();
  const { dots, lines, currentColor } = useSelector(state => state.canvas);
  const isDrawing = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    for (let dot of dots) {
      context.beginPath();
      context.arc(dot.x, dot.y, 5, 0, 2 * Math.PI);
      context.fillStyle = dot.color;
      context.fill();
    }
    for (let line of lines) {
      context.beginPath();
      context.moveTo(line.start.x, line.start.y);
      context.lineTo(line.end.x, line.end.y);
      context.strokeStyle = line.color;
      context.stroke();
    }
  }, [dots, lines]);
  
  
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = e.nativeEvent;
    lastPoint.current = { x: offsetX, y: offsetY };
    dispatch(addDot({ x: offsetX, y: offsetY }));
  };
  
  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const { offsetX, offsetY } = e.nativeEvent;
    dispatch(addLine({ start: lastPoint.current, end: { x: offsetX, y: offsetY } }));
    lastPoint.current = { x: offsetX, y: offsetY };
  };
  
  const handleMouseUp = () => {
    isDrawing.current = false;
  };
  
  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      width={600}
      height={600}
      class="canvas"
    />
  );
};

export default Canvas;