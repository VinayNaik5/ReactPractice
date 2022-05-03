import { useState , useEffect } from 'react';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Todo from './components/Todos';
import TodoFrom from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect( ()=>{
    console.log("First use effect");
    const localTodos = localStorage.getItem("todos")
    console.log(localTodos,typeof localTodos);
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  },[]);

  const addTodos = async todo =>{
    setTodos([...todos,todo]);
  }


  useEffect( () => {
    console.log("Second useEffect");
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return(
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todo todos={todos} markComplete={markComplete}/>
      <TodoFrom addTodos={addTodos}/>
    </Container>   
  );
}

export default App;
