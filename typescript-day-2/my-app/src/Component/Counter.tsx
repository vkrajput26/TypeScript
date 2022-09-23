import React, { useState } from 'react';
import Button from './Button';
import Header from './Header';

function Counter() {

    const [count,setCount]=useState(0)

    const handleClick=(value:number)=>{
        setCount(count+value)
    }
    return (
        <div>
            <Header label="counter"/>
            <Header label='Label 1' >
                <div>Chil div 1</div>
                <div>Chil div 1</div>
                <div>Chil div 1</div>
            </Header>
            <Header label={`${count}`}/>
            <Button label='Add' handleClick={()=>handleClick(1)} />
            <Button label='Reduse' handleClick={()=>handleClick(-1)}  />
        </div>
    );
}

export default Counter;