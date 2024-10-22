import React from 'react';
import TodoList from './TodoList';
import './App.css';  // Importa el archivo de estilos

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
