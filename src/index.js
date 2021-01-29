import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Room() {
  const [value, setValue] = React.useState(true);
  
   function Click () {
   setValue((prevValue) => !prevValue)
   }

  return (
    <div id = {"btn"} className= {(value === true)? "Bright" :"Dark"}>
      <div className= {"text"}>The room is{(value === true) ? "Bright"  : "Dark"}    </div>
     
      <button onClick={Click}> Change </button>
    </div>
  );
}

ReactDOM.render(<Room />,
  document.getElementById('root')
);



