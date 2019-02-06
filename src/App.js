import React, { Component } from 'react';
import './App.css';
import Myperson from './Person';
class App extends Component {
  state={
    personnames:[
    {id:'a1',name:'sushma',age:16},
    {id:'a2',name:'bablu',age:20},
    {id:'a3',name:'sai',age:22}
    ],
    myactivites:'sleeping',
    showperson:false
  }
  clicknamehandler=()=>
  {
    this.setState({showperson:true})
  }
  inputnamechangehandler=(event,id)=>
  {
    const availableindex=this.state.personnames.findIndex(p=>
      {
        return p.id===id;
      })
      const availableperson={...this.state.personnames[availableindex]};
      availableperson.name=event.target.value;
      const existingperson=[...this.state.personnames];
      existingperson[availableindex]=availableperson;
     this.setState({personnames:existingperson})
  }
  deletenamehandler=(personindex)=>
  {
  const personname=[...this.state.personnames];
  personname.splice(personindex,1);
  this.setState({personnames:personname})
  }
  render() {
    const mystyle={
          border:'1px solid black',
          padding:'10px',
          fontWeight:'bold',
          fontSize:'16px',
          backgroundColor:'red',
          cursor:'pointer',
          borderRadius:'4px',
    }
    let persons=null;
     if(this.state.showperson)
     {
       persons =
       (
         <div>
         {
           this.state.personnames.map((myvalue,currentindex)=>{
             return <Myperson 
            name={myvalue.name} and 
            age ={myvalue.age} 
            clickme={this.deletenamehandler.bind(this,currentindex)}
            key={myvalue.id}
            change={(event)=>this.inputnamechangehandler(event,myvalue.id)}/>
           })
         }
         </div>
         
        );
        mystyle.backgroundColor = "green";  
        }
        const classes=[];
        if(this.state.personnames.length<=2)
        classes.push('red');
        if(this.state.personnames.length<=1)
        classes.push('bold'); 
      return (
      <div>
       <header className='app' >
      <h3 className={classes.join('  ')}>welcome to react</h3>
      <button style={mystyle} onClick={this.clicknamehandler}>click on me</button>
      {persons}
        </header>
      </div>
      
      );
  
  }
}

export default App;
