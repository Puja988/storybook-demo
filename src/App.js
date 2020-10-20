import React, {useState} from 'react';
import TodoContainer from './TodoContainer';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("")
  }

  return (
    <div className="App">
      <h1>Hello World</h1> 
      <form>
        <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
        <button disabled={!input} type="submit" onClick={addTodo}>Add todo</button>
      </form>

      <TodoContainer todos={todos} />
    </div>
  );
}

export default App;
