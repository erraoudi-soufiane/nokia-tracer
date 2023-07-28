import React from 'react'
import { useDrag } from 'react-dnd';

function DraggableComponent({component, style}) {

    const [{isDragging}, drag] = useDrag({
        type: 'image', 
        item: { url: component.url, id: component.id}, 
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
    if (style) {
      return <button style={style} >
      {component.url}
    </button>
    }
  return (
    <button ref={drag} className="draggable-component" >
    {component.url}
  </button>
);
}

export default DraggableComponent