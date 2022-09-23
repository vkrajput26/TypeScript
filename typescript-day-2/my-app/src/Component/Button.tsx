import React from 'react';


interface IButtonProps{
    label:string,
    handleClick:()=>void
}

//label,onclick

const Button = (props:IButtonProps) => {
   const {label,handleClick}=props
   
    return (
        <div>
            <button onClick={handleClick} >{label}</button>
        </div>
    );
};

export default Button;