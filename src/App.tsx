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

  const todoDeleteHandlar = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandlar} />
    </div>
  );
}

export default App;
