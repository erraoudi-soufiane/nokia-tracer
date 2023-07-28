import React, { useState } from 'react'
import "./Workspace.css"
import Tools from './tools/Tools'
import DrawingSpace from './drawingSpace/DrawingSpace'
import { useDrop } from 'react-dnd'


function Workspace() {

  const [board, setBoard] = useState([]); // list of components on board

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item, monitor) => {
      const dropPosition = monitor.getClientOffset();
      addImageToBoard(item.url, item.id, dropPosition)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (url, id, dropPosition) => {
    setBoard((board) => [...board,{url, id, dropPosition}])
    console.log('component added to board')
  };

  return (

    <div className='workspace'>
      <div className="workspace__tools">
        <Tools />
      </div>

      <div ref={drop} className="drawingSpace">
        <DrawingSpace board={board} />
      </div>
    </div>
  )
}

export default Workspace