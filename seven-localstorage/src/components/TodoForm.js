import React, { useState } from "react";
import  {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button
} from "reactstrap";
import {v4} from "uuid";

const TodoFrom = ({addTodos}) =>{
    const [todoString , setTodoString] = useState('');
    
    const handleSubmit = e =>{
        e.preventDefault();
        if (todoString === '') {
            return alert("Please enter a todo")
        } 
        const todo = {
            todoString,
            id :v4()
        }
        addTodos(todo);
        setTodoString("");
    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input 
                    type="text" 
                    name="todo"
                    id="todo"
                    placeholder="Enter a todo"
                    value={todoString}
                    onChange={
                        e => setTodoString(e.target.value)
                    }/>
                    <Button 
                    color="warning"
                    >Add Todo</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoFrom;