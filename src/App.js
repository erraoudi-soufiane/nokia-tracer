import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './App.css';
import Homepage from './Homepage';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Homepage />
      </div>
    </DndProvider>
  );
}

export default App;
