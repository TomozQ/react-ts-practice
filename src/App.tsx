import React, { useState } from 'react';
import TodoList from './components/Todolist';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

// function App() {
//   return (
//     <div className="App"></div>
//   );
// }

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), text: text}
    ])
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
