import React from 'react'
import { useDrag } from 'react-dnd';

function DraggableComponent({component, style, setIsCreatingConnection, setConnectionStart}) {

    const [{isDragging}, drag] = useDrag({
        type: 'image', 
        item: { url: component.url, id: component.id}, 
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
    });

    const handleDeviceClick = (deviceId, position) => {
      setIsCreatingConnection(true);
      setConnectionStart({ deviceId, position});
    };

    if (style) {
      return <button style={style} onClick={handleDeviceClick(component.id, component.dropPosition)}>
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