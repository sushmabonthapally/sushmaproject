import React from 'react';
import './Person.css';

const myperson = (props)=>
{
   return ( 
   <div className='myperson'>
       <h5 onClick={props.clickme}>Iam  {props.name} and my age is {props.age}</h5>
       <h5>{props.children}</h5>
       <input type='text' onChange={props.change} value={props.name}/>
    </div>
    );
   }
  
export default myperson;
