import React from 'react';

interface IHeaderProps{
    label?:string;
    children?:JSX.Element | JSX.Element[];  // | => union
}

function Header({label='Default Props',children}:IHeaderProps) { //we can do destructuring also  see in button component
    return (
        <div>

            <h1>{label}</h1>
        {children}
        </div>
    );
}

export default Header;