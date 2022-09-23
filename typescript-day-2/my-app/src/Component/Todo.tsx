import { title } from 'process';
import React, { useState } from 'react';
import Header from './Header';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export interface ITodoItem{
    id:number;
    title:string;
    status:boolean;
}
const Todo = () => {
    const [todos,setTodos]=useState<ITodoItem[]>([])

    const handleAdd=(title:string)=>{
        const payload={
            id:todos.length+1,
            title,
            status:false,
        }
        setTodos([...todos,payload])
    }
console.log(todos)
    return (
        <div>
            <Header label='Todos'/>
                <TodoInput handleAdd={handleAdd}/>
                {
                    todos.length>0 && todos.map(item=>{
                        return <TodoItem key={item.id} {...item} />
                    })
                }
        </div>
    );
};

export default Todo;