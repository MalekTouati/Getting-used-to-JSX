import React from 'react';
import "./style.css";
import image  from './berbertowns.jpg'

function App() {
  return (
    <div style={{border:"solid 1px black" , maxWidth:"100vw"}}>
      <h1 className="title red">Tunisia</h1>
        <br/>
        <img src="/sidiBouSaid.jpg"/>
        <img src={image} />
        <br/>
    </div>
  );
}

export default App;
