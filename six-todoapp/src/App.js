import React, {useReducer} from 'react';

import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import TodoContext from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm from './component/TodoForms';
import Todos from './component/Todos';

const App = () =>{
  const [todos, dispatch] = useReducer(todoReducer,[]);
  return (
    <TodoContext.Provider value = {{todos,dispatch}}>
      <Container fluid>
        <h1>Todo app with conext API</h1>
        
        <TodoForm/>
        <Todos/>
      </Container>

    </TodoContext.Provider>
  )
}

export default App;
