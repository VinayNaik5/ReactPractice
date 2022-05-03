// import React, {useState} from 'react';


// const GrandChild = (props) =>{
//   return (
//     <div>
//       <h3>Grand child</h3>
//       <Child brand={props.brand}/>
//     </div>
//   )
// }


// const Child = (props) =>{
//   return (
//     <div>
//       <h2>Child component: brand name {props.brand}</h2>
//     </div>

//   )
// }

// const App = () =>{
//   const [brandName] = useState("ff");
//   return (
//     <div>
//       <h1>Hello</h1>
      
//       <GrandChild brand={brandName}/>
//     </div>
//   )
// }

// export default App;


import React, {Fragment} from "react";
import Provider from "./provider";
import Context from "./context";





const Agents = () =>{
  return <AgentOne/>
}

const AgentOne = () =>{
  return <AgentTwo/>
}

const AgentTwo = ()=>{
  return (
    <div>
    <Context.Consumer>
    {
      (context) =>(
        <Fragment>
          <h3>Agent Mission Info from agent two</h3>
          <p>Mission Name: {context.data.mname}</p>
          <p>MIssion Staus: {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}>click to accept</button>
        </Fragment>
      )
    }
  </Context.Consumer>
  
  <AgentBond/>
  </div>)
}

const AgentBond = () =>{
  return(
    <Context.Consumer>
      {
        (context) =>(
          <Fragment>
            <h3>Agent Mission Info</h3>
            <p>Mission Name: {context.data.mname}</p>
            <p>MIssion Staus: {context.data.accept}</p>
            <button onClick={context.isMissionAccepted}>click to accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  )
}

const App = () =>{
  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents/>
      </Provider>
    </div>
  )
}

export default App;