import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import DraggableComponent from '../tools/components/DraggabeComponent';



function DrawingSpace({board})  {

  const canvasRef = useRef(null);

  const handleDropPosition = (dropPosition) => {
    const canvasPosition = {
      x: dropPosition.x - canvasRef.current.offsetLeft,
      y: dropPosition.y - canvasRef.current.offsetTop,
    };
    console.log(canvasRef.current.offsetTop);
    console.log(canvasRef.current.offsetLeft);
    console.log(dropPosition);
    return canvasPosition;
  }

  return (
    <div ref={canvasRef} className="drawingSpace">
        {board.map((component, index) => {
          return <DraggableComponent 
          style={{
            position: 'absolute',
            left:`${handleDropPosition(component.dropPosition).x}px`,
            top: `${handleDropPosition(component.dropPosition).y}px`,
            cursor: 'move'
          }}
          key={index} component={component}/>
        })}
    </div>
  );
};

export default DrawingSpace
