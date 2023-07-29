import React, { useRef, useState } from "react";
import DraggableComponent from "../tools/components/DraggabeComponent";
import Connection from "../tools/components/Connection";

function DrawingSpace({ board }) {
  const [isCreatingConnection, setIsCreatingConnection] = useState(false); // Whether the user is creating a connection
  const [connectionStart, setConnectionStart] = useState(null); // Start position of the connection
  const [connectionEnd, setConnectionEnd] = useState(null); // End position of the connection
  const [connections, setConnections] = useState([]); // List of connections

  const handleDropPosition = (dropPosition) => {
    const canvasPosition = {
      x: dropPosition.x,
      y: dropPosition.y,
    };
    console.log(dropPosition);
    return canvasPosition;
  };

  const handleMouseMove = (event) => {
    if (isCreatingConnection) {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;
      setConnectionEnd({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseUp = () => {
    if (isCreatingConnection && connectionStart && connectionEnd) {
      setConnections((prevConnections) => [
        ...prevConnections,
        { start: connectionStart, end: connectionEnd },
      ]);
      setIsCreatingConnection(false);
      setConnectionStart(null);
      setConnectionEnd(null);
    }
  };

  return (
    <div
      className="drawingSpace"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {board.map((component, index) => {
        return (
          <DraggableComponent
            setIsCreatingConnection={setIsCreatingConnection}
            setConnectionStart={setConnectionStart}
            style={{
              position: "absolute",
              left: `${handleDropPosition(component.dropPosition).x}px`,
              top: `${handleDropPosition(component.dropPosition).y}px`,
            }}
            key={index}
            component={component}
          />
        );
      })}

      {connections.map((connection, index) => (
        <Connection
          key={index}
          startX={connection.start.x}
          startY={connection.start.y}
          endX={connection.end.x}
          endY={connection.end.y}
        />
      ))}
    </div>
  );
}

export default DrawingSpace;
