//display all the list 
//mark things as complete
import React from "react";

import {
    ListGroup,
    ListGroupItem
} from "reactstrap";
import {FaCheckDouble} from "react-icons/fa"

const Todo = ({todos,markComplete}) =>{
    
    return(
        <ListGroup className="mt-5 mb-2 items">
            {
                todos.map( todo =>{
                    return (
                    <ListGroupItem key={todo.id}>
                        {todo.todoString}
                        <span className="float-right" onClick={() => markComplete(todo.id)}>
                            <FaCheckDouble/>
                        </span>
                    </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    )
}

export default Todo;