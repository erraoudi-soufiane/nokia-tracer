import React from 'react'
import { useDrag } from 'react-dnd';

function DraggableComponent({component, style}) {

    const [{isDragging}, drag] = useDrag({
        type: 'image', 
        item: { url: component}, 
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
    if (style) {
      return <button ref={drag} style={style} >
      {component}
    </button>
    }
  return (
    <button ref={drag} className="draggable-component" >
    {component}
  </button>
);
}

export default DraggableComponent