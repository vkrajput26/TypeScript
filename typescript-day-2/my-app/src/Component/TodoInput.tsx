import React, { useState } from 'react';


interface ITodoInputProps{
    handleAdd:(value:string)=>void
}


const TodoInput = ({handleAdd}:ITodoInputProps) => {
    const [text,setText]=useState<string>('')

    const changeHandler:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setText(e.target.value)
    }
    const clickHandler=()=>{
        if(text!==''){
            handleAdd(text)
        }
    }
    return (
        <div>
            <input type={"text"}  value={text} onChange={changeHandler}/>
            <button onClick={clickHandler}>ADD</button>
        </div>
    );
};

export default TodoInput;