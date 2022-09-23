import React from 'react';
import {ITodoItem} from "./Todo"
const TodoItem = ({id,title,status}:ITodoItem) => {
    return (
        <div>
            <span>{title}</span>
            <span>{status ?"False" : "True"}</span>
        </div>
    );
};

export default TodoItem;