import React from 'react';

const userinput=(props)=>
{
    return(
        <div className='myuser'>
        <input type='text' onChange={props.onchange} value={props.username}/>
        </div>
    );
}
export default userinput;